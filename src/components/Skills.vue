<script setup lang="ts">
const skills = [
  'HTML', 'CSS', 'JavaScript', 'Vue 3', 'Tailwind CSS', 'Bootstrap 5', 'Node.js', 'MongoDB', 'SQL'
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold mb-6">ทักษะ</h2>
    <ul class="flex flex-wrap gap-3">
      <li
        v-for="(s, i) in skills"
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
</template>
