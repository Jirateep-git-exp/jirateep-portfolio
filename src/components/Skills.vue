<script setup lang="ts">
const languages = [
  'HTML', 'CSS', 'JavaScript'
]
const frameworks = [
  'Vue.js', 'Node.js', 'Tailwind CSS', 'Bootstrap 5'
]
const tools = [
  'MongoDB', 'SQL', 'Git', 'Docker', 'Any AI'
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold mb-6">ทักษะ</h2>
    <div>
      <h3 class="text-2xl font-semibold mb-6">ภาษา</h3>
      <ul class="flex flex-wrap gap-3">
        <li
          v-for="(s, i) in languages"
          :key="s"
          class="px-4 py-3 text-base font-medium rounded-lg border border-slate-200 bg-cream-50 text-slate-700 min-w-[150px] text-center hover:shadow-md transform transition-all duration-150 hover:-translate-y-1 dark:bg-slate-700 dark:text-slate-200"
          v-motion
          :initial="{opacity:0, y:10}"
          :enter="{opacity:1, y:0, transition: { delay: i * 0.04 }}"
        >
          {{ s }}
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <h3 class="text-2xl font-semibold mb-6">Framework / Libraries</h3>
      <ul class="flex flex-wrap gap-3">
      <li
        v-for="(s, i) in frameworks"
        :key="s"
        class="px-4 py-3 text-base font-medium rounded-lg border border-slate-200 bg-cream-50 text-slate-700 min-w-[150px] text-center hover:shadow-md transform transition-all duration-150 hover:-translate-y-1 dark:bg-slate-700 dark:text-slate-200"
        v-motion
        :initial="{opacity:0, y:10}"
        :enter="{opacity:1, y:0, transition: { delay: i * 0.04 }}"
      >
        {{ s }}
      </li>
      </ul>
    </div>

    <div class="mt-8">
      <h3 class="text-2xl font-semibold mb-6">Tools อื่นๆ</h3>
      <ul class="flex flex-wrap gap-3">
      <li
        v-for="(s, i) in tools"
        :key="s"
        class="px-4 py-3 text-base font-medium rounded-lg border border-slate-200 bg-cream-50 text-slate-700 min-w-[150px] text-center hover:shadow-md transform transition-all duration-150 hover:-translate-y-1 dark:bg-slate-700 dark:text-slate-200"
        v-motion
        :initial="{opacity:0, y:10}"
        :enter="{opacity:1, y:0, transition: { delay: i * 0.04 }}"
      >
        {{ s }}
      </li>
      </ul>
    </div>
  </div>
</template>
