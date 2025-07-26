"use client";

import Button from "@/components/Button";
import designExampleImage from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-8 hidden lg:block">
                    <Image src={designExampleImage} alt="Design image 1" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} alt="Design image 2" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan" color="red-gradient" />
                </div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 cursor-pointer px-4 rounded-full text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-[length:200%_200%] bg-[position:0%_50%] animate-gradientMove transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)]">
                        ✨ FULL STACK DEVELOPMENT
                    </div>
                </div>

                {/* H1 com efeito de Partículas Flutuantes */}
                <div className="relative mt-6 py-8">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center text-white hover:scale-105 transition-transform duration-700 ease-out relative z-10 cursor-default">
                        Impactful Design, created effortlessly
                    </h1>
                    {/* Partículas flutuantes */}
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 md:w-2 md:h-2 bg-lime-400 rounded-full opacity-60 pointer-events-none animate-float"
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                                animationDelay: `${Math.random() * 3}s`,
                                boxShadow: "0 0 6px currentColor",
                            }}
                        />
                    ))}

                    {/* Partículas maiores e mais brilhantes */}
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={`large-${i}`}
                            className="absolute w-3 h-3 bg-green-300 rounded-full opacity-40 pointer-events-none animate-float-slow"
                            style={{
                                left: `${15 + Math.random() * 70}%`,
                                top: `${15 + Math.random() * 70}%`,
                                animationDuration: `${5 + Math.random() * 3}s`,
                                animationDelay: `${Math.random() * 2}s`,
                                boxShadow: "0 0 12px currentColor",
                            }}
                        />
                    ))}

                    {/* Partículas pequenas e rápidas */}
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={`small-${i}`}
                            className="absolute w-0.5 h-0.5 bg-emerald-300 rounded-full opacity-80 pointer-events-none animate-float-fast"
                            style={{
                                left: `${5 + Math.random() * 90}%`,
                                top: `${5 + Math.random() * 90}%`,
                                animationDuration: `${2 + Math.random() * 2}s`,
                                animationDelay: `${Math.random() * 4}s`,
                                boxShadow: "0 0 4px currentColor",
                            }}
                        />
                    ))}
                </div>

                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    From UX wireframes to cloud-native APIs, we merge creativity
                    and technology to deliver seamless, human-centered digital
                    experiences.
                </p>

                <form className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your best email"
                        className="bg-transparent px-4 md:flex-1 text-white placeholder-white/50 focus:outline-none focus:ring-0 focus:border-none w-full"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Checkout Now
                    </Button>
                </form>
            </div>
        </section>
    );
}
