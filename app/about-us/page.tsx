import Hero from '@/components/section/hero'
import About from '@/components/section/about'
import WhatWeDo from '@/components/section/whatwedo'
import AboutFounder from '@/components/section/about-founder'
import AboutTeam from '@/components/section/about-team'

import AboutImage from '@/public/img-about.jpg'
import KevinImage from '@/public/img-kevin.jpg'

export default function AboutUsPage() {
    return (
        <>
            <Hero
                title="We’ve been where you are, building from scratch, moving fast with limited resources"
                description="Some of us were founders, others led growth or product at high-growth companies."
                link={{
                    url: '/contact',
                    title: 'Book a Strategy Call',
                    target: '_self',
                }}
            />
            <About
                subtitle="Who We Are"
                title="Where Founders and Growth Leaders Build Together"
                image={AboutImage.src}
                description="We're a collective of founders, growth leaders, and brand strategists with deep experience across startups, enterprises, and agencies."
                itemLists={[
                    {
                        title: 'Scaled growth engines for regional and global brands',
                    },
                    {
                        title: 'Led marketing, sales, and product teams in fast-moving industries',
                    },
                    {
                        title: 'Built systems that connect creativity with performance',
                    },
                ]}
            />
            <WhatWeDo
                subtitle="Our Culture"
                title="We move fast, stay curious, and build with purpose"
                description="For us, every project is a partnership, because sustainable growth only happens when teams grow together."
                itemLists={[]}
                link={{
                    url: '/contact',
                    title: 'Book a Strategy Call',
                    target: '_self',
                }}
                video={{
                    src: '/video/video-homepage.mp4',
                }}
            />
            <AboutFounder
                subtitle="Meet With Us"
                title="Led by Founders Who’ve Been There"
                image={KevinImage.src}
                imageAlt="Kevin Cho - CEO & Founder of GTM Lab"
                content={
                    <>
                        <p>
                            After building multi-million dollar companies like
                            Peeba and investing in 50+ startups as a VC fund
                            partner (later acquired by gaming unicorn Animoca
                            Brands), Kevin understands the real challenges of
                            scaling growth.
                        </p>
                        <p>
                            Recognized in <strong>Forbes 30 Under 30</strong>
                            for Retail & E-Commerce and part of
                            <strong>Y Combinator’s Winter 2023 Cohort</strong>,
                            he’s learned directly from some of the world’s best
                            founders and operators.
                        </p>
                        <p>
                            Today, Kevin leads GTM Lab with one mission: to help
                            teams grow faster, smarter, and more
                            predictably—using the same playbooks that once took
                            years (and many mistakes) to master.
                        </p>
                    </>
                }
                link={{
                    url: '/contact',
                    title: 'Book a Strategy Call',
                    target: '_self',
                }}
            />
            <AboutTeam
                subtitle="Our Team"
                title="Meet The Team Behind Your Growth"
                description="A diverse team of strategists, creatives, and operators committed to driving measurable results."
            />
        </>
    )
}
