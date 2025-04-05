"use client"

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import PageTransition from './page-transition'

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <PageTransition key={pathname}>
                {children}
            </PageTransition>
        </AnimatePresence>
    )
}