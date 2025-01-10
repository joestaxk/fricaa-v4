import React from 'react'

export const Footer = () => {
    return (
        <div className='lg:py-[5em] py-[2rem] w-full flex items-center justify-center'>
            <div className="w-[1200px] max-w-full lg:space-y-0 space-y-5 lg:flex justify-between items-start gap-10">
                <div className="space-y-5">
                    <img src="/fricaa.svg" alt="fricaa" className='w-[100px]' />
                    <div className="text-sm w-[300px]">
                        Fricaa and other Fricaa product trade names are trademarks of Fricaa SAS.
                        All names and marks on this website are their respective owners’ trade names, trademarks or service marks.
                    </div>
                    <div className="text-sm">© {(new Date()).getFullYear()} All rights reserved Fricaa SAS</div>
                </div>


                <div className="flex justify-between items-center flex-wrap w-full">
                    <div className="md:space-y-3 space-y-2">
                        <h2 className='md:text-[1.2rem] text-[1rem] font-semibold'>Download Fricaa</h2>
                        <ul>
                            <li>
                                <a href="" className='flex items-center text-sm capitalize'>
                                    Apple IOS
                                </a>
                            </li>
                            <li>
                                <a href="" className='flex items-center text-sm capitalize'>
                                    Google Andriod
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:space-y-3 space-y-2">
                        <h2 className='md:text-[1.2rem] text-[1rem] font-semibold'>Socials</h2>
                        <ul>
                            <li>
                                <a href="" className='flex items-center text-sm capitalize'>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="" className='flex items-center text-sm capitalize'>
                                    Tiktok
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:space-y-3 space-y-2">
                        <h2 className='md:text-[1.2rem] text-[1rem] font-semibold'>Useful pages</h2>
                        <ul>
                            <li>
                                <a href="" className='flex items-center text-sm capitalize'>
                                    terms and conditions
                                </a>
                            </li>
                            <li>
                                <a href="" className='flex items-center text-sm capitalize'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="" className='flex items-center text-sm capitalize'>
                                    Cookies settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
