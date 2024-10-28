"use client";
/* eslint-disable @next/next/no-img-element */
import Logo from "@/assets/logo.png";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Button, Drawer } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav_routes = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/why-choose-us",
        label: "Why Choose Us",
    },
    {
        path: "/our-services",
        label: "Our Services",
    },
    {
        path: "/testimonials",
        label: "Testimonials",
    },
    {
        path: "/contact-us",
        label: "Contact Us",
    },
];

export default function Header() {
    const path = usePathname();
    const [open, setOpen] = useState(false);
    const width = useWindowWidth();

    console.log(width);

    return (
        <div className="bg-[#1E1A65] text-white flex items-center py-1">
            <section className="max-w-7xl mx-auto px-3 grow h-20 flex items-center justify-between">
                <img
                    src={Logo.src}
                    alt="NextGen Marketing Agency"
                    className="h-4/5"
                />
                {width >= 1024 ? (
                    <nav className="flex justify-center items-center gap-x-5">
                        {nav_routes.map((route, i) => (
                            <Link
                                key={i}
                                href={route.path}
                                className={`font-bold ${
                                    path === route.path
                                        ? "underline underline-offset-4 decoration-2"
                                        : ""
                                }`}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                ) : (
                    <>
                        <Button
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            menu icon
                        </Button>
                        <Drawer
                            open={open}
                            onClose={() => setOpen(false)}
                        >
                            <nav className="flex flex-col justify-start items-start gap-x-5 bg-[#1E1A65] h-full pt-20 w-60 pl-8 gap-y-5 text-white">
                                {nav_routes.map((route, i) => (
                                    <Link
                                        key={i}
                                        href={route.path}
                                        className={`font-bold ${
                                            path === route.path
                                                ? "underline underline-offset-4 decoration-2"
                                                : ""
                                        }`}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                            </nav>
                        </Drawer>
                    </>
                )}
            </section>
        </div>
    );
}
