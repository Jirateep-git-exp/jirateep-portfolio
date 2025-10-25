<script setup lang="ts">
const skills = [
  'Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'REST/GraphQL'
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold mb-6">ทักษะ</h2>
    <ul class="flex flex-wrap gap-3">
      <li
        v-for="(s, i) in skills"
        :key="s"
        class="px-3 py-2 rounded border border-white/10 bg-white/5"
        v-motion
        :initial="{opacity:0, y:10}"
        :enter="{opacity:1, y:0, transition: { delay: i * 0.04 }}"
      >
        {{ s }}
      </li>
    </ul>
  </div>
</template>
