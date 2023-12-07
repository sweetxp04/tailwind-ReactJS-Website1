import React, { useState } from "react";
import Pink from "../assets/pink.png";
import Green from "../assets/green.png";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);
    const packages = [
        {
            name: "start",
            monthlyPricing: 19,
            yearlyPrice: 199,
            description:
                "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Advance",
            monthlyPricing: 29,
            yearlyPrice: 250,
            description:
                "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Premium",
            monthlyPricing: 50,
            yearlyPrice: 300,
            description:
                "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];
    return (
        <div className="md:px-14 p-4 container mx-auto py-10">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl text-primary mb-4 font-bold">
                    Here are all our plans
                </h1>
                <p className="text-secondary md:w-1/3 mx-auto">
                    A simple paragraph is comprised of three major components.{" "}
                    The which is often a declarative sentence.
                </p>
                <div className="mt-10">
                    <label
                        htmlFor="toggle"
                        className="inline-flex items-center cursor-pointer"
                    >
                        <span
                            className="mr-8 text-primary font-semibold text-3xl"
                            onClick={() => {
                                setIsYearly(false);
                            }}
                        >
                            Monthly
                        </span>
                        <div
                            className="w-24 h-8  bg-purple rounded-full"
                            onClick={() => {
                                setIsYearly(!isYearly);
                            }}
                        >
                            <div
                                className={`h-8 w-8 rounded-full bg-slate-600 ${
                                    isYearly ? " bg-primary ml-auto" : "mr-auto"
                                }`}
                            ></div>
                        </div>
                        <span
                            className="ml-8 text-primary font-semibold text-3xl"
                            onClick={() => {
                                setIsYearly(true);
                            }}
                        >
                            Yearly
                        </span>
                    </label>
                </div>
            </div>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:w-11/12 mx-auto">
                {packages.map((element, index) => (
                    <div
                        key={index}
                        className="border py-6 md:px-6 px-4 rounded-lg priceCard"
                    >
                        <h2 className="text-center text-primary text-3xl font-bold">
                            {element.name}
                        </h2>
                        <p className="text-center py-6">
                            {element.description}
                        </p>
                        <h3 className="text-center">
                            <span className="text-4xl md:text-4xl font-bold text-purple">
                                {isYearly
                                    ? `${element.yearlyPrice} `
                                    : `${element.monthlyPricing}`}
                                $
                            </span>
                            /{isYearly ? `Yearly ` : `Monthly`}
                        </h3>
                        <ul className="py-6 p-2 space-y-4">
                            <li className="text-[18px] font-semibold flex items-center gap-4">
                                <img src={Green} alt="green" />
                                Videos of Lessons
                            </li>
                            <li className="text-[18px] font-semibold flex items-center gap-4">
                                <img src={Green} alt="green" />
                                Homework check
                            </li>
                            <li className="text-[18px] font-semibold flex items-center gap-4">
                                <img src={Green} alt="green" />
                                Additional practical task
                            </li>
                            <li className="text-[18px] font-semibold flex items-center gap-4">
                                <img src={Pink} alt="pink" />
                                Monthly conferences
                            </li>
                            <li className="text-[18px] font-semibold flex items-center gap-4">
                                <img src={Pink} alt="pink" />
                                Personal advice from teachers
                            </li>
                        </ul>
                        <div className="flex align-center justify-center">
                            <button className="border px-6 py-3 rounded-2xl hover:bg-purple hover:text-white">
                                Get started
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
