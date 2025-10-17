/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0F172A',
                primary: '#3B82F6',
                accent: '#60A5FA',
                text: '#F8FAFC',
                muted: '#64748B',
            },
            fontFamily: {
                sans: ['Gilroy', 'system-ui', '-apple-system', 'sans-serif'],
                satoshi: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
                'general-sans': ['General Sans', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
