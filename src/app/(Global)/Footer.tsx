"use client";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

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
        </footer>
    );
}
