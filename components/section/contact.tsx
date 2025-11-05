'use client'

import { useEffect } from 'react'
import { BlurFade } from '@/components/ui/blur-fade'

interface ContactProps {
    title: string
    description?: string
    formId?: string
    portalId?: string
    region?: string
    className?: string
}

export default function Contact({
    title,
    description,
    formId = 'b4119b2c-c5f0-4f65-8261-1d8f99feff3c',
    portalId = '46392522',
    region = 'na2',
}: ContactProps) {
    useEffect(() => {
        // Load HubSpot form script
        const script = document.createElement('script')
        script.src =
            'https://js-na2.hsforms.net/forms/embed/developer/46392522.js'
        script.defer = true
        document.body.appendChild(script)

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="py-10 box box-contact lg:py-20">
            <div className="container mx-auto relative px-3 xl:px-0 gap-10 flex flex-col xl:flex-row xl:gap-[126px] w-full overflow-hidden">
                <div className="lg:w-[384px] self-start">
                    <div className="sticky top-28">
                        <BlurFade delay={0.25} inView>
                            <h1
                                className="text-4xl font-medium lg:text-5xl"
                                data-aos="fade-in">
                                {title}
                            </h1>
                        </BlurFade>
                        {description && (
                            <BlurFade delay={0.25 * 2} inView>
                                <div className="entry-description mt-6">
                                    {description}
                                </div>
                            </BlurFade>
                        )}
                    </div>
                </div>
                <div className="flex-1 w-full lg:mt-0">
                    <BlurFade delay={0.25}>
                        <div
                            className="hs-form-html"
                            data-region={region}
                            data-form-id={formId}
                            data-portal-id={portalId}></div>
                    </BlurFade>
                </div>
            </div>
        </div>
    )
}
