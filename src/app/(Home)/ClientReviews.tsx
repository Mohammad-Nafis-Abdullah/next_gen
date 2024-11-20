"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";
import { faker } from "@faker-js/faker";
import { MouseEventHandler, useEffect, useState } from "react";
import ReviewsModal from "./ReviewsModal";

export interface user_rating {
    id: string;
    userName: string;
    rating: number;
    message: string;
}

function ratings_data(size: number): user_rating[] {
    const data: user_rating[] = [];

    for (let i = 0; i < size; i++) {
        data.push({
            id: faker.string.ulid(),
            userName: faker.person.fullName(),
            rating: faker.number.int({ min: 3, max: 5 }),
            message: faker.lorem.paragraph({ min: 2, max: 5 }),
        });
    }
    return data;
}

export default function ClientReviews() {
    const [data, setData] = useState<user_rating[]>([]);
    const [modalData, setModalData] = useState<user_rating | null>(null);

    useEffect(() => {
        setData(ratings_data(10));
    }, []);

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
                            review={review}
                            onClick={() => setModalData(review)}
                        />
                    </div>
                ))}
            </Slider>
            <ReviewsModal modalData={modalData} setModalData={setModalData} />
        </section>
    );
}

const ReviewCard = ({
    review,
    onClick,
}: {
    review: user_rating;
    onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
    return (
        <Card
            onClick={onClick}
            className="shadow-md bg-primary/5 cursor-pointer"
        >
            <CardContent>
                <Typography
                    gutterBottom
                    className="text-black font-bold uppercase text-sm sm:text-base"
                >
                    {review.userName}
                </Typography>
                <Rating
                    name="text-feedback"
                    value={review.rating}
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
                    {review.message.length > 100
                        ? `${review.message.slice(0, 100)}...`
                        : review.message}
                </Typography>
            </CardContent>
        </Card>
    );
};
