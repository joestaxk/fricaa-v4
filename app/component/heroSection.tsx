"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
export const HeroSection = () => {
    useGSAP(() => {
        gsap.fromTo(".gsap-goIn", { x: 180 }, {
            x: 400,
            duration: .5,
            ease: "power1.inOut",
            scrollTrigger: {
                start: 'top 10%',
                end: "bottom 20%",
                scrub: true
            }
        })

        gsap.to(".gsap-scale", {
            scale: 0,
            duration: .5,
            ease: "power1.inOut",
            scrollTrigger: {
                start: 'top 10%',
                end: "bottom 20%",
                scrub: true
            }
        })


        gsap.fromTo(".gsap-herotext", { opacity: 0 }, {
            opacity: 1,
            x: 180,
            duration: .5,
            ease: "power1.inOut",
        })

        gsap.fromTo(".gsap-herotextsmall", { opacity: 0 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
        })



        gsap.to(".gsap-phone", {
            opacity: 1,
            y: 100,
            ease: "power1.inOut",
            duration: 1,
        })
        gsap.to(".gsap-phone2", {
            opacity: 1,
            y: 150,
            ease: "power1.inOut",
            duration: 1,
        })
        gsap.fromTo(".gsap-herotext2", { opacity: 0 }, {
            opacity: 1,
            x: -300,
            ease: "power1.inOut",
            duration: .5
        })
        gsap.fromTo(".gsap-stagger", { opacity: 0 }, {
            opacity: 1,
            ease: "power1.inOut",
            duration: 1,
            delay: .5,
            stagger: 1
        })

    })
    return (
        <div className='gsap-scale lg:h-screen h-[80vh] relative flex justify-center  overflow-hidden w-full after:content after:h-full after:absolute after:inset-0 after:z-[5] after:bg-gradient-to-t after:from-black after:to-[30%] after:to-transparent after:block '>
            <div className="2xl:w-[1500px] w-[1200px] max-w-full relative xl:flex lg:block flex flex-col">
                <div className="gsap-herotext gsap-goIn 2xl:text-[8rem]  xl:text-[5.5rem] lg:text-[7rem] leading-[1] z-[1] xl:text-right translate-y-[25vh] xl:left-[-10vw] right-[20vw] w-fit absolute opacity-0 lg:block hidden">
                    <div className="hidden xl:block">Connect</div>
                    <div className="hidden xl:block">People</div>
                    <div className="gsap-stagger opacity-0 xl:hidden lg:block hidden">Connect</div>
                    <div className="gsap-stagger opacity-0 xl:hidden lg:block hidden">People</div>
                    <div className="gsap-stagger opacity-0 xl:hidden lg:block hidden">Expand</div>
                    <div className="gsap-stagger opacity-0 xl:hidden lg:block hidden">Horizon</div>
                </div>

                <div className="gsap-herotextsmall opacity-0 translate-y-20 md:text-[5.7rem] sm:text-[4rem] text-[3.4rem] text-center lg:hidden block leading-[1] mt-10">
                    <div className="">Connect People</div>
                    <div className="">Expand Horizon</div>
                </div>
                <div
                    className="absolute inset-0 w-full h-full xl:block hidden"
                    style={{
                        background: 'linear-gradient(90deg, rgb(0,0,0,0) 0%, rgba(0,0,0, .7) 30%, rgba(0,0,0,.9) 35%, rgb(0,0,0,0) 100%)',
                        zIndex: 4
                    }}
                />
                <div className="absolute gsap-phone z-[5] 2xl:left-[500px] xl:left-[400px] translate-y-[800px] xl:block hidden">
                    {/* <div className="w-[100px] h-full  absolute  z-[-1] bg-gradient-to-r from-black to-[100%] to-transparent right-[-3vw]"></div> */}
                    {/* <div className="w-[100px] h-full  absolute  z-[-1] bg-gradient-to-l from-black to-[100%] to-transparent left-[-3vw]"></div> */}
                    <Image src={"/iPhone.png"} className='2xl:w-[500px] w-[400px] xl' width={500} height={300} alt='iphone pro' />
                </div>
                <Image src={"/iphone-small.png"} className='gsap-phone lg:translate-y-[300px] translate-y-[800px] lg:m-0 mx-auto opacity-0 xl:hidden lg:block hidden' width={500} height={300} alt='iphone pro' />
                <Image src={"/iphone-small.png"} className='gsap-phone2 lg:translate-y-[300px] translate-y-[800px] lg:m-0 mx-auto opacity-0 xl:hidden lg:hidden' width={500} height={300} alt='iphone pro' />

                <div className="gsap-herotext2 2xl:text-[8rem]   xl:text-[5.5rem] text-[7rem] leading-[1] z-[1]  translate-y-[25vh] xl:text-left text-right w-fit absolute 2xl:right-[-250px] xl:right-[-200px] opacity-0 xl:block hidden">
                    <div className="">Expand</div>
                    <div className="">Horizon</div>
                </div>

            </div>

            <button className="lg:block hidden absolute bottom-[10vh] right-[42%] z-10 group w-[230px]  items-center justify-center  bg-[#000] py-3 px-5 rounded-full">
                Get Early Access Now
                <div className=" absolute top-0 right-0 md:block hidden rounded-full   w-[230px] h-[50px] z-[-10] bg-gradient-to-l group-hover:bg-gradient-to-r from-[#EF3FE8] via-[#F94A3F] to-[#E4317D] transition-all duration-200"></div>
            </button>
        </div>
    )
}
