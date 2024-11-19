"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ratings_data from "@/data/ratings";
import Slider from "react-slick";

export default function ClientReviews() {
    const data = ratings_data(10);
    const settings = {
        className: "sm:pl-2",
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section>
            <h3 className="text-center font-extrabold text-3xl mb-5">
                Client <span className="text-primary">Reviews</span>
            </h3>
            <Slider {...settings}>
                {[...data].map((review) => (
                    <div key={review.id} className="px-2">
                        <ReviewCard
                            user_name={review.userName}
                            star_count={review.rating}
                            review_text={review.message}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
}

const ReviewCard = ({
    user_name,
    star_count,
    review_text,
}: {
    user_name: string;
    star_count: number;
    review_text: string;
}) => {
    return (
        <Card className="h-auto shadow-md bg-primary/5">
            <CardContent>
                <Typography
                    gutterBottom
                    className="text-black font-bold uppercase text-sm sm:text-base"
                >
                    {user_name}
                </Typography>
                <Rating
                    name="text-feedback"
                    value={star_count}
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
                    {review_text.length > 100
                        ? `${review_text.slice(0, 100)}...`
                        : review_text}
                </Typography>
            </CardContent>
        </Card>
    );
};
