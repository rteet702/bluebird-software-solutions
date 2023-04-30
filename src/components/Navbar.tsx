import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 hidden p-4 lg:block backdrop-blur">
            <Link
                className="flex items-center gap-2 text-xl font-bold w-fit"
                href="/"
            >
                <SunIcon className="w-8 h-8 text-orange-500" /> Bluebird
                Software Solutions LLC
            </Link>
        </nav>
    );
}
