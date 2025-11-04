'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { Marquee } from '@/components/ui/marquee'
import { cn } from '@/lib/utils'

interface AboutFounderLink {
    url: string
    title: string
    target?: '_blank' | '_self'
}

interface AboutFounderProps {
    subtitle?: string
    title: string
    image?: string
    imageAlt?: string
    founderName?: string
    founderTitle?: string
    content: string | React.ReactNode
    link?: AboutFounderLink
    carouselTexts?: string[]
    className?: string
}

export default function AboutFounder({
    subtitle,
    title,
    image,
    imageAlt = 'Founder',
    founderName = 'Kevin Cho,',
    founderTitle = 'CEO & Founder of GTM Lab',
    content,
    link,
    carouselTexts = ['Founder', 'GTMLab'],
    className,
}: AboutFounderProps) {
    return (
        <div className={cn('py-10 box box-steps lg:py-20', className)}>
            <div className="container flex flex-col gap-10 px-4 mx-auto xl:px-0 lg:grid lg:grid-cols-12 lg:gap-20">
                {/* Desktop Image - Left Column */}
                <div
                    className="space-y-4 lg:col-span-6 lg:max-w-[588px] hidden lg:block"
                    data-aos="fade-in">
                    {image ? (
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={588}
                            height={348}
                            className="h-[348px] w-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-[340px] bg-neutral-300"></div>
                    )}
                    <div className="w-full py-4 border-y border-neutral-200 overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:10s]">
                            {carouselTexts.map((text, index) => (
                                <div key={`${text}-${index}`}>
                                    <span className="uppercase px-4">
                                        {text}
                                    </span>
                                    <span key={`dot-${index}`}>&middot;</span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="flex flex-col gap-6 header-area lg:col-span-6">
                    {subtitle && (
                        <div
                            className="flex items-center gap-4 font-semibold uppercase entry-subtitle"
                            data-aos="fade-in">
                            <span className="w-4 h-4 rounded-full bg-primary"></span>
                            {subtitle}
                        </div>
                    )}
                    <h1
                        className="text-4xl border-b pb-6 lg:pb-0 border-black lg:border-0 font-medium entry-title lg:text-5xl"
                        data-aos="fade-in">
                        {title}
                    </h1>

                    {/* Mobile Image */}
                    <div
                        className="w-full lg:col-span-7 xl:hidden"
                        data-aos="fade-in">
                        {image ? (
                            <Image
                                src={image}
                                alt={imageAlt}
                                width={588}
                                height={340}
                                className="w-full"
                            />
                        ) : (
                            <div className="w-full md:h-[340px] bg-neutral-300"></div>
                        )}
                        <div className="py-3 mt-3 border-y border-neutral-100 overflow-hidden">
                            <Marquee
                                pauseOnHover
                                className="text-xs [--duration:10s]">
                                {carouselTexts.map((text, index) => (
                                    <div key={`${text}-${index}`}>
                                        <span className="uppercase px-4">
                                            {text}
                                        </span>
                                        <span key={`dot-${index}`}>
                                            &middot;
                                        </span>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>

                    <div
                        className="lg:border-t lg:border-black entry-main-content"
                        data-aos="fade-in">
                        <div className="py-6 gap-4 flex items-center justify-between">
                            <div className="text-base font-semibold uppercase lg:text-2xl">
                                {founderName}
                            </div>
                            <div className="bg-black w-4 lg:w-[68px] h-px"></div>
                            <div className="text-sm tracking-[0.07px] leading-[19.6px] font-medium">
                                {founderTitle}
                            </div>
                        </div>
                        <div className="space-y-3">{content}</div>
                        {link && (
                            <div className="flex mt-8 justify-center entry-main-button lg:mt-8 xl:justify-start">
                                <Button size="lg" asChild>
                                    <Link
                                        href={link.url}
                                        target={link.target || '_self'}
                                        rel={
                                            link.target === '_blank'
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }>
                                        {link.title}
                                        <Icon
                                            icon="heroicons:arrow-right-20-solid"
                                            width="20"
                                            height="20"
                                        />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
