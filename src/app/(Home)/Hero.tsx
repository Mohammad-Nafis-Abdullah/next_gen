"use client";
import { Comfortaa } from "next/font/google";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const PHONE_NUMBER = "+8801779895263";

export default function Hero() {
    const [text] = useTypewriter({
        words: [
            "Web Development",
            "SEO",
            "Digital Marketing",
            "Vedio Editing",
            "Graphics Design",
        ],
        loop: 0,
    });

    return (
        <div className={`grow shrink basis-[555px] ${comfortaa.className}`}>
            <h1
                className={`text-3xl sm:text-5xl font-bold bdr`}
            >
                <span>
                    We are focused <br />
                    on <span className="text-secondary">{text}</span>
                </span>
                {/* <Cursor cursorColor="black" /> */}
            </h1>
            <article className={`py-5 text-base sm:text-xl font-bold`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                saepe similique assumenda magnam? Quia delectus adipisci
                dolorem. Debitis laudantium corrupti voluptatem reiciendis,
                molestias ab dolorum ullam quaerat, vitae magni suscipit! Cum,
                eligendi optio esse est explicabo voluptatem earum officia
                reiciendis?
            </article>
            <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className={`inline-block ${comfortaa.className} text-white bg-blue-600 h-12 w-44 flex items-center px-5 gap-5 rounded-md hover:bg-blue-700 transition-colors duration-20 font-bold`}
            >
                <span>Get Started</span>
                <FaAngleDoubleRight />
            </a>
        </div>
    );
}
