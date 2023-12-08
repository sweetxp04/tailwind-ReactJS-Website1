import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className=" bg-primary mt-6">
            <div className="container mx-auto px-4 py-8 text-white space-y-4 sm:grid sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-3">
                    <div className="flex justify-center sm:justify-start">
                        <a
                            href="/"
                            className="text-2xl font-semibold flex items-center space-x-3"
                        >
                            <img
                                className="w-10 inline-block items-center"
                                src={logo}
                                alt="logo"
                            />
                            <span className="text-white font-semibold">
                                XYZ
                            </span>
                        </a>
                    </div>
                    <p className="text-center sm:text-start opacity-70">
                        A simple paragraph is comprised of three major
                        components. The first sentence, which is often a
                        declarative sentence.
                    </p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            className="bg-[#9a7af159] p-2 flex-1 focus:outline-none rounded-md md:mt-8"
                        />
                        <button className="py-2 px-4 border rounded-md bd-[#9A7AF1] text-white md:mt-8 hover:bg-white hover:text-black transition-all duration-300 -ml-2 bg-primary">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-center pb-2 font-semibold">
                        Platform
                    </h2>
                    <ul className="space-y-2">
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                Overview
                            </a>
                        </li>
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                Features
                            </a>
                        </li>
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                About
                            </a>
                        </li>
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-center pb-2 font-semibold">
                        Help
                    </h2>
                    <ul className="space-y-2">
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                How does it works?
                            </a>
                        </li>
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                Where to ask question?
                            </a>
                        </li>
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                How to play?
                            </a>
                        </li>
                        <li className="flex justify-center">
                            <a className="opacity-70" href="#">
                                What is needed for this?
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-center pb-2 font-semibold opacity-70">
                        Contacts
                    </h2>
                    <p className="text-center opacity-70">(012) 1234-567-890</p>
                    <p className="text-center opacity-70">
                        123 xyz xyz qwuerybaihefv, qiwu - hrebcl 095467
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
