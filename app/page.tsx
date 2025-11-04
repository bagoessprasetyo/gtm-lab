import Hero from '@/components/section/hero'
import Intro from '@/components/section/intro'
import WhatWeDo from '@/components/section/whatwedo'
import Services from '@/components/section/services'
import Works from '@/components/section/works'
import Process from '@/components/section/process'

import workKAIE from '@/public/work/img-work-kaie.png'
import workDutchStartUp from '@/public/work/img-work-dutch-startup.png'

export default function Home() {
    return (
        <>
            <Hero
                variant="homepage"
                title="Supercharge Your Growth"
                description="We build full-funnel growth systems — so revenue becomes predictable."
                subtitle="Your full-funnel growth partner"
                link={{
                    url: '/contact',
                    title: 'Book a Strategy Call',
                    target: '_self',
                }}
                video={{
                    src: '/video/video-main.mp4',
                    poster: '/video/video-main.jpg',
                }}
            />
            <Intro
                typingText={{
                    before: 'Everyone wants growth <br />Few have the ',
                    words: ['marketing', 'sales', 'design', 'technology'],
                    after: ' systems <br />to make it happen',
                    speed: 80,
                    delay: 2000,
                }}
                clients={[
                    { img: 'img-lion-parcel.png', title: 'Lion Parcel' },
                    { img: 'img-cinepolis.png', title: 'Cinepolis' },
                    { img: 'img-dhl.png', title: 'DHL' },
                    { img: 'img-ashley.png', title: 'Ashley Hotel Group' },
                    { img: 'img-jnt.png', title: 'J&T Express' },
                    { img: 'img-dore.png', title: 'Dore by LeTAO' },
                    { img: 'img-azure-risk.png', title: 'Azure Risk' },
                    { img: 'img-zenith.png', title: 'Zenith' },
                    { img: 'img-ikigai.png', title: 'IKIGAI HK' },
                    { img: 'img-bellezza.png', title: 'Bellezza' },
                    {
                        img: 'img-shabushabu-express.png',
                        title: 'Shabushabu Express',
                    },
                    { img: 'img-gkb.png', title: 'Garuda Kencana Batik' },
                    { img: 'img-hokione.png', title: 'Hokione' },
                    { img: 'img-peraga.png', title: 'Peraga Expo' },
                    {
                        img: 'img-dri.png',
                        title: 'Debt Recovery Indonesia',
                    },
                    { img: 'img-balkan.png', title: 'Balkan Shawarma' },
                    { img: 'img-izzy.png', title: 'Izzy' },
                    { img: 'img-scuto.png', title: 'Scuto' },
                ]}
                description="GTMLab powers full-funnel strategy and growth systems for global brands"
                link={{
                    url: '/contact',
                    title: 'Book a Strategy Call',
                    target: '_self',
                }}
            />
            <WhatWeDo
                subtitle="What We Do"
                title="We understand every step of the growth funnel, because we operate on all of it."
                itemLists={[
                    {
                        title: 'Awareness',
                        description:
                            'Making your first impression unforgettable',
                    },
                    {
                        title: 'Interest',
                        description:
                            'Sparking curiosity that draws people closer',
                    },
                    {
                        title: 'Desire',
                        description: 'Building urgency, value, and trust',
                    },
                    {
                        title: 'Conversion',
                        description: 'Turning intent into revenue',
                    },
                    {
                        title: 'Retention',
                        description: 'Scaling loyalty and lifetime value',
                    },
                ]}
                video={{
                    src: '/video/video-homepage.mp4',
                }}
            />
            <Services
                subtitle="What We’re Known For"
                title="Real growth is not luck, it’s designed."
                description="Every strategy we build is rooted in Data, Creativity, and Technology"
            />
            <Works
                subtitle="Real numbers - Real systems - Real growth."
                title="Real Growth is not luck, it's designed."
                description="We’ve helped startups, enterprises, and everything in between build scalable GTM engines:"
                link={{
                    url: '/contact',
                    title: 'Book a Call',
                    target: '_self',
                }}
                works={[
                    {
                        id: 1,
                        title: 'KAIE',
                        image: workKAIE.src,
                        shortDescription:
                            'Helping Korean-inspired brand KAIE redefine their brand marketing using AI and performance marketing',
                        labels: [
                            { title: 'Performance Marketing' },
                            { title: 'Market-Entry' },
                            { title: 'Lead Generation' },
                        ],
                    },
                    {
                        id: 2,
                        title: 'Tomazz',
                        image: workDutchStartUp.src,
                        shortDescription:
                            'Helping Dutch startup strategize and execute market entry into Indonesia, from 0 to 1',
                        labels: [
                            { title: 'Performance Marketing' },
                            { title: 'Market-Entry' },
                            { title: 'Web Development' },
                        ],
                    },
                ]}
            />
            <Process
                subtitle="Our Process"
                title="Real Growth Is Not Luck, It's Designed"
                description="Every strategy we build is rooted in Data, Creativity, and Technology"
                showAboutSection={true}
                aboutLink={{
                    url: '/about-us',
                    title: 'About us',
                    target: '_self',
                }}
            />
        </>
    )
}
