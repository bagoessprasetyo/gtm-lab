import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ServiceLink {
    url: string
    title: string
    target?: '_blank' | '_self'
}

interface CoreServiceItem {
    title?: string
    items: string[]
}

interface ServiceItem {
    subtitle?: string
    title?: string
    shortDescription?: string
    description?: string
    platforms: string[]
    coreServices: CoreServiceItem[]
}

interface ServicesOverallProps {
    subtitle?: string
    title?: string
    description?: string
    link?: ServiceLink
    services?: ServiceItem[]
    className?: string
}

const defaultServices: ServiceItem[] = [
    {
        subtitle: 'Marketing',
        title: 'Connection That Converts',
        shortDescription:
            'Marketing turns attention into measurable business results.',
        description:
            'We design and run campaigns that reach the right audience, engage them at every touchpoint, and drive conversions across your funnel.',
        platforms: [
            'logo-google-ads.svg',
            'logo-meta.svg',
            'logo-linkedin.svg',
            'logo-mailchimp.svg',
            'logo-hubspot.svg',
        ],
        coreServices: [
            {
                title: 'Campaign  & Strategy Optimization',
                items: [
                    'Campaign Auditing & Performance Optimization',
                    'Funnel Analysis & Conversion Rate Optimization (CRO)',
                ],
            },
            {
                title: 'Digital Advertising & Demand Generation',
                items: [
                    'Social Media & Paid Advertising (Meta, Google, LinkedIn, TikTok, Commerce)',
                    'Organic Search & SEO Strategy',
                    'Email & Lifecycle Campaigns',
                    'Event Marketing & Activation',
                ],
            },
            {
                title: 'Sales Enablement & Lead Generation',
                items: [
                    'B2B Marketing & Pipeline Growth',
                    'Sales Outreach & Prospecting',
                    'Social Media & Paid Advertising (Meta, Google, LinkedIn, TikTok, Commerce)',
                    'Organic Search & Search Engine Optimization',
                    'Email & Lifecycle Campaigns',
                    'Event Marketing',
                    'Telesales & Telemarketing',
                    'Sales Outreach & Prospecting',
                ],
            },
        ],
    },
    {
        subtitle: 'Creativity',
        title: 'Connection That Lasts',
        shortDescription:
            'Creativity fuels engagement and builds relationships that stick.',
        description:
            'We craft messaging, visuals, and experiences that resonate with your audience and turn attention into trust.',
        platforms: [
            'logo-figma.svg',
            'logo-adobe.svg',
            'logo-wordpress.svg',
            'logo-webflow.svg',
            'logo-canva.svg',
        ],
        coreServices: [
            {
                items: [
                    'Copywriting & Storytelling',
                    'UI/UX & Website Design',
                    'Branding & Visual Storytelling',
                    'Video & Content Creation',
                ],
            },
        ],
    },
    {
        subtitle: 'Data & Technology',
        title: 'Systems That Power Scale',
        shortDescription:
            'Data and technology remove guesswork and create repeatable growth systems.',
        description:
            'We design and integrate a growth stack that aligns marketing, sales, and product, turning insights into automated, scalable operations.',
        platforms: [
            'logo-hubspot.svg',
            'logo-sleekflow.svg',
            'logo-n8n.svg',
            'logo-whatsapp.svg',
            'logo-gtm.svg',
            'logo-big-query.svg',
        ],
        coreServices: [
            {
                items: [
                    'Full-Funnel Audit & Strategy',
                    'CRM Setup & Integration (HubSpot, SleekFlow, etc.)',
                    'Marketing & Sales Automation',
                    'Platform Integrations & API Connections (WhatsApp, Wati)',
                    'Campaign Tracking & Attribution',
                    'Performance Forecasting & Measurement',
                ],
            },
        ],
    },
    {
        subtitle: 'AI-Powered Optimization',
        title: 'Smarter, Faster Growth',
        shortDescription:
            'AI accelerates testing, predictions, and performance.',
        description:
            'We use AI to enhance creative testing, optimize campaigns, and automate workflows for smarter growth.',
        platforms: [
            'logo-chatgpt.svg',
            'logo-google-analytics.svg',
            'logo-n8n.svg',
            'logo-midjourney.svg',
            'logo-replit.svg',
            'logo-kling.svg',
            'logo-trae.svg',
        ],
        coreServices: [
            {
                items: [
                    'AI-Powered Creative Testing',
                    'Predictive Analytics & Forecasting',
                    'Workflow Automation',
                    'Campaign Optimization',
                ],
            },
        ],
    },
]

export default function ServicesOverall({
    subtitle,
    title,
    description,
    link,
    services = defaultServices,
    className,
}: ServicesOverallProps) {
    return (
        <div
            className={cn(
                'py-10 box box-services bg-neutral-50 lg:py-20',
                className
            )}>
            <div className="container flex flex-col gap-10 px-4 mx-auto lg:px-0">
                <div className="w-full flex flex-col gap-8 lg:max-w-[590px]">
                    <div className="flex flex-col gap-4 header-area">
                        {subtitle && (
                            <div
                                className="flex items-center gap-4 font-semibold uppercase entry-subtitle"
                                data-aos="fade-in">
                                <span className="w-4 h-4 rounded-full bg-primary"></span>
                                {subtitle}
                            </div>
                        )}
                        {title && (
                            <h1
                                className="text-4xl font-medium entry-title lg:text-5xl"
                                data-aos="fade-in">
                                {title}
                            </h1>
                        )}
                        {description && (
                            <div
                                className="mt-2 entry-description"
                                data-aos="fade-in">
                                {description}
                            </div>
                        )}
                        {link && (
                            <div
                                className="flex flex-col items-start gap-4 mt-4 entry-main-button"
                                data-aos="fade-in">
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

                <div className="w-full lg:col-span-6">
                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col border-b border-r border-neutral-200 first:border-t lg:grid lg:grid-cols-12 lg:gap-8"
                                data-aos="fade-in">
                                <div className="flex flex-col gap-4 p-4 lg:p-9 lg:col-span-4">
                                    {service.subtitle && (
                                        <div className="flex items-center gap-4 font-semibold uppercase entry-subtitle">
                                            <span className="w-4 h-4 rounded-full bg-primary"></span>
                                            {service.subtitle}
                                        </div>
                                    )}
                                    {service.title && (
                                        <h2 className="font-medium lg:text-3xl">
                                            {service.title}
                                        </h2>
                                    )}
                                    {service.shortDescription && (
                                        <p className="mb-4 text-neutral-700">
                                            {service.shortDescription}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-4 font-semibold uppercase entry-subtitle">
                                        What We Do
                                    </div>
                                    {service.description && (
                                        <p className="mb-4 text-neutral-700">
                                            {service.description}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-6 p-4 lg:p-9 lg:col-span-5 lg:border-l lg:border-neutral-200">
                                    <div className="flex items-center gap-4 font-semibold uppercase entry-subtitle">
                                        Core Services:
                                    </div>
                                    <div className="space-y-5">
                                        {service.coreServices.map(
                                            (coreService, coreIndex) => (
                                                <div
                                                    key={coreIndex}
                                                    className="flex flex-col gap-4">
                                                    {coreService.title && (
                                                        <div className="flex items-center gap-4 text-sm font-semibold uppercase entry-subtitle">
                                                            {coreService.title}
                                                        </div>
                                                    )}
                                                    {coreService.items.map(
                                                        (item, itemIndex) => (
                                                            <div
                                                                key={itemIndex}
                                                                className="flex items-start gap-4 entry-subtitle">
                                                                <div className="flex shrink-0 mt-1.5">
                                                                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                                                                </div>
                                                                <span className="flex-1">
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 p-4 lg:p-9 lg:col-span-3 lg:border-l lg:border-neutral-200">
                                    <div className="flex items-center gap-4 font-semibold uppercase entry-subtitle">
                                        Platform & System
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {service.platforms.map(
                                            (platform, platformIndex) => (
                                                <div
                                                    key={platformIndex}
                                                    className="flex items-center justify-center w-16 h-16 border rounded-full border-neutral-100">
                                                    <Image
                                                        src={`/platform/${platform}`}
                                                        alt={platform.replace(
                                                            /logo-|\.svg/g,
                                                            ''
                                                        )}
                                                        width={40}
                                                        height={40}
                                                        className="w-auto h-auto"
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
