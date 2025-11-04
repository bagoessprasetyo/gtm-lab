import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroLink {
    url: string
    title: string
    target?: '_blank' | '_self'
}

interface HeroVideo {
    src: string
    poster?: string
}

interface HeroProps {
    title: string
    description?: string
    subtitle?: string
    link?: HeroLink
    video?: HeroVideo
    variant?: 'default' | 'homepage'
    className?: string
}

export default function Hero({
    title,
    description,
    subtitle,
    link,
    video,
    variant = 'default',
    className,
}: HeroProps) {
    const titleClass = cn(
        'text-4xl font-semibold entry-title',
        variant === 'homepage'
            ? 'uppercase lg:text-6xl'
            : 'capitalize lg:text-5xl'
    )

    return (
        <div className={cn('py-10 box box-banner lg:py-20', className)}>
            <div className="container flex flex-col items-center gap-6 px-0 mx-auto lg:gap-10 lg:px-0">
                <div className="flex flex-col items-center gap-4 px-4 text-center lg:gap-6 header-area lg:px-0 lg:max-w-6xl">
                    {subtitle && (
                        <div
                            className="hidden px-6 py-2 text-base leading-snug border rounded-full md:flex entry-subtitle border-neutral-100 text-neutral-700"
                            data-aos="fade-in">
                            {subtitle}
                        </div>
                    )}

                    <h1 className={titleClass} data-aos="fade-in">
                        {title}
                    </h1>

                    {description && (
                        <div
                            className="font-medium entry-description lg:text-[32px] text-[20px]"
                            data-aos="fade-in">
                            {description}
                        </div>
                    )}
                </div>

                {link && (
                    <div className="flex entry-main-button" data-aos="fade-in">
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

                {video && variant === 'homepage' && (
                    <div className="w-full" data-aos="fade-in">
                        <video
                            className="w-full rounded-xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={video.poster}>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </div>
    )
}
