'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BlurFade } from '@/components/ui/blur-fade'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

interface ServiceItem {
    title: string
    description: string
    content: string
    items: string[]
}

interface ServicesProps {
    subtitle?: string
    title: string
    description: string
    services?: ServiceItem[]
    className?: string
}

const defaultServices: ServiceItem[] = [
    {
        title: 'Strategic & Planning',
        description: 'Where every winning campaign begins.',
        content:
            'We start with clarity - understanding your audience, goals, and positioning before execution. This is where we define your GTM roadmap and how to win in your category.',
        items: [
            'Market & audience research',
            'Go-to-Market & campaign roadmapping',
            'Channel & messaging strategy',
            'ICP mapping & behavioral research',
            'Growth experimentation planning',
            'AI-Enhanced Insight Modelling',
        ],
    },
    {
        title: 'Performance Marketing',
        description: 'Drive measurable growth across every channel.',
        content:
            "Our campaigns don't just get attention - they deliver commercial outcomes. We blend creative, data, and precision targeting to maximize ROI.",
        items: [
            'Paid media (Meta, Google, LinkedIn, TikTok, Commerce)',
            'Campaign design, testing & continuous optimization',
            'Audience segmentation & scaling',
            'Funnel tracking, conversion optimization & attribution',
            'Growth experimentation planning',
            'AI-Powered Optimization - high',
        ],
    },
    {
        title: 'Funnel & Growth Systems',
        description: 'Turn attention into scalable outcomes.',
        content:
            'We engineer funnels that convert - with automation, lifecycle marketing, and data-driven learning.',
        items: [
            'Funnel architecture & nurturing sequences',
            'Landing page design & conversion rate optimization (CRO)',
            'Lifecycle & email drip campaigns',
            'B2B webinar campaigns & demo pipeline generation',
            'Sales enablement, pitching, closing, & payment collection',
            'AI Outreach Workflow Automation',
        ],
    },
    {
        title: 'B2B Revenue Engine',
        description: 'From first contact to closed deal.',
        content:
            'We act as your full-stack B2B growth partner - building and automating outreach machines that fill your pipeline, close deals on your behalf, and drive real revenue.',
        items: [
            'ICP segmentation & list building',
            'Contact scraping & data enrichment',
            'Multi-channel outreach (email, LinkedIn, WhatsApp, telesales)',
            'B2B webinar campaigns & demo pipeline generation',
            'Sales enablement, pitching, closing, & payment collection',
            'AI Outreach Workflow Automation',
        ],
    },
    {
        title: 'Creative & Branding',
        description: 'Make people care, remember, and take action.',
        content:
            'We design stories that connect - and visuals that perform. Everything we create is built for resonance and conversion.',
        items: [
            'Copywriting & messaging strategy',
            'Brand identity & tone of voice development',
            'UX/UI For Web and App',
            'Web & App Software Development',
            'Landing page optimization & creative testing',
            'AI-Driven Ads & High-Velocity Production',
        ],
    },
    {
        title: 'Data & Technology',
        description: 'The infrastructure powering intelligent growth.',
        content:
            'We build the systems and tools that keep your growth engine connected, automated, and instantly adaptable - from backend data to front-end experience.',
        items: [
            'CRM setup & implementation (HubSpot, SleekFlow)',
            'Marketing & sales automation',
            'Campaign tracking & multi-touch attribution',
            'Data architecture & analytics dashboards',
            'Custom Software Development (Apps, AI chatbots, and AI tools)',
            'High-Velocity Product Engineering — rapid builds and vibe-coded experiences engineered for conversion',
        ],
    },
]

export default function Services({
    subtitle,
    title,
    description,
    services = defaultServices,
    className,
}: ServicesProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [viewedIndices, setViewedIndices] = useState<Set<number>>(
        new Set([0])
    )
    const panelRef = useRef<HTMLDivElement>(null)
    const stackRef = useRef<HTMLDivElement>(null)
    const optionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const sm = gsap.matchMedia()

        sm.add('(min-width: 1024px)', () => {
            const panel = panelRef.current
            const cards = gsap.utils.toArray<HTMLElement>('.panel__card')
            const listItems = gsap.utils.toArray<HTMLElement>(
                '.panel__options span'
            )

            if (!panel || cards.length === 0) return

            const endTime = 700 * cards.length

            // Set panel stack height
            gsap.set(stackRef.current, {
                height: () => {
                    const offset = 0
                    const firstCard = cards[0]
                    const height = firstCard?.offsetHeight || 460
                    return height + cards.length * offset
                },
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    fastScrollEnd: true,
                    pin: true,
                    start: '50% 370px',
                    end: `'+=${endTime}px'`,
                    pinSpacing: true,
                    scrub: 0.2,
                    markers: false,
                    onUpdate: (self) => {
                        const progress = self.progress
                        const totalCards = listItems.length
                        const activeIdx = Math.min(
                            Math.floor(progress * totalCards * 1),
                            totalCards - 1
                        )

                        setActiveIndex(activeIdx)

                        // Update active tabs
                        listItems.forEach((element, index) => {
                            if (index === activeIdx) {
                                element.classList.add('active')
                            } else {
                                element.classList.remove('active')
                            }
                        })

                        // Update active and passive cards
                        cards.forEach((element, index) => {
                            if (index === activeIdx) {
                                element.classList.add('active')
                            } else {
                                element.classList.remove('active')
                            }

                            if (index < activeIdx) {
                                element.classList.add('passive')
                            } else {
                                element.classList.remove('passive')
                            }
                        })

                        // Update viewedIndices for color changes
                        setViewedIndices((prev) => {
                            const newSet = new Set(prev)
                            for (let i = 0; i <= activeIdx; i++) {
                                newSet.add(i)
                            }
                            return newSet
                        })
                    },
                },
            })

            // Dynamic card animation
            cards.forEach((card, index) => {
                const label = `label${index}`

                // Animate card entrance
                if (index > 0) {
                    tl.from(card, { y: window.innerHeight })
                }

                // Scale down previous cards
                for (let j = 0; j <= index; j++) {
                    const stepsBack = index - j
                    const targetScale = 0.95 - stepsBack * 0.05
                    const targetY = -stepsBack * 8
                    tl.to(
                        cards[j],
                        {
                            scale: targetScale,
                            duration: 0.3,
                            y: targetY,
                            transformOrigin: 'top',
                        },
                        label
                    )
                }
            })

            return () => {
                tl.kill()
            }
        })

        return () => {
            sm.revert()
        }
    }, [services.length])

    const handleTabClick = (index: number) => {
        setActiveIndex(index)
        const cards = document.querySelectorAll('.panel__card')
        if (cards[index]) {
            gsap.to(window, {
                duration: 0.8,
                scrollTo: {
                    y: cards[index],
                    offsetY: 200,
                },
                ease: 'power2.inOut',
            })
        }
    }

    return (
        <div className={cn('py-10 box box-services lg:py-20', className)}>
            <div className="container flex flex-col gap-6 px-4 mx-auto lg:gap-20 xl:px-0">
                <div className="flex flex-col w-full gap-8 lg:max-w-3xl">
                    <div className="flex flex-col gap-4 header-area">
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
                        <BlurFade delay={0.25 * 2} inView>
                            <div className="mt-2 entry-description">
                                {description}
                            </div>
                        </BlurFade>
                    </div>
                </div>

                <div className="relative w-full lg:col-span-6 lg:mt-0">
                    {/* Desktop: GSAP Stacking Cards */}
                    <div className="relative panel-spacer">
                        <section
                            ref={panelRef}
                            className="panel relative hidden pt-0 spacer-y-0 lg:block">
                            <div
                                ref={optionsRef}
                                className="panel__options top-0 lg:max-w-4xl lg:mx-auto lg:-top-11">
                                {services.map((service, index) => (
                                    <span
                                        key={index}
                                        data-target={service.title
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}
                                        role="button"
                                        onClick={() => handleTabClick(index)}
                                        className={
                                            activeIndex === index
                                                ? 'active'
                                                : ''
                                        }>
                                        {service.title}
                                    </span>
                                ))}
                            </div>

                            <div
                                ref={stackRef}
                                className="pt-28 panel__stack lg:pt-60">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            'overflow-hidden panel__card bg-tertiary',
                                            viewedIndices.has(index) &&
                                                index < activeIndex
                                                ? 'passive'
                                                : ''
                                        )}>
                                        <div className="flex flex-col justify-between w-full gap-3 lg:flex-row lg:gap-24">
                                            <div className="space-y-4 panel__title">
                                                <div className="flex items-center gap-4 text-[32px] font-medium">
                                                    <span className="w-3 h-3 rounded-full lg:w-4 lg:h-4 bg-primary"></span>
                                                    {service.title}
                                                </div>
                                                <div className="font-semibold uppercase">
                                                    {service.description}
                                                </div>
                                                <div className="text-base">
                                                    {service.content}
                                                </div>
                                            </div>
                                            <div className="panel__content">
                                                <ul>
                                                    {service.items.map(
                                                        (item, idx) => (
                                                            <li key={idx}>
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Mobile: Simple Cards */}
                    <div className="flex flex-col gap-4 lg:hidden">
                        {services.map((service, index) => (
                            <BlurFade
                                delay={0.25 + index * 0.05}
                                inView
                                key={index}>
                                <div className="p-6 bg-tertiary border border-black rounded-3xl min-h-[400px] flex flex-col">
                                    <div className="flex flex-col justify-between w-full gap-6 flex-1">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2.5 font-medium text-lg">
                                                <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0"></span>
                                                {service.title}
                                            </div>
                                            <div className="text-xs font-bold uppercase tracking-wide">
                                                {service.description}
                                            </div>
                                            <div className="text-sm leading-relaxed">
                                                {service.content}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="text-xs font-semibold uppercase tracking-wide">
                                                What&apos;s inside
                                            </div>
                                            <ul className="space-y-3">
                                                {service.items.map(
                                                    (item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-sm font-medium flex items-start gap-2.5 leading-relaxed">
                                                            <span className="w-1.5 h-1.5 bg-primary mt-1.5 shrink-0 block"></span>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
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
