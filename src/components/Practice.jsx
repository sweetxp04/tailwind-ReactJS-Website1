import React from "react";
import prac from "../assets/practice.png";

const Practice = () => {
    return (
        <section className="container mx-auto p-6">
            <div className="w-full md:my-8 p-6 md:flex flex-row-reverse md:gap-6">
                <div className="md:w-1/2 flex items-center md:items-start">
                    <img
                        src={prac}
                        alt="Improving"
                        className="rounded w-full "
                    />
                </div>
                <div className="md:w-1/2 md:pt-12">
                    <h1 className="text-3xl my-4 text-center md:text-left lg:text-5xl md:text-4xl font-bold text-primary">
                        We have been improving our product{" "}
                        <span className="text-purple">for many years.</span>
                    </h1>
                    <p className="text-secondary text-center md:text-left md:mt-8 text-xl mb-4">
                        A good example of a paragraph contains a topic
                        conclusion. 'There are many different kinds of animals
                        that live in China.
                    </p>
                    <button className="py-3 px-5 bg-purple text-white rounded hover:bg-yellow-400 hover:text-black transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Practice;
