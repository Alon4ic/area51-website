import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                jakarta: ['PlusJakartaSans', 'sans-serif'],
                architects: ['ArchitectsDaughter', 'sans-serif'],
            },
            letterSpacing: {
                '-2': '-2px', // Ваше кастомное значение
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                baseText: '#1A1B21',
                goldBase: '#CBBFA2',
                borderGray: '#3C3E40',
                activeGold: '#C3B187',
                grayText: '#e0e0e0',
                bgGreen: '#54625F',
                graySpan: '#5b5f60',
                lightGray: '#bdbdbb',
                white20: 'rgba(255, 255, 255, 0.2)',
                hoverGray: '#2E2F35',
                bottomGray: '#768180',
                gray30: '#b9bcc1',
            },
            screens: {
                phone: '360px',
                sm: '640px',
                md: '720px',
                middle: '850px',
                lg: '960px',
                laptop: '1150px',
                xl: '1200px',
                desktop: '1440px',
            },
        },
    },
    plugins: [],
} satisfies Config;
