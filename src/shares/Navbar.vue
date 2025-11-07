<template>
    <nav class="fixed top-0 left-0 w-full bg-cream-100/80 dark:bg-slate-900/80 backdrop-blur z-50 border-b border-slate-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="#" class="text-accent-500 text-xl font-bold flex items-center gap-2">
                        <i class="fa-solid fa-briefcase text-accent-500"></i>
                        <span>Portfolio</span>
                    </a>
                </div>
                                <div class="hidden md:block">
                                        <div class="ml-10 flex items-baseline space-x-4">
                                                <a href="#hero"
                                                    class="text-slate-700 dark:text-slate-200 hover:text-accent-500 px-4 py-2 rounded-md text-sm font-medium">หน้าแรก</a>
                                                <a href="#projects"
                                                    class="text-slate-700 dark:text-slate-200 hover:text-accent-500 px-4 py-2 rounded-md text-sm font-medium">ผลงาน</a>
                                                <a href="#contact"
                                                    class="text-slate-700 dark:text-slate-200 hover:text-accent-500 px-4 py-2 rounded-md text-sm font-medium">ติดต่อ</a>
                                        </div>
                                </div>
                                <!-- theme toggle (accessible switch) -->
                                <div class="flex items-center gap-2">
                                    <button
                                        @click="toggleTheme"
                                        role="switch"
                                        :aria-checked="isDark"
                                        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                                        class="relative inline-flex items-center w-14 h-8 bg-cream-200 dark:bg-slate-700 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-200/40"
                                    >
                                        <span class="sr-only">Toggle dark mode</span>
                                        <!-- sun icon (left) -->
                                        <i class="fa-solid fa-sun absolute left-1 text-xs text-accent-500 dark:text-accent-300"></i>
                                        <!-- moon icon (right) -->
                                        <i class="fa-solid fa-moon absolute right-1 text-xs text-accent-600 dark:text-accent-200"></i>
                                        <!-- knob -->
                                        <span
                                            :class="[
                                                'inline-block w-6 h-6 bg-white dark:bg-slate-200 rounded-full transform transition-transform shadow',
                                                isDark ? 'translate-x-6' : 'translate-x-0'
                                            ]"
                                            aria-hidden="true"
                                        ></span>
                                    </button>
                                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isDark: false,
        }
    },
    mounted() {
        // load saved theme or use system preference
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') this.isDark = true
        else if (saved === 'light') this.isDark = false
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) this.isDark = true
        this.applyTheme()
    },
    methods: {
        applyTheme() {
            document.documentElement.classList.toggle('dark', this.isDark)
            try { localStorage.setItem('theme', this.isDark ? 'dark' : 'light') } catch (e) { /* ignore */ }
        },
        toggleTheme() {
            this.isDark = !this.isDark
            this.applyTheme()
        }
    }
}
</script>