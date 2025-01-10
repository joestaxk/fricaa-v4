import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

export const Section5 = () => {
    useGSAP(() => {
        gsap.fromTo(".gsap-section5",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: .5,
                scrollTrigger: {
                    trigger: ".gsap-section5",
                    start: "top 70%",
                    end: "top 20%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                }
            }
        );
        
        gsap.fromTo(".gsap-section5-p",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: .4,
                ease: "power2.out",
                stagger: .5,
                scrollTrigger: {
                    trigger: ".gsap-section5-p",
                    start: 'top 100%',
                    end: "35%",
                    scrub: true
                }
            }
        ); 
    }, []);
    return (
        <div className="flex justify-center items-center">
            <div className="mt-[5rem] flex flex-col lg:flex-col items-center lg:justify-between gap-[5rem] md:min-h-[500px] xl:w-[1200px] lg:w-[1024px] space-y-2">
                <div className="roboto_slab lg:text-[5rem] sm:text-[3rem]  text-[2rem] font-semibold lg:text-left text-center gsap-section5 leading-[1]">
                    <div className="gsap-section5">OUR</div>
                    <div className="gsap-section5">MISSION</div>
                </div>

                <div className="lg:w-[700px] max-w-full text-[#ebebeb]">
                    <ul className='lg:space-y-[2rem]  space-y-[1rem]'>
                        <li className='text-left gsap-section5-p'>
                            <h2 className='text-[1.2rem] capitalize font-semibold text-[#E4317D]'>revolutionizing connection</h2>
                            <div className="text-sm text-gray-300">Transforming how young people connect, share, and grow together.</div>
                        </li>

                        <li className='text-left gsap-section5-p'>
                            <h2 className='text-[1.2rem] capitalize font-semibold text-[#E4317D]'>empowerment and Self-esteem</h2>
                            <div className="text-sm text-gray-300">Providing a space to build new friendships and boost self-esteem.</div>
                        </li>

                        <li className='text-left gsap-section5-p'>
                            <h2 className='text-[1.2rem] capitalize font-semibold text-[#E4317D]'>Joy of social interaction</h2>
                            <div className="text-sm text-gray-300">Offering a vibrant space to embrace social interaction free from the pressures of likes and follower counts.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
