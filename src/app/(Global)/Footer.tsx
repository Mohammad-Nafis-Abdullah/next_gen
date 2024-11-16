"use client";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

// @flow
export default function Footer() {
    return (
        <footer className="bg-primary px-3 py-5 space-y-3">
            <section className="flex justify-center items-center gap-5">
                <FaFacebookSquare
                    onClick={
                        () => {}
                        // window.open(
                        //     "https://www.facebook.com/mohammad.nafis.abdullah",
                        //     "_blank"
                        // )
                    }
                    className="text-white w-7 h-7 cursor-pointer hover:scale-110 transition"
                />
                <FaGithub
                    onClick={
                        () => {}
                        // window.open(
                        //     "https://github.com/Mohammad-Nafis-Abdullah",
                        //     "_blank"
                        // )
                    }
                    className="text-white w-7 h-7 cursor-pointer hover:scale-110 transition"
                />
                <FaLinkedin
                    onClick={
                        () => {}
                        // window.open(
                        //     "https://www.linkedin.com/in/mohammad-nafis-abdullah",
                        //     "_blank"
                        // )
                    }
                    className="text-white w-7 h-7 cursor-pointer hover:scale-110 transition"
                />
            </section>
            <h4 className="text-center text-white font-bold">
                Copyright &copy; {new Date().getFullYear()} NextGen. All Rights
                Reserved.
            </h4>

            {/* floating w.app icon */}
            <div>
                <a
                    className="fixed bottom-10 right-5 sm:right-10 cursor-pointer animate-bounce"
                    href="https://wa.me/+8801779895263"
                    target="_blank"
                    rel="noreferrer"
                >
                    <RiWhatsappFill
                        className={`relative text-green-500 size-12 rounded-full overflow-visible z-40`}
                    />
                    <div className="absolute top-2 left-2 size-8 rounded-full z-30 bg-white"/>
                </a>
            </div>
        </footer>
    );
}
