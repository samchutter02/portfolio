import type { Metadata } from 'next';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { ThemeToggle } from './components/theme/ThemeToggle';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Samuel Chutter - Frontend Developer',
	description:
		'Welcome to my portfolio! I am a passionate frontend developer specializing in creating beautiful, responsive, and user-centric web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform designs into seamless interactive experiences.',
	keywords: [
		'Frontend Developer',
		'Web Developer',
		'React Developer',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'UI/UX',
		'Responsive Design',
		'Web Animation',
		'Modern Web Development',
		'CSS Expert',
		'Performance Optimization',
		'Web Accessibility',
		'Component Design',
		'[Samuel Chutter]',
	],
	authors: [{ name: '[Samuel Chutter]' }],
	creator: '[Samuel Chutter]',
	openGraph: {
		title: '[Samuel Chutter] - Frontend Developer Portfolio',
		description: 'Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.',
		url: 'https://your-domain.com',
		siteName: '[Samuel Chutter] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Samuel Chutter] - Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Samuel Chutter] - Frontend Developer',
		description: 'Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
					<Analytics />
					<ThemeToggle />
				</ThemeProvider>
			</body>
		</html>
	);
}
