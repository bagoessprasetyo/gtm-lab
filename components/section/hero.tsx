import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/ui/blur-fade'
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
            <div className="container flex flex-col items-center gap-6 px-4 mx-auto xl:gap-10 xl:px-0">
                <div className="flex flex-col items-center gap-4 px-4 text-center lg:gap-6 header-area lg:px-0 lg:max-w-6xl">
                    {subtitle && (
                        <BlurFade delay={0.25} inView>
                            <div className="hidden px-6 py-2 text-base leading-snug border rounded-full md:flex entry-subtitle border-neutral-100 text-neutral-700">
                                {subtitle}
                            </div>
                        </BlurFade>
                    )}

                    <BlurFade delay={0.25} inView>
                        <h1 className={titleClass}>{title}</h1>
                    </BlurFade>

                    {description && (
                        <BlurFade delay={0.25} inView>
                            <div className="font-medium entry-description lg:text-[32px] text-[20px]">
                                {description}
                            </div>
                        </BlurFade>
                    )}
                </div>

                {link && (
                    <BlurFade delay={0.25} inView>
                        <div className="flex entry-main-button">
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
                    </BlurFade>
                )}

                {video && variant === 'homepage' && (
                    <BlurFade delay={0.25} inView>
                        <div className="w-full">
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
                    </BlurFade>
                )}
            </div>
        </div>
    )
}
