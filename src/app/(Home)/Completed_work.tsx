"use client";
/* eslint-disable @next/next/no-img-element */
import completed_work from "@/assets/completed_work.gif";
import cloud from "@/assets/cloud.png";
import { useCountUp } from "react-countup";
import { useRef } from "react";

export function Completed_work() {
    return (
        <div
            className={`grow shrink basis-[555px] max-w-sm sm:max-w-[610px] mx-auto relative`}
        >
            <img
                src={completed_work.src}
                alt="Our completed work"
                className="max-h-[75vh] mx-auto"
            />
            <Cloud count={10} title="Web Projects" top="0px" left="35%" />
            <Cloud count={15} title="Seo Projects" top="40%" right="0px" />
            <Cloud count={60} title="Video Edited" top="40%" left="0px" />
        </div>
    );
}

//cloud component
function Cloud({
    count = 0,
    title = "",
    top = "auto",
    right = "auto",
    bottom = "auto",
    left = "auto",
}: {
    count: number;
    title: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}) {
    const countUpRef = useRef(null);
    const {} = useCountUp({
        ref: countUpRef,
        start: 0,
        end: count,
        suffix: "+",
        duration: 3,
        delay:2
    });

    // useEffect(() => {
    //     update(count);
    // }, [count,update]);
    return (
        <div
            // className="bdr"
            style={{
                position: "absolute",
                top: top,
                right: right,
                bottom: bottom,
                left: left,
            }}
        >
            <section
                className={`relative w-28 sm:w-44 aspect-[5/3.5] flex flex-col font-bold text-[10px] sm:text-xl justify-center items-center`}
            >
                <img
                    src={`${cloud.src}`}
                    alt=""
                    className="absolute top-0 left-0 right-0 bottom-0 min-h-0 min-w-0 aspect-[5/3.5] z-10"
                />
                <span ref={countUpRef} className="z-20"/>
                <span className="z-20">{title}</span>
            </section>
        </div>
    );
}
