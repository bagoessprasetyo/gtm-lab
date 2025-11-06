import Image from 'next/image'
import { BlurFade } from '@/components/ui/blur-fade'
import { cn } from '@/lib/utils'

interface ItemList {
    title: string
}

interface AboutProps {
    subtitle?: string
    title: string
    description?: string
    image?: string
    imageAlt?: string
    itemListTitle?: string
    itemLists?: ItemList[]
    className?: string
}

const defaultItemLists: ItemList[] = [
    { title: 'Over 50+ years of combined expertise' },
    { title: 'Successfully scaled 100+ brands' },
    { title: 'Managed $10M+ in ad spend' },
    { title: 'Worked across 15+ industries' },
    { title: 'Built systems that drive real revenue' },
]

export default function About({
    subtitle,
    title,
    description,
    image,
    imageAlt = 'About us',
    itemListTitle = 'Our Team Has:',
    itemLists = defaultItemLists,
    className,
}: AboutProps) {
    return (
        <div className={cn('py-10 box lg:py-20', className)}>
            <div className="container flex flex-col items-center gap-10 px-4 mx-auto xl:px-0">
                <div className="flex flex-col items-center max-w-3xl gap-4 text-center header-area">
                    {subtitle && (
                        <BlurFade delay={0.25} inView>
                            <div className="flex items-center gap-4 font-semibold uppercase entry-subtitle">
                                <span className="w-4 h-4 rounded-full bg-primary"></span>
                                {subtitle}
                            </div>
                        </BlurFade>
                    )}
                    <BlurFade delay={0.25} inView>
                        <h1 className="text-4xl font-medium entry-title lg:text-5xl">
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
                </div>

                {itemLists && itemLists.length > 0 && (
                    <BlurFade delay={0.25} inView>
                        <div className="w-full lg:max-w-6xl">
                            <div className="flex flex-col overflow-hidden border rounded-lg border-neutral-200 lg:grid lg:grid-cols-12">
                                <div className="img-wrap lg:col-span-7">
                                    {image ? (
                                        <Image
                                            src={image}
                                            alt={imageAlt}
                                            width={800}
                                            height={600}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="w-full h-[290px] bg-[#F1F1FE]"></div>
                                    )}
                                </div>
                                <div className="flex flex-col justify-center p-4 space-y-3 item-content lg:py-10 lg:px-16 lg:col-span-5">
                                    <div className="font-semibold uppercase entry-title">
                                        {itemListTitle}
                                    </div>
                                    <ul className="space-y-3">
                                        {itemLists.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-4">
                                                <div>
                                                    <span className="flex w-3 h-3 rounded-full bg-primary"></span>
                                                </div>
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                )}
            </div>
        </div>
    )
}
