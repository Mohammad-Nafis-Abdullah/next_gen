"use client";
import { FormEvent } from "react";
import { FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function page() {
    const handleSubmit = (
        e: FormEvent<HTMLFormElement> & { target: { reset: () => void } }
    ) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_5l5yl0g",
                "template_yxwgmue",
                e.target as string | HTMLFormElement,
                "Jl7-8rR2TOR_6XGxA"
            )
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Mail has been sent successfully",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                },
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Mail has been sent successfully",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            )
            .finally(() => {
                e.target.reset();
            });
    };

    return (
        <div className="py-14 flex flex-row justify-between gap-x-10 gap-y-5 flex-wrap items-start px-3 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-x-3 gap-y-1.5 shadow-lg rounded-md px-3 pb-3 pt-5 bg-primary">
                <div
                    className={`text-sky-500 rounded-sm text-2xl mt-0.5 animate-bounce`}
                >
                    <FiMail />
                </div>
                <div className="space-y-1 text-gray-300 openSans font-bold">
                    <h4 className="font-body text-xl">For any query ?</h4>
                    <p className="text-paragraph">I am here to help you.</p>
                    <p className="text-sky-500 firaCode font-bold">
                        Mail to nafisabdullah2@gmail.com
                    </p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-8 grow text-primary/70"
            >
                <div className="flex gap-8">
                    <input
                        required
                        className={`bg-transparent text-paragraph h-[60px] border border-primary pl-6 w-full font-bold text-[15px] rounded focus:outline focus:border-1 focus:scale-[1.01] focus:border-primary placeholder:text-primary/70 focus:placeholder:text-primary backdrop-blur-md focus:text-primary transition-all`}
                        type="text"
                        placeholder="Your name"
                        name="user_name"
                    />
                    <input
                        required
                        className={`bg-transparent text-paragraph h-[60px] border border-primary pl-6 w-full font-bold text-[15px] rounded focus:outline focus:border-1 focus:scale-[1.01] focus:border-primary placeholder:text-primary/70 focus:placeholder:text-primary backdrop-blur-md focus:text-primary transition-all`}
                        type="email"
                        placeholder="Your email"
                        name="user_email"
                    />
                </div>
                <input
                    required
                    className={`bg-transparent text-paragraph h-[60px] border border-primary pl-6 w-full font-bold text-[15px] rounded focus:outline focus:border-1 focus:scale-[1.01] focus:border-primary placeholder:text-primary/70 focus:placeholder:text-primary backdrop-blur-md
                    focus:text-primary transition-all`}
                    type="text"
                    placeholder="Subject"
                    name="subject"
                />
                <textarea
                    required
                    className={`bg-transparent text-paragraph h-[200px] border resize-none border-primary p-6 w-full font-bold text-[15px] rounded focus:outline focus:border-1 focus:scale-[1.01] focus:border-primary placeholder:text-primary/70 focus:placeholder:text-primary backdrop-blur-md 
                    focus:text-primary transition-all`}
                    placeholder="Your message"
                    name="message"
                ></textarea>
                <input
                    type="submit"
                    className={`border-primary border-[3px] rounded inline-block px-8 py-1 openSans uppercase tracking-wider transition-all text-primary font-extrabold hover:shadow-[0_0_0px_rgb(34,197,94)] hover:bg-primary hover:text-white text-sm duration-300 cursor-pointer`}
                    value="submit"
                ></input>
            </form>
        </div>
    );
}
