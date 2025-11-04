'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface IntroLink {
    url: string
    title: string
    target?: '_blank' | '_self'
}

interface Client {
    img: string
    title: string
}

interface TypingTextConfig {
    before: string
    words: string[]
    after: string
    speed?: number
    delay?: number
}

interface IntroProps {
    subtitle?: string
    title?: string
    description?: string
    link?: IntroLink
    clients?: Client[]
    typingText?: TypingTextConfig
    className?: string
}

export default function Intro({
    subtitle,
    title,
    description,
    link,
    clients = [],
    typingText,
    className,
}: IntroProps) {
    const typingRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!typingText || !typingRef.current) return

        const el = typingRef.current
        const { before, words, after, speed = 100, delay = 2000 } = typingText

        if (words.length === 0) return // Stop if no words

        let wordIndex = 0
        let charIndex = 0
        let isTyping = false

        function typeNextWord() {
            if (isTyping) return
            isTyping = true

            const currentWord = words[wordIndex]
            charIndex = 0

            // Replace <br /> in before and after with actual line breaks
            const beforeText = before.replace(/<br\s*\/?>/g, '<br />')
            const afterText = after.replace(/<br\s*\/?>/g, '<br />')

            el.innerHTML = `${beforeText}<span class="word lowercase font-semibold text-primary border-b-4 border-secondary"></span><span class="cursor animate-blink text-black">|</span>${afterText}`

            const wordEl = el.querySelector('.word')
            if (!wordEl) return

            const typeInterval = setInterval(() => {
                if (charIndex < currentWord.length) {
                    wordEl.textContent += currentWord.charAt(charIndex)
                    charIndex++
                } else {
                    clearInterval(typeInterval)
                    isTyping = false

                    // Wait before next word
                    setTimeout(() => {
                        wordIndex = (wordIndex + 1) % words.length
                        typeNextWord()
                    }, delay)
                }
            }, speed)
        }

        typeNextWord()

        // Cleanup function
        return () => {
            isTyping = false
        }
    }, [typingText])

    return (
        <div
            className={cn(
                'py-10 box box-intro bg-neutral-50 lg:py-20',
                className
            )}>
            <div className="container flex flex-col gap-4 px-4 mx-auto lg:gap-10 lg:px-0">
                <div className="flex flex-col w-full gap-8">
                    <div className="flex flex-col gap-4 header-area">
                        {subtitle && (
                            <div
                                className="flex items-center gap-1.5 lg:gap-4 font-semibold uppercase text-[12px] lg:text-base entry-subtitle"
                                data-aos="fade-in"
                                data-aos-delay="0">
                                <span className="w-2 h-2 rounded-full lg:w-4 lg:h-4 bg-primary"></span>
                                {subtitle}
                            </div>
                        )}

                        {typingText ? (
                            <h1
                                className="text-xl font-medium leading-snug entry-title lg:text-5xl"
                                data-aos="fade-in"
                                data-aos-delay="250">
                                <div
                                    ref={typingRef}
                                    className="typing-text"></div>
                            </h1>
                        ) : (
                            title && (
                                <h1
                                    className="text-xl font-medium leading-snug entry-title lg:text-5xl"
                                    data-aos="fade-in"
                                    data-aos-delay="250">
                                    {title}
                                </h1>
                            )
                        )}
                    </div>
                </div>

                {clients.length > 0 && (
                    <div
                        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6"
                        data-aos="fade-in"
                        data-aos-delay="250">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center">
                                <Image
                                    src={`/logo-client/${client.img}`}
                                    alt={client.title}
                                    width={200}
                                    height={100}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {(description || link) && (
                    <div className="space-y-6 lg:space-y-8 lg:max-w-4xl">
                        {description && (
                            <div
                                className="entry-description font-medium text-xl lg:text-[32px]"
                                data-aos="fade-in"
                                data-aos-delay="250">
                                {description}
                            </div>
                        )}

                        {link && (
                            <div
                                className="flex entry-main-button"
                                data-aos="fade-in"
                                data-aos-delay="250">
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
                )}
            </div>
        </div>
    )
}
