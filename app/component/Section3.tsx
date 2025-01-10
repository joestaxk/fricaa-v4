'use client';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'
import { CHAT_PROPS } from '../utils/constants';
import { FakeChats } from './fakeChats';

gsap.registerPlugin(ScrollTrigger)
export const Section3 = () => {
    useGSAP(() => {
        gsap.to('.gsap-section3text', {
            opacity: 1,
            yoyo: true,
            ease: 'circ.inOut',
            duration: .2,
            stagger: {
                amount: .5,
                grid: [2, 1]
            },
            scrollTrigger: {
                start: 'top 80%',
                end: "30%",
                scrub: true
            }
        })
        gsap.to('.gsap-mockup', {
            y: 100,
            scrollTrigger: {
                start: 'top 80%',
                scrub: true
            }
        })
    })
    return (
        <div className=' w-full flex justify-center'>
            <div className="relative w-[900px] h-[1400px] max-w-full flex items-center flex-col pt-44">
                <div className="roboto_slab lg:text-[5rem] text-[4rem] font-[600] uppercase text-center leading-[1]">
                    <div className="gsap-section3text opacity-0">Expand</div>
                    <div className="gsap-section3text opacity-0">Your world</div>
                    <div className="gsap-section3text opacity-0">Meet</div>
                    <div className="gsap-section3text opacity-0">New</div>
                    <div className="gsap-section3text opacity-0">Friend</div>
                    <div className="gsap-section3text opacity-0">on fricaa</div>
                </div>

                <div className="relative overflow-hidden translate-y-[30vh] gsap-mockup select-none">
                    <img src="/frame.svg" alt="" />
                    <div className="absolute md:block hidden rounded-[9%] w-[300px] h-[620px] top-6 left-5  blur-md saturate-200 inset-0 z-[-1] bg-gradient-to-l group-hover:bg-gradient-to-r from-[#EF3FE8] via-[#F94A3F] to-[#E4317D] transition-all duration-200"></div>
                    <video className='absolute top-6 left-5 w-[300px] h-[620px] rounded-[9%] select-none' playsInline loop muted autoPlay>
                        <source src='https://framerusercontent.com/assets/UDIqZrNAE2Co85ZHBf6G2BdAkVw.mp4' />
                    </video>
                    <div className="asboulute inset-0 bg-black z-10"></div>
                </div>
                <div className="absolute bottom-[50%] w-full">

                    {
                        CHAT_PROPS.map((v, i) => (
                            <FakeChats
                                key={i}
                                imgSrc={"chatlandingpage/" + (i + 1) + ".webp"}
                                user={v.name}
                                message={v.message}
                                i={i}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
