import { SITE_NAME } from '@/constants'
import { RootProvider } from '@/providers/providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppinsSans = Poppins({
	variable: '--font-popins-sans',
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	icons: {
		icon: '/images/favicon.ico',
		shortcut: '/images/favicon.ico',
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Task manager',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${poppinsSans.variable} antialiased`}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
