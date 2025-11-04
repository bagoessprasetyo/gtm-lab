import Image from 'next/image'
import { cn } from '@/lib/utils'
import { StaticImageData } from 'next/image'

// Import team images
import ImgKevin from '@/public/team/img-kevin.webp'
import ImgAlbert from '@/public/team/img-albert.webp'
import ImgPhebe from '@/public/team/img-phebe.webp'
import ImgCandela from '@/public/team/img-candela.webp'
import ImgJeremy from '@/public/team/img-jeremy.webp'
import ImgJibril from '@/public/team/img-jibril.webp'
import ImgJuan from '@/public/team/img-juan.webp'
import ImgRidho from '@/public/team/img-ridho.webp'
import ImgNadya from '@/public/team/img-nadya.webp'
import ImgArifkha from '@/public/team/img-arifkha.webp'
import ImgArif from '@/public/team/img-arif.webp'
import ImgRasyidan from '@/public/team/img-rasyidan.webp'
import ImgEsning from '@/public/team/img-esning.webp'
import ImgTobias from '@/public/team/img-tobias.webp'
import ImgFariz from '@/public/team/img-fariz.webp'
import ImgElvina from '@/public/team/img-elvina.webp'
import ImgLaurencia from '@/public/team/img-laurencia.webp'
import ImgBryan from '@/public/team/img-bryan.webp'
import ImgShem from '@/public/team/img-shem.webp'
import ImgDevira from '@/public/team/img-devira.webp'
import ImgMelvyn from '@/public/team/img-melvyn.webp'
import ImgPhilan from '@/public/team/img-philan.webp'
import ImgClarissa from '@/public/team/img-clarissa.webp'

interface TeamMember {
    name: string
    image: StaticImageData
}

interface AboutTeamProps {
    subtitle?: string
    title: string
    description?: string
    teamMembers?: TeamMember[]
    className?: string
}

const defaultTeamMembers: TeamMember[] = [
    { name: 'Kevin Cho', image: ImgKevin },
    { name: 'Albert Lie', image: ImgAlbert },
    { name: 'Phebe', image: ImgPhebe },
    { name: 'Candela Hoetama', image: ImgCandela },
    { name: 'Jeremy Lawoto', image: ImgJeremy },
    { name: 'M Jibril', image: ImgJibril },
    { name: 'Juan Surya', image: ImgJuan },
    { name: 'Ridho Aliga', image: ImgRidho },
    { name: 'Nadya Baiq', image: ImgNadya },
    { name: 'A. Khairon Nissa', image: ImgArifkha },
    { name: 'Arif Rahman', image: ImgArif },
    { name: 'Rasyidan Akbar', image: ImgRasyidan },
    { name: 'Esning Kusuma', image: ImgEsning },
    { name: 'Jeremy Tobias', image: ImgTobias },
    { name: 'M. Fariz', image: ImgFariz },
    { name: 'Elvina Lathifa', image: ImgElvina },
    { name: 'Laurencia Maitri', image: ImgLaurencia },
    { name: 'Bryan Lie', image: ImgBryan },
    { name: 'Shem Jaron', image: ImgShem },
    { name: 'Devira Putri', image: ImgDevira },
    { name: 'Melvyn Setiawan', image: ImgMelvyn },
    { name: 'Naqqara Philan', image: ImgPhilan },
    { name: 'Marie Clarissa', image: ImgClarissa },
]

export default function AboutTeam({
    subtitle,
    title,
    description,
    teamMembers = defaultTeamMembers,
    className,
}: AboutTeamProps) {
    // First 2 members for top row
    const topMembers = teamMembers.slice(0, 2)

    // Remaining members
    const remainingMembers = teamMembers.slice(2)

    // Desktop: chunks of 7
    const desktopChunks: TeamMember[][] = []
    for (let i = 0; i < remainingMembers.length; i += 7) {
        desktopChunks.push(remainingMembers.slice(i, i + 7))
    }

    // Mobile: chunks of 4
    const mobileChunks: TeamMember[][] = []
    for (let i = 0; i < remainingMembers.length; i += 4) {
        mobileChunks.push(remainingMembers.slice(i, i + 4))
    }

    return (
        <div className={cn('py-10 box box-benefits lg:py-20', className)}>
            <div className="container flex flex-col items-center gap-10 px-4 mx-auto xl:px-0">
                {/* Header */}
                <div className="flex flex-col items-center max-w-3xl gap-4 text-center header-area">
                    {subtitle && (
                        <div
                            className="flex items-center gap-4 font-semibold uppercase entry-subtitle"
                            data-aos="fade-in">
                            <span className="w-4 h-4 rounded-full bg-primary"></span>
                            {subtitle}
                        </div>
                    )}
                    <h1
                        className="text-4xl font-medium entry-title lg:text-5xl"
                        data-aos="fade-in">
                        {title}
                    </h1>
                    {description && (
                        <div
                            className="mt-2 entry-description"
                            data-aos="fade-in">
                            {description}
                        </div>
                    )}
                </div>

                {/* Team Grid */}
                {teamMembers.length > 0 && (
                    <div className="w-full space-y-1">
                        {/* Top 2 Members */}
                        <div
                            className="flex justify-center gap-1"
                            data-aos="fade-in">
                            {topMembers.map((member, index) => (
                                <div key={index}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={240}
                                        height={240}
                                        className="w-full lg:max-w-60"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Remaining members in rows of 7 */}
                        {desktopChunks.map((chunk, chunkIndex) => (
                            <div
                                key={`desktop-${chunkIndex}`}
                                className="items-start self-stretch hidden w-full gap-1 lg:flex"
                                data-aos="fade-in">
                                {chunk.map((member, memberIndex) => (
                                    <div key={memberIndex}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            className="flex max-w-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* Mobile: Remaining members in rows of 4 */}
                        {mobileChunks.map((chunk, chunkIndex) => {
                            const startIndex = chunkIndex * 4
                            const totalRemaining = remainingMembers.length

                            return (
                                <div
                                    key={`mobile-${chunkIndex}`}
                                    className="flex items-start self-stretch justify-center w-full gap-1 lg:hidden">
                                    {chunk.map((member, memberIndex) => {
                                        const globalIndex =
                                            startIndex + memberIndex + 1
                                        const isLastItem =
                                            globalIndex === totalRemaining

                                        return (
                                            <div
                                                key={memberIndex}
                                                className={cn(
                                                    '',
                                                    isLastItem &&
                                                        'max-w-20 md:max-w-44'
                                                )}>
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="flex lg:max-w-full"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
