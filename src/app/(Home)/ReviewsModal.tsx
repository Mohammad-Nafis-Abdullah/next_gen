import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { user_rating } from "./ClientReviews";
import { Card, CardContent, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export default function ReviewsModal({
    modalData,
    setModalData,
}: {
    modalData: user_rating | null;
    setModalData: React.Dispatch<React.SetStateAction<user_rating | null>>;
}) {
    const handleClose = () => {
        setModalData(null);
    };

    return modalData ? (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={true}
            className="backdrop-blur-[2px]"
        >
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers className="bg-primary/5">
                <Card className="shadow-none bg-transparent">
                    <CardContent>
                        <Typography
                            gutterBottom
                            className="text-black font-bold uppercase text-sm sm:text-base"
                        >
                            {modalData?.userName}
                        </Typography>
                        <Rating
                            name="text-feedback"
                            value={modalData?.rating}
                            readOnly
                            precision={0.5}
                            emptyIcon={
                                <StarIcon
                                    style={{ opacity: 0.55 }}
                                    fontSize="inherit"
                                />
                            }
                        />
                        <Typography
                            sx={{ color: "text.secondary", mb: 1.5 }}
                            className="text-xs sm:text-sm font-bold text-gray-400 overflow-hidden"
                        >
                            {modalData?.message}
                        </Typography>
                    </CardContent>
                </Card>
            </DialogContent>
        </BootstrapDialog>
    ) : (
        <></>
    );
}
