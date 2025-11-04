'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Icon } from '@iconify/react'

import Logo from '../public/logo.svg'

const headerMenu = [
    {
        title: 'Our Lab',
        url: '/our-lab',
    },
    {
        title: 'About us',
        url: '/about-us',
    },
]

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            {/* Mobile Overlay */}
            <div
                id="mobile-overlay"
                className={`lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300 ${
                    isMobileMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeMobileMenu}
            />

            <header
                id="header"
                className="sticky top-0 z-50 w-full bg-white lg:bg-white/70 backdrop-blur-sm">
                <div className="container flex items-center justify-between gap-3 px-4 mx-auto lg:px-0">
                    <div>
                        <Link href="/" onClick={closeMobileMenu}>
                            <Image
                                src={Logo}
                                alt="GTMLab"
                                width={160}
                                height={40}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <nav>
                            <ul className="primary-menu">
                                {headerMenu.map((item) => (
                                    <li key={item.title}>
                                        <Link href={item.url}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            id="mobile-menu-button"
                            className={`flex items-center justify-center w-10 h-10 rounded-full mobile-btn ${
                                isMobileMenuOpen ? 'opened' : ''
                            }`}
                            aria-label="Toggle mobile menu"
                            onClick={toggleMobileMenu}>
                            <Icon
                                icon="heroicons:bars-3-solid"
                                width="30"
                                height="30"
                                className={`is-open ${
                                    isMobileMenuOpen ? 'hidden' : 'block'
                                }`}
                            />
                            <Icon
                                icon="heroicons:x-mark-solid"
                                width="30"
                                height="30"
                                className={`is-closed ${
                                    isMobileMenuOpen ? 'block' : 'hidden'
                                }`}
                            />
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="absolute left-0 right-0 top-full mt-px lg:mt-0 lg:hidden">
                        <div
                            id="primary-mobile-navigation"
                            className={`p-5 space-y-6 bg-white ${
                                isMobileMenuOpen ? 'block' : 'hidden'
                            }`}>
                            <nav>
                                <ul className="flex flex-col gap-6 h-full font-medium text-2xl">
                                    {headerMenu.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.url}
                                                onClick={closeMobileMenu}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Button
                                size="lg"
                                className="justify-center w-full"
                                asChild>
                                <Link href="/contact" onClick={closeMobileMenu}>
                                    Book A Call
                                    <Icon
                                        icon="heroicons:arrow-right-20-solid"
                                        width="20"
                                        height="20"
                                    />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:block">
                        <Button asChild>
                            <Link href="/contact">
                                Book a call
                                <Icon
                                    icon="heroicons:arrow-right-16-solid"
                                    width="20"
                                    height="20"
                                />
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}
