import React from "react";
import Feature from "../assets/features.png";

const Features = () => {
    return (
        <div className="max-w-screen-xl mx-auto  my-16 md:px-10 px-8">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-3/4 mt-0 lg:mt-14">
                        Why we are better than others
                    </h3>
                    <p className="text-[16px] text-secondary font-semibold mt-4">
                        A simple paragraph is comprised of three major
                        components. The first sentence, which is often a
                        declarative sentence, is called the “topic sentence.”
                    </p>
                </div>
                <div className="w-full lg:w-3/4 flex flex-col gap-4 md:flex-row justify-between items-center">
                    <div className="pt-6">
                        <div className="h-[350px] w-[250px] featureCard flex flex-col items-center justify-evenly hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <img
                                src={Feature}
                                alt="feature"
                                className="max-w-[70%]"
                            />
                            <h3 className="text-primary text-bold text-3xl w-3/6 text-left">
                                Conventient study schedule
                            </h3>
                        </div>
                    </div>
                    <div className="pt-6 md:pt-28">
                        <div className="h-[350px] w-[250px] featureCard flex flex-col items-center justify-evenly hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <img
                                src={Feature}
                                alt="feature"
                                className="max-w-[70%]"
                            />
                            <h3 className="text-primary text-bold text-3xl w-3/6 text-left">
                                Conventient study schedule
                            </h3>
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="h-[350px] w-[250px] featureCard flex flex-col items-center justify-evenly hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <img
                                src={Feature}
                                alt="feature"
                                className="max-w-[70%]"
                            />
                            <h3 className="text-primary text-bold text-3xl w-3/6 text-left">
                                Conventient study schedule
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
