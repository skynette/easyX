"use client"

import { ReactNode } from 'react'
import SmoothScrollProvider from './smooth-scroll-provider'
import PageTransitionProvider from './page-transition-provider'

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <SmoothScrollProvider>
            <PageTransitionProvider>
                {children}
            </PageTransitionProvider>
        </SmoothScrollProvider>
    )
}