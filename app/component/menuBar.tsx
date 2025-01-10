"use client";
import Image from 'next/image'
import React from 'react'
import { MENUBAR_ITEM } from '../utils/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const MenuBar = () => {
  useGSAP(() => {
    gsap.fromTo(".gsap-topnav", {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: .4,
      ease: "bounce.inOut"
    })
    gsap.fromTo(".gsap-fricaalogo", {
      y: 10,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power1.inOut"
    })

    gsap.fromTo(".gsap-stagger1", {
      y: 10,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: {
        yoyo: true,
        axis: 'x',
        amount: 1
      },
      ease: "circ.inOut"
    })

    gsap.fromTo(".gsap-stagger2", {
      x: 10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: .5,
      ease: "power1.inOut"
    })

  }, [])
  return (
    <div className='gsap-topnav opacity-0 sticky top-0 z-[20] md:w-[750px] max-w-full m-auto h-14 md:rounded-full md:border border-b border-gray-50/20 md:bg-white/10 backdrop-blur-2xl md:my-2 flex items-center justify-between px-5'>
      <Image src="/fricaa.svg" alt="fricaa logo" className='gsap-fricaalogo opacity-0 md:w-[100px] sm:w-[90px] w-[100px] h-auto object-cover' width={100} height={100} />

      <ul className="sm:flex hidden items-center gap-5">
        {MENUBAR_ITEM.map(({ to, value }, i) => (
          <li key={i}>
            <a href={to} className='gsap-stagger1 opacity-0 text-sm md:text-base capitalize hover:text-white text-gray-200 transition-all duration-200'>{value}</a>
          </li>
        ))}
      </ul>

      <button className="relative group sm:flex hidden items-center justify-center">
        <div className='z-10 flex items-center justify-center gap-2 md:bg-[#444444] bg-[#4444] relative w-[85px] h-[35px] rounded-full'>
          <svg className='gsap-stagger2 opacity-0' width="24" height="24" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-hover:fill-[#b4b4b4] transition-all duration-200" d="M15.2247 20.8267C14.0814 21.9351 12.833 21.7601 11.6314 21.2351C10.3597 20.6984 9.19304 20.6751 7.85137 21.2351C6.17137 21.9584 5.2847 21.7484 4.28137 20.8267C-1.41196 14.9584 -0.571963 6.02172 5.89137 5.69505C7.46637 5.77672 8.56304 6.55838 9.4847 6.62838C10.8614 6.34838 12.1797 5.54339 13.6497 5.64839C15.4114 5.78838 16.7414 6.48838 17.6164 7.74838C13.9764 9.93005 14.8397 14.7251 18.1764 16.0667C17.5114 17.8167 16.648 19.5551 15.213 20.8384L15.2247 20.8267ZM9.36804 5.62505C9.19304 3.02338 11.3047 0.876718 13.7314 0.666718C14.0697 3.67672 11.0014 5.91672 9.36804 5.62505Z" fill="#7c7b7b" />
          </svg>
          <svg className='gsap-stagger2 opacity-0' width="23" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-hover:fill-[#b4b4b4] transition-all duration-200" d="M0.910209 1.17308L11.1069 11.1726L0.986042 21.2642C0.820462 21.0486 0.691928 20.8069 0.605709 20.5491C0.561118 20.2572 0.561118 19.9602 0.605709 19.6682V2.49491C0.575375 2.03408 0.681542 1.57324 0.909042 1.17308M15.4994 6.81158L12.1709 10.1086L2.09554 0.200076C2.42221 0.0869096 2.77221 0.0554098 3.11404 0.109077C3.65071 0.256077 4.16288 0.48241 4.63304 0.777576L13.7517 5.82341C14.3444 6.14191 14.9219 6.47674 15.4994 6.81158ZM12.172 12.2517L15.4842 15.5044L13.0832 16.8414L5.75771 20.9131C5.15104 21.2479 4.54204 21.5676 3.94938 21.9327C3.69578 22.0906 3.41141 22.1926 3.11526 22.2318C2.81911 22.2711 2.51801 22.2467 2.23204 22.1602L12.172 12.2517ZM20.7587 11.1726C20.7672 11.5805 20.6641 11.9831 20.4606 12.3367C20.257 12.6904 19.9607 12.9817 19.6037 13.1792L16.8667 14.6982L13.2652 11.1726L16.8819 7.58624C17.8094 8.10308 18.7217 8.61991 19.6329 9.10641C19.9963 9.30952 20.2947 9.61134 20.4938 9.97698C20.6928 10.3426 20.7854 10.7571 20.7587 11.1726Z" fill="#7c7b7b" />
          </svg>
        </div>
        <div className="absolute md:block hidden rounded-full  w-[87.5px] h-[37px] z-0 bg-gradient-to-l group-hover:bg-gradient-to-r from-[#EF3FE8] via-[#F94A3F] to-[#E4317D] transition-all duration-200"></div>
      </button>

      <div className="sm:hidden flex items-center gap-4">
        <button className="relative group flex items-center justify-center">
          <div className='z-10 flex items-center justify-center gap-2 md:bg-[#444444] bg-[#4444] relative w-[85px] h-[35px] rounded-full'>
            <svg className='gsap-stagger2 opacity-0' width="24" height="24" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="group-hover:fill-[#b4b4b4] transition-all duration-200" d="M15.2247 20.8267C14.0814 21.9351 12.833 21.7601 11.6314 21.2351C10.3597 20.6984 9.19304 20.6751 7.85137 21.2351C6.17137 21.9584 5.2847 21.7484 4.28137 20.8267C-1.41196 14.9584 -0.571963 6.02172 5.89137 5.69505C7.46637 5.77672 8.56304 6.55838 9.4847 6.62838C10.8614 6.34838 12.1797 5.54339 13.6497 5.64839C15.4114 5.78838 16.7414 6.48838 17.6164 7.74838C13.9764 9.93005 14.8397 14.7251 18.1764 16.0667C17.5114 17.8167 16.648 19.5551 15.213 20.8384L15.2247 20.8267ZM9.36804 5.62505C9.19304 3.02338 11.3047 0.876718 13.7314 0.666718C14.0697 3.67672 11.0014 5.91672 9.36804 5.62505Z" fill="#7c7b7b" />
            </svg>
            <svg className='gsap-stagger2 opacity-0' width="23" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="group-hover:fill-[#b4b4b4] transition-all duration-200" d="M0.910209 1.17308L11.1069 11.1726L0.986042 21.2642C0.820462 21.0486 0.691928 20.8069 0.605709 20.5491C0.561118 20.2572 0.561118 19.9602 0.605709 19.6682V2.49491C0.575375 2.03408 0.681542 1.57324 0.909042 1.17308M15.4994 6.81158L12.1709 10.1086L2.09554 0.200076C2.42221 0.0869096 2.77221 0.0554098 3.11404 0.109077C3.65071 0.256077 4.16288 0.48241 4.63304 0.777576L13.7517 5.82341C14.3444 6.14191 14.9219 6.47674 15.4994 6.81158ZM12.172 12.2517L15.4842 15.5044L13.0832 16.8414L5.75771 20.9131C5.15104 21.2479 4.54204 21.5676 3.94938 21.9327C3.69578 22.0906 3.41141 22.1926 3.11526 22.2318C2.81911 22.2711 2.51801 22.2467 2.23204 22.1602L12.172 12.2517ZM20.7587 11.1726C20.7672 11.5805 20.6641 11.9831 20.4606 12.3367C20.257 12.6904 19.9607 12.9817 19.6037 13.1792L16.8667 14.6982L13.2652 11.1726L16.8819 7.58624C17.8094 8.10308 18.7217 8.61991 19.6329 9.10641C19.9963 9.30952 20.2947 9.61134 20.4938 9.97698C20.6928 10.3426 20.7854 10.7571 20.7587 11.1726Z" fill="#7c7b7b" />
            </svg>
          </div>
          <div className="absolute md:block hidden rounded-full  w-[87.5px] h-[37px] z-0 bg-gradient-to-l group-hover:bg-gradient-to-r from-[#EF3FE8] via-[#F94A3F] to-[#E4317D] transition-all duration-200"></div>
        </button>

        <button>
          <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.16647 22.1066H28.315M3.16647 12.5262H28.315M3.16647 2.9458H28.315" stroke="white" strokeWidth="5.32245" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
