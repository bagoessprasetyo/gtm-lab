import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/ui/blur-fade'
import { cn } from '@/lib/utils'

interface WorkLink {
    url: string
    title: string
    target?: '_blank' | '_self'
}

interface WorkLabel {
    title: string
}

interface WorkItem {
    id: number
    title: string
    image: string
    shortDescription: string
    labels: WorkLabel[]
    slug?: string
}

interface WorksProps {
    subtitle?: string
    title: string
    description?: string
    link?: WorkLink
    works?: WorkItem[]
    className?: string
}

const defaultWorks: WorkItem[] = [
    {
        id: 1,
        title: 'Lion Parcel',
        image: '',
        shortDescription:
            'Complete digital transformation and multi-channel marketing strategy to scale Indonesias leading logistics brand.',
        labels: [
            { title: 'Performance Marketing' },
            { title: 'Brand Strategy' },
            { title: 'CRM Implementation' },
        ],
    },
    {
        id: 2,
        title: 'Cinepolis',
        image: '',
        shortDescription:
            'Full-funnel growth systems and customer retention strategies for Southeast Asias cinema leader.',
        labels: [
            { title: 'Lifecycle Marketing' },
            { title: 'Mobile App' },
            { title: 'Retention' },
        ],
    },
    {
        id: 3,
        title: 'DHL Express',
        image: '',
        shortDescription:
            'B2B revenue engine and sales automation for global logistics excellence.',
        labels: [
            { title: 'B2B Sales' },
            { title: 'Marketing Automation' },
            { title: 'Lead Generation' },
        ],
    },
    {
        id: 4,
        title: 'Ashley Hotel Group',
        image: '',
        shortDescription:
            'Digital presence and booking optimization for luxury hospitality brand.',
        labels: [
            { title: 'Web Development' },
            { title: 'SEO' },
            { title: 'Conversion Optimization' },
        ],
    },
]

export default function Works({
    subtitle,
    title,
    description,
    link,
    works = defaultWorks,
    className,
}: WorksProps) {
    return (
        <div className={cn('py-10 box box-works lg:py-20', className)}>
            <div className="container flex flex-col gap-10 px-4 mx-auto xl:px-0 lg:grid lg:grid-cols-12 xl:gap-20">
                <div className="relative lg:col-span-5">
                    <div className="sticky flex flex-col w-full gap-6 lg:gap-8 top-28">
                        <div className="flex flex-col max-w-3xl gap-4 header-area">
                            {subtitle && (
                                <BlurFade delay={0.25} inView>
                                    <div className="flex items-center gap-1.5 lg:gap-4 font-semibold uppercase text-[12px] lg:text-base entry-subtitle">
                                        <span className="w-2 h-2 rounded-full lg:w-4 lg:h-4 bg-primary"></span>
                                        {subtitle}
                                    </div>
                                </BlurFade>
                            )}
                            <BlurFade delay={0.25} inView>
                                <h1 className="text-[32px] font-medium entry-title lg:text-5xl">
                                    {title}
                                </h1>
                            </BlurFade>
                            {description && (
                                <BlurFade delay={0.25} inView>
                                    <div className="mt-2 entry-description">
                                        {description}
                                    </div>
                                </BlurFade>
                            )}
                            {link && (
                                <BlurFade delay={0.25} inView>
                                    <div className="flex flex-col items-start gap-4 mt-2 lg:mt-4 entry-main-button">
                                        <Button
                                            size="lg"
                                            asChild
                                            className="w-full justify-center lg:max-w-[250px]">
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
                        </div>
                    </div>
                </div>

                <div className="w-full lg:col-span-7">
                    <div className="flex flex-col gap-6">
                        {works.map((work, idx) => (
                            <BlurFade delay={0.25} inView key={idx}>
                                <div className="flex flex-col gap-3 lg:gap-4">
                                    <div className="overflow-hidden img-wrap group rounded-xl">
                                        {work.image ? (
                                            <Image
                                                src={work.image}
                                                alt={work.title}
                                                width={800}
                                                height={500}
                                                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-96 bg-neutral-200" />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                        <div className="text-xl font-semibold uppercase lg:min-w-max">
                                            {work.title}
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-3 border-t border-black lg:border-t-0 lg:pt-0 lg:justify-end">
                                            {work.labels.map((label, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-0.5 font-semibold text-sm uppercase border border-black rounded-full badge">
                                                    {label.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col self-stretch justify-between gap-3 py-4 border-black lg:items-center lg:gap-20 entry-detail border-y lg:flex-row">
                                        <div className="flex-1 line-clamp-2 lg:line-clamp-none">
                                            {work.shortDescription}
                                        </div>
                                    </div>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
