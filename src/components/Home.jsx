import React from "react";
import Hero from "../assets/Hero.png";

const Home = () => {
    return (
        <div
            className="md:px-10 p-4 max-w-screen-xl mx-auto mt-4 flex flex-col-reverse md:flex-row
        justify-between items-center gradientbg rounded-xl rounded-br-[80px]"
        >
            <div>
                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold md:w-3/4 mb-3 text-white text-center md:text-start mt-4 md:mt-0">
                    Develop your skills without diligence
                </h1>
                <p className="text-tartiary md:w-3/4">
                    A good example of a paragraph contains a topic sentence,
                    details and a conclusion. There are many different kinds of
                    animals that live in China.
                </p>
                <div className="mt-2">
                    <button className="py-2 p-6 m-2 text-white font-bold hover:bg-indigo-600 transition-all duration-300 bg-[#9A7AF1] rounded-md">
                        Get Started
                    </button>
                    <button className="py-2 p-6 m-2 text-white font-bold hover:bg-indigo-600 transition-all duration-300 bg-[#9A7AF1] rounded-md">
                        Discount
                    </button>
                </div>
            </div>
            <div>
                <img src={Hero} alt="banner" className="lg:h-[386px] img100" />
            </div>
        </div>
    );
};

export default Home;
