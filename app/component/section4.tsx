"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { RefObject, useEffect, useRef } from 'react';

export const Section4 = () => {
    const scrollRef = useRef(null);
    const scrollRef2 = useRef(null);
    const containerRef = useRef(null);
    const containerRef2 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        function animateScroll(scrollRef: RefObject<HTMLDivElement|null>, containerRef: RefObject<HTMLDivElement|null>, opposite?: boolean) {
            if (!scrollRef.current) return;

            const width = window.innerWidth;
            const eleWidth = 200;
            const totalBoxes = Math.round((width / eleWidth) * 2);

            for (let i = 0; i < totalBoxes; i++) {
                const n = (i + 1) % 8;
                if (n) {
                    const box = document.createElement("div");
                    box.className = "min-w-[200px]  xl:h-[300px] lg:h-[250px] h-[200px] rounded-md overflow-hidden bg-white/10 backdrop-blur-xl";
                    const img = document.createElement("img");
                    img.src = `/carouselImg/${n}.avif`
                    img.className = "object-cover w-full h-full"
                    box.appendChild(img)
                    scrollRef.current.appendChild(box);
                }
            }

            const boxes = scrollRef.current.innerHTML;
            scrollRef.current.innerHTML += boxes;

            let scrollPos = 0;
            const speed = opposite ? -5 : 5; // Negative speed for opposite direction

            const animate = () => {
                if (!scrollRef.current || !containerRef.current) return;

                scrollPos += speed;

                if (Math.abs(scrollPos) >= scrollRef.current.scrollWidth / 2) {
                    scrollPos = 0;
                }

                scrollRef.current.style.transform = `translateX(${scrollPos}px)`;
                requestAnimationFrame(animate);
            };

            animate();
        }

        animateScroll(scrollRef, containerRef);
        animateScroll(scrollRef2, containerRef2, true);
    }, []);

    useGSAP(() => {
        gsap.fromTo(".gsap-section4",
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
                    trigger: ".gsap-section4",
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div className="relative lg:min-h-[900px]  overflow-hidden lg:pt-[5rem] py-[5rem]">
            {/* <div
                ref={containerRef}
                className="relative w-full overflow-hidden rotate-[-7deg] gsap-section4"
            >
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(90deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgb(0,0,0) 100%)',
                        zIndex: 10
                    }}
                />
                <div
                    ref={scrollRef}
                    className="flex items-center gap-5 transition-transform"
                    style={{ willChange: 'transform' }}
                >
                </div>
            </div> */}
            <div className="absolute h-full w-full z-[-1]">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(90deg, rgb(0,0,0,.3) 0%, rgba(0,0,0,.3) 15%, rgba(0,0,0) 85%, rgb(0,0,0) 100%)',
                        zIndex: 10
                    }}
                />
                <video playsInline muted autoPlay loop className='w-full h-full'>
                    <source src='i-phone.webm' />
                </video>
            </div>

            <div className=" mt-[5rem] flex items-center flex-col space-y-2">
                <div className="roboto_slab lg:text-[5rem] sm:text-[3rem] text-[2rem] font-semibold text-center leading-[1]">
                    <div className="gsap-section4 opacity-0">OUR</div>
                    <div className="gsap-section4 opacity-0">COMMUNITY</div>
                </div>

                <div className="w-[700px] max-w-full text-center gsap-section4 opacity-0 text-[#ebebeb] lg:text-base text-sm">
                    Fricaa is where positivity flourishes. Our community is built on respect, understanding,
                    and the shared desire to create a space where everyone feels safe and valued. Inappropriate
                    behavior has no place here; we’re all about positive vibes and meaningful connections.
                </div>
            </div>


            <div
                ref={containerRef2}
                className="relative w-full overflow-hidden rotate-[7deg] mt-[5rem]"
            >
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(90deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgb(0,0,0) 100%)',
                        zIndex: 10
                    }}
                />
                <div
                    ref={scrollRef2}
                    className="flex items-center gap-5 transition-transform"
                    style={{ willChange: 'transform' }}
                >
                </div>
            </div>
        </div>
    );
};