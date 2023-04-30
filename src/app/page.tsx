"use client";

import {
    DocumentMagnifyingGlassIcon,
    UserGroupIcon,
    SignalIcon,
    CurrencyDollarIcon,
    NewspaperIcon,
    CloudIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Home() {
    const executeScroll = (divId: string) => {
        const div = document.querySelector(`#${divId}`);
        if (!div) return;
        div.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <section
                id="hero"
                className="h-[100svh] xl:flex items-center justify-center xl:px-32 bg-gradient-to-b from-sky-300 via-sky-200 to-[#74a8da]"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 100, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex-[2] flex flex-col gap-4 items-start relative z-10"
                >
                    <h1 className="text-8xl">
                        Web Design and Development
                        <span className="block text-6xl">
                            Built for a more{" "}
                            <span className="text-white">mountain</span>{" "}
                            lifestyle
                        </span>
                    </h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => executeScroll("about")}
                            className="p-4 font-bold transition-colors bg-orange-400 hover:bg-orange-300"
                        >
                            Learn More
                        </button>
                        <button
                            onClick={() => executeScroll("meeting")}
                            className="p-4 font-bold transition-colors bg-orange-400 hover:bg-orange-300"
                        >
                            Schedule a Meeting
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, right: -100 }}
                    animate={{ opacity: 100, right: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 right-0 flex-1"
                >
                    <CloudIcon className="text-white w-[1000px]" />
                    {/* Eventually put a logo here. */}
                </motion.div>
            </section>
            <section
                id="about"
                className="h-[100svh] bg-gradient-to-b from-[#74a8da] via-[#74a8da] to-[#537a9e] items-center justify-center text-2xl text-center text-white flex flex-col gap-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 100, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-8 p-4"
                >
                    <h2 className="text-4xl">What do we do?</h2>
                    <p>
                        Here at Bluebird Software Solutions LLC, our main
                        product is custom built web applications to fit whatever
                        your business needs.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-col items-center justify-center flex-1 h-64 gap-8 px-4 hover:flex-[1.1] transition-all shadow-lg cursor-pointer border-2 bg-sky-400 rounded-xl duration-500">
                            <CurrencyDollarIcon className="w-32" />
                            <h3>E-Commerce</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 h-64 gap-8 px-4 hover:flex-[1.1] transition-all shadow-lg cursor-pointer border-2 bg-sky-400 rounded-xl duration-500">
                            <DocumentMagnifyingGlassIcon className="w-32" />
                            <h3>Inventory Management</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 h-64 gap-8 px-4 hover:flex-[1.1] transition-all shadow-lg cursor-pointer border-2 bg-sky-400 rounded-xl duration-500">
                            <SignalIcon className="w-32" />
                            <h3>Static Websites</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 h-64 gap-8 px-4 hover:flex-[1.1] transition-all shadow-lg cursor-pointer border-2 bg-sky-400 rounded-xl duration-500">
                            <UserGroupIcon className="w-32" />
                            <h3>Employee Management</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 h-64 gap-8 px-4 hover:flex-[1.1] transition-all shadow-lg cursor-pointer border-2 bg-sky-400 rounded-xl duration-500">
                            <NewspaperIcon className="w-32" />
                            <h3>Blogs</h3>
                        </div>
                    </div>
                    <p>And much more!</p>
                </motion.div>
                <button
                    onClick={() => executeScroll("meeting")}
                    className="p-4 transition-all bg-white bg-opacity-0 border-2 border-white rounded-xl hover:bg-opacity-25"
                >
                    Interested? Click Here!
                </button>
            </section>
            <section
                id="meeting"
                className="h-[100svh]  bg-gradient-to-b from-[#537a9e] via-sky-700 to-sky-900 "
            ></section>
        </main>
    );
}
