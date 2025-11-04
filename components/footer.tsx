'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from './ui/button'
import 'swiper/css'

import ImgFooter1 from '../public/gif/img-footer-1.gif'
import ImgFooter2 from '../public/gif/img-footer-2.gif'
import ImgFooter3 from '../public/gif/img-footer-3.gif'
import ImgFooter4 from '../public/gif/img-footer-4.gif'
import ImgFooter5 from '../public/gif/img-footer-5.gif'
import ImgFooter6 from '../public/gif/img-footer-6.gif'

const footerCarousel = [
    ImgFooter1,
    ImgFooter2,
    ImgFooter3,
    ImgFooter4,
    ImgFooter5,
    ImgFooter6,
]

const branchs = [
    {
        country: 'Indonesia',
        image: '/branch/img-branch-indonesia.svg',
        address:
            '📍 Jl. Dr. Susilo Raya No.111, RT.1/RW.5, Grogol,  Grogol Petamburan, West Jakarta, Jakarta',
    },
    {
        country: 'Malaysia',
        image: '/branch/img-branch-malaysia.svg',
        address:
            '📍 Level 16, 1 Sentral, Jalan Stesen Sentral 5, KL Sentral, Kuala Lumpur 50470, Malaysia',
    },
    {
        country: 'Philippines',
        image: '/branch/img-branch-philippines.svg',
        address:
            '📍 Level 29, 17 ADB Avenue, Joy Nostalg Center, Ortigas Center, Mandaluyong, Metro Manila, Philippines',
    },
    {
        country: 'Hong Kong',
        image: '/branch/img-branch-hongkong.svg',
        address:
            '📍 Room 702, 7/F, Fu Fai Commercial Centre, 27 Hillier Street, Sheung Wan, Hong Kong',
    },
]

const socialLinks = [
    {
        icon: 'mdi:instagram',
        url: 'https://www.instagram.com/gtmlab.ai/',
    },
    {
        icon: 'mdi:linkedin',
        url: 'https://www.linkedin.com/company/gtmlabai/',
    },
]

export default function Footer() {
    useEffect(() => {
        // Initialize Swiper
        const initSwiper = async () => {
            const { default: Swiper } = await import('swiper')

            new Swiper('.footer-carousel', {
                slidesPerView: 2.5,
                spaceBetween: 12,
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 4600,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 12,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 12,
                    },
                },
            })
        }

        initSwiper()
    }, [])

    return (
        <footer id="footer">
            <div className="footer-top w-full relative overflow-hidden py-10 lg:py-20 lg:min-h-[560px]">
                <div className="flex flex-col justify-between gap-10 container mx-auto px-4 lg:px-0 xl:grid xl:grid-cols-12 xl:gap-20">
                    <div className="flex flex-col gap-6 xl:col-span-5">
                        <div className="font-medium text-[32px] lg:text-5xl">
                            Ready to engineer your next stage of growth?
                        </div>
                        <div>
                            Let’s build your GTM engine where creativity meets
                            science and results are always measurable.
                        </div>
                        <div className="mt-2.5">
                            <Button size="lg" variant="destructive" asChild>
                                <Link href="/contact-us">
                                    Book a Strategy Call
                                    <Icon
                                        icon="heroicons:arrow-right-16-solid"
                                        width="20"
                                        height="20"
                                    />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="xl:col-span-7">
                        <div className="max-w-6xl lg:absolute">
                            <div className="swiper footer-carousel">
                                <div className="swiper-wrapper">
                                    {footerCarousel.map((image, index) => (
                                        <div
                                            key={index}
                                            className="swiper-slide">
                                            <Image
                                                src={image}
                                                alt={`Footer carousel ${
                                                    index + 1
                                                }`}
                                                width={400}
                                                height={395}
                                                className="w-full h-auto rounded-[20px] object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-main">
                <div className="flex flex-col items-center gap-8 container mx-auto px-4 xl:px-0">
                    <div className="flex items-center w-full justify-between border-y-2 border-neutral-900 py-8">
                        <div>
                            <Image
                                src="/logo-white.svg"
                                alt="GTMLab"
                                width={160}
                                height={40}
                            />
                        </div>
                        <div>
                            <ul className="flex items-center gap-2">
                                {socialLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center items-center w-7 h-7 bg-primary text-white rounded-full">
                                            <Icon
                                                icon={link.icon}
                                                width="20"
                                                height="20"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4">
                            {branchs.map((branch, index) => (
                                <div className="space-y-1.5" key={index}>
                                    <div>
                                        <Image
                                            src={branch.image}
                                            alt={branch.country}
                                            width={28}
                                            height={40}
                                            className="h-10"
                                        />
                                    </div>
                                    <div>{branch.country}</div>
                                    <div className="text-sm text-neutral-400">
                                        {branch.address}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>&copy; 2025 GTMLab. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
