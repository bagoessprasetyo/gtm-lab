import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/ui/blur-fade'
import { cn } from '@/lib/utils'

interface ProcessLink {
    url: string
    title: string
    target?: '_blank' | '_self'
}

interface ProcessItem {
    title: string
    description: string
}

interface ProcessProps {
    subtitle?: string
    title: string
    description?: string
    itemLists?: ProcessItem[]
    showAboutSection?: boolean
    aboutTitle?: string
    aboutDescription?: string
    aboutLink?: ProcessLink
    className?: string
}

const defaultProcessItems: ProcessItem[] = [
    {
        title: 'Find the Signals',
        description:
            'A 1-week audit that reveals your highest-impact opportunities.',
    },
    {
        title: 'Build the System',
        description:
            'A focused sprint to align funnels, creativity, and measurement.',
    },
    {
        title: 'Run the Machine',
        description:
            'Ongoing operations, sales enablement, and dashboards that keep you scaling with clarity.',
    },
]

export default function Process({
    subtitle = 'Our Process',
    title,
    description = 'Every strategy we build is rooted in Data, Creativity, and Technology',
    itemLists = defaultProcessItems,
    showAboutSection = true,
    aboutTitle = 'Who We Are',
    aboutDescription = 'We’re operators at heart: founders, growth leads, and product builders who’ve been where you are.',
    aboutLink = {
        url: '/about-us',
        title: 'About us',
        target: '_self',
    },
    className,
}: ProcessProps) {
    return (
        <div
            className={cn(
                'py-10 box box-process bg-neutral-50 lg:py-20',
                className
            )}>
            <div className="container flex flex-col gap-6 px-4 mx-auto xl:px-0 lg:grid lg:grid-cols-12 lg:gap-20">
                <div className="relative lg:col-span-5">
                    <div className="flex flex-col w-full gap-8">
                        <div className="flex flex-col max-w-3xl gap-4 header-area">
                            {subtitle && (
                                <BlurFade delay={0.25} inView>
                                    <div className="flex items-center gap-1.5 lg:gap-4 font-semibold uppercase text-[12px] lg:text-base entry-subtitle">
                                        <span className="w-2 h-2 rounded-full lg:w-4 lg:h-4 bg-primary"></span>
                                        {subtitle}
                                    </div>
                                </BlurFade>
                            )}
                            <BlurFade delay={0.25 * 2} inView>
                                <h1 className="text-[32px] font-medium capitalize entry-title lg:text-5xl">
                                    {title}
                                </h1>
                            </BlurFade>
                            {description && (
                                <BlurFade delay={0.25 * 3} inView>
                                    <div className="mt-2 entry-description">
                                        {description}
                                    </div>
                                </BlurFade>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full lg:col-span-7">
                    {itemLists.map((item, index) => (
                        <BlurFade
                            key={index}
                            delay={0.25}
                            inView
                            className="flex flex-col justify-between gap-3 py-6 border-b border-black first:border-t lg:flex-row">
                            <div className="flex items-center gap-4 min-w-60">
                                <div>
                                    <div className="flex items-center justify-center w-6 h-6 font-medium text-center text-white rounded-full bg-primary">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="font-bold uppercase">
                                    {item.title}
                                </div>
                            </div>
                            <div className="flex-1 ms-12 lg:ms-0">
                                {item.description}
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>

            {showAboutSection && (
                <div className="container px-4 mx-auto mt-8 lg:mt-12 xl:px-0">
                    <BlurFade delay={0.25} inView>
                        <div className="flex flex-col gap-6 px-6 py-4 text-white bg-black lg:flex-row lg:justify-between lg:items-center lg:px-6 lg:py-4">
                            <div className="flex items-center gap-4">
                                <div className="shrink-0">
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="animate-spin animation-duration-[6s]">
                                        <path
                                            d="M11.3761 1.25862C12.1742 0.148618 13.8258 0.148618 14.6239 1.25861L15.0092 1.79453C15.544 2.53839 16.5158 2.82376 17.3679 2.48712L17.9818 2.24459C19.2533 1.74226 20.6427 2.6352 20.714 4.00045L20.7484 4.65959C20.7961 5.57451 21.4594 6.34 22.3582 6.51748L23.0058 6.64533C24.347 6.91015 25.0331 8.41253 24.3549 9.59957L24.0275 10.1727C23.573 10.9682 23.7172 11.9708 24.3774 12.606L24.853 13.0636C25.8381 14.0115 25.603 15.6464 24.3908 16.2783L23.8055 16.5834C22.9931 17.0069 22.5723 17.9283 22.7843 18.8196L22.937 19.4617C23.2532 20.7918 22.1716 22.04 20.8101 21.9162L20.1528 21.8565C19.2404 21.7735 18.3883 22.3211 18.0847 23.1855L17.866 23.8083C17.413 25.0982 15.8283 25.5635 14.7498 24.7233L14.2292 24.3176C13.5064 23.7546 12.4936 23.7546 11.7708 24.3176L11.2502 24.7233C10.1717 25.5635 8.58698 25.0982 8.13398 23.8083L7.91527 23.1855C7.61169 22.3211 6.7596 21.7735 5.84719 21.8565L5.18986 21.9162C3.82837 22.04 2.74678 20.7918 3.06305 19.4617L3.21574 18.8196C3.42769 17.9283 3.00692 17.0069 2.19452 16.5834L1.60923 16.2783C0.396954 15.6464 0.161901 14.0115 1.14703 13.0636L1.62265 12.606C2.28283 11.9708 2.42698 10.9682 1.97251 10.1727L1.64508 9.59957C0.966916 8.41253 1.65303 6.91015 2.99424 6.64533L3.64178 6.51748C4.54059 6.34 5.20389 5.57451 5.25164 4.6596L5.28605 4.00045C5.3573 2.6352 6.74674 1.74226 8.01821 2.24459L8.63208 2.48712C9.48416 2.82375 10.456 2.53839 10.9908 1.79453L11.3761 1.25862Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold uppercase tracking-wide">
                                        {aboutTitle}
                                    </div>
                                    <div>{aboutDescription}</div>
                                </div>
                            </div>
                            {aboutLink && (
                                <div className="shrink-0">
                                    <Button
                                        size="lg"
                                        variant="destructive"
                                        asChild
                                        className="w-full lg:w-auto">
                                        <Link
                                            href={aboutLink.url}
                                            target={aboutLink.target || '_self'}
                                            rel={
                                                aboutLink.target === '_blank'
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }>
                                            {aboutLink.title}
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
                    </BlurFade>
                </div>
            )}
        </div>
    )
}
