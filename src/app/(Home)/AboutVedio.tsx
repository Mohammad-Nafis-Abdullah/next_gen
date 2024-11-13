"use client";
import { Box } from "@mui/material";
// import axios from "axios";
import { useEffect, useRef, useState } from "react";

// @flow
export function AboutVedio() {
    const [isItemVisible, setIsItemVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // useEffect(() => {
    //     axios.get("/api/aboutVideo").then(({ data }) => {
    //         console.log(data);
    //     }).catch((err)=> {
    //         console.error(err);
    //     });
    // }, []);

    useEffect(() => {
        // console.log({ isItemVisible, video_ref });
        if (isItemVisible && videoRef.current) {
            videoRef.current.play();
        } else if (!isItemVisible && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isItemVisible]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([item]) => {
                // console.log({ item });
                setIsItemVisible(item.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
    }, []);

    return (
        <>
            <h3 className="lg:hidden basis-full text-center font-extrabold text-3xl">
                About <span className="text-secondary">NextGen</span>
            </h3>
            <div className={`grow shrink basis-[482px] lg:-mt-16`}>
                <Box
                    ref={videoRef}
                    component="video"
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    controls
                    borderRadius={2}
                    border={0}
                    width={"100%"}
                    mx={"auto"}
                    poster="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
                />
            </div>
        </>
    );
}
