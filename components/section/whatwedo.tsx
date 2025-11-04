import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface WhatWeDoLink {
    url: string
    title: string
    target?: '_blank' | '_self'
}

interface WhatWeDoItem {
    title: string
    description: string
}

interface WhatWeDoVideo {
    src: string
    poster?: string
}

interface WhatWeDoProps {
    subtitle?: string
    title: string
    description?: string
    link?: WhatWeDoLink
    itemLists?: WhatWeDoItem[]
    video?: WhatWeDoVideo
    className?: string
}

export default function WhatWeDo({
    subtitle,
    title,
    description,
    link,
    itemLists = [],
    video,
    className,
}: WhatWeDoProps) {
    return (
        <div className={cn('py-10 box box-steps lg:py-20', className)}>
            <div className="container flex flex-col gap-8 px-4 mx-auto lg:gap-10 lg:px-0 lg:grid lg:grid-cols-12">
                <div className="flex flex-col w-full gap-8 lg:col-span-6">
                    <div className="flex flex-col max-w-3xl gap-4 header-area">
                        {subtitle && (
                            <div
                                className="flex items-center gap-1.5 lg:gap-4 font-semibold uppercase text-[12px] lg:text-base entry-subtitle"
                                data-aos="fade-in"
                                data-aos-delay="0">
                                <span className="w-2 h-2 rounded-full lg:w-4 lg:h-4 bg-primary"></span>
                                {subtitle}
                            </div>
                        )}

                        <h1
                            className="text-4xl font-medium entry-title lg:text-5xl"
                            data-aos="fade-in"
                            data-aos-delay="250">
                            {title}
                        </h1>

                        {description && (
                            <div
                                className="mt-2 entry-description"
                                data-aos="fade-in"
                                data-aos-delay="250">
                                {description}
                            </div>
                        )}

                        {link && (
                            <div
                                className="flex mt-2 entry-main-button lg:mt-4"
                                data-aos="fade-in"
                                data-aos-delay="250">
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

                    {video && (
                        <div className="w-full lg:hidden lg:col-span-6">
                            <div
                                className="w-full"
                                data-aos="fade-in"
                                data-aos-delay="1000">
                                <video
                                    className="rounded-xl"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster={video.poster}>
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}

                    {itemLists.length > 0 && (
                        <div
                            className="space-y-8"
                            data-aos="fade-in"
                            data-aos-delay="150">
                            {itemLists.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-2 border-black first:pt-8 last:pb-8 first:border-t last:border-b lg:gap-6 lg:flex-row"
                                    data-aos="fade-in"
                                    data-aos-delay="250">
                                    <div className="flex items-center gap-4 lg:min-w-40">
                                        <div className="flex items-center justify-center w-6 h-6 font-medium text-center text-white rounded-full bg-primary">
                                            {index + 1}
                                        </div>
                                        <div className="font-bold uppercase">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div>{item.description}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {video && (
                    <div className="hidden w-full lg:flex lg:col-span-6">
                        <div
                            className="w-full"
                            data-aos="fade-in"
                            data-aos-delay="1000">
                            <video
                                className="rounded-xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={video.poster}>
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
