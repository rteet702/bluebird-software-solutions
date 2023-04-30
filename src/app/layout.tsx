import Navbar from "@/components/Navbar";
import "./globals.css";
import { Ubuntu } from "next/font/google";

const pathway = Ubuntu({ subsets: ["latin"], weight: "300" });

export const metadata = {
    title: "Bluebird Software Solutions LLC",
    description:
        "Created and maintained by Robert Teets, Owner of Bluebird Software Solutions LLC.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${pathway.className} overflow-x-hidden`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
