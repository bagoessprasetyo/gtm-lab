import Hero from '@/components/section/hero'
import ServicesOverall from '@/components/section/services-overall'
import Process from '@/components/section/process'

export default function OurLabPage() {
    return (
        <>
            <Hero
                title="Turning Strategy Into Scalable Growth"
                description="We’re founders, operators, and builders who’ve been where you are — growing fast, testing ideas, and trying to make it all work smarter. That’s why we started GTM Lab: to help teams skip the chaos, turn strategy into action, and build systems that scale."
                link={{
                    url: '/contact',
                    title: 'Book a Strategy Call',
                    target: '_self',
                }}
            />
            <ServicesOverall />
            <Process
                subtitle="Our Process"
                title="From insight to impact, we build systems that scale."
                description="We combine strategy, creativity, and technology to align every stage of your funnel, turning ideas into measurable growth."
                showAboutSection={false}
                itemLists={[
                    {
                        title: 'Discover',
                        description:
                            'We start with data, auditing your funnel, analyzing signals, and finding the biggest growth opportunities.',
                    },
                    {
                        title: 'Design',
                        description:
                            'We turn insights into structure, aligning your message, creativity, and automation for every funnel stage.',
                    },
                    {
                        title: 'Scale',
                        description:
                            'We launch, test, and refine, continuously improving performance and visibility across your channels.',
                    },
                ]}
            />
        </>
    )
}
