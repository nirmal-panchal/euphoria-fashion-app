

import Image from 'next/image';
import React from 'react';

const needHelp = [
    "Contact Us",
    "Track Order",
    "Returns & Refunds",
    "FAQ's",
    "Career"
];

const company = [
    "About Us",
    "euphoria Blog",
    "euphoriastan",
    "Collaboration",
    "Media"
];

const moreInfo = [
    "Term and Conditions",
    "Privacy Policy",
    "Shipping Policy",
    "Sitemap"
];

const location = [
    "nirmalpanchal85@gmail.com",
    "9999999999"
];

const socialMedia = [
    {
        url: "/stock/icons/facebook.png",
    },
    {
        url: "/stock/icons/instagram.png",
    },
    {
        url: "/stock/icons/twitter.png",
    },
    {
        url: "/stock/icons/linkedin.png",
    }
];

const Footer = () => {
    return (
        <div className='bg-[#3C4242] px-4 md:px-10 lg:px-28 py-8 md:pt-14 pb-5'>
            <div className='flex flex-col justify-between md:flex-row gap-8 md:gap-16 mb-10'>
                <div className='mb-8 md:mb-0'>
                    <h1 className='text-white mb-4 font-bold text-lg md:text-2xl'>Need Help</h1>
                    <ul className='text-white text-base md:text-lg'>
                        {needHelp?.map((item, index) => (
                            <li key={index} className='mb-2'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='mb-8 md:mb-0'>
                    <h1 className='text-white mb-4 font-bold text-lg md:text-2xl'>Company</h1>
                    <ul className='text-white text-base md:text-lg'>
                        {company?.map((item, index) => (
                            <li key={index} className='mb-2'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='mb-8 md:mb-0'>
                    <h1 className='text-white mb-4 font-bold text-lg md:text-2xl'>More Info</h1>
                    <ul className='text-white text-base md:text-lg'>
                        {moreInfo?.map((item, index) => (
                            <li key={index} className='mb-2'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='mb-8 md:mb-0'>
                    <h1 className='text-white mb-4 font-bold text-lg md:text-2xl'>Contact</h1>
                    <ul className='text-white text-base md:text-lg'>
                        {location?.map((item, index) => (
                            <li key={index} className='mb-2'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex justify-center md:justify-start gap-4 mb-10'>
                {
                    socialMedia?.map((img, index) => (
                        <div key={index} className='bg-white p-2 rounded-lg cursor-pointer'>
                            <Image src={img?.url} width={24} height={24} />
                        </div>
                    ))
                }
            </div>
            <hr className='mb-4 md:mb-5'/>
            <div className='text-white text-center'>
                Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
