import React from "react";
import { AiOutlineFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Copyright = () => {
    return (
        <div className="bg-primary">
            <div className="container mx-auto">
                <div className="h-[1px] bg-white w-full opacity-90"></div>
                <div className="p-4 md:p-0 md:py-6 text-white md:flex items-center justify-between">
                    <div>
                        <p className="opacity-80 text-center md:text-start">
                            @ XYZ 20XX --- 20XX. All rights reserved.
                        </p>
                    </div>
                    <div>
                        <ul className="text-3xl opacity-80 flex gap-4 justify-center mt-4 md:mt-0">
                            <li>
                                <a href="/">
                                    <AiOutlineFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <AiFillTwitterSquare />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <CiLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
