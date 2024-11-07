import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./(Global)/Header";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const font = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
    title: "NextGen marketing agency",
    // description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${font.className} antialiased`}
            >
                <Header />
                <div className="max-w-7xl mx-auto px-3">{children}</div>
            </body>
        </html>
    );
}
