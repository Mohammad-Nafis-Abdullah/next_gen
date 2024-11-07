// @flow
"use client"
import { useRouter } from "next/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";

export function AboutNextGen() {
  const router = useRouter();
    return (
        <div className={`grow shrink basis-[482px]`}>
            <h3 className="hidden lg:block font-extrabold text-3xl mb-5">
                About <span className="text-secondary">NextGen</span>
            </h3>
            <article className={`text-sm sm:text-xl font-bold`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                saepe similique assumenda magnam? Quia delectus adipisci
                dolorem. Debitis laudantium corrupti voluptatem reiciendis,
                molestias ab dolorum ullam quaerat, vitae magni suscipit! Cum,
                eligendi optio esse est explicabo voluptatem earum officia
                reiciendis?
            </article>
            <button
                onClick={()=>router.push("/contact-us")}
                className={`text-white bg-blue-600 h-12 w-44 flex items-center px-5 gap-5 rounded-md hover:bg-blue-700 transition-colors duration-20 font-bold mt-5`}
            >
                <span>Contact Us</span>
                <FaAngleDoubleRight />
            </button>
        </div>
    );
}
