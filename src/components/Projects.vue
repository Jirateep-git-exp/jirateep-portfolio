<script setup lang="ts">
const projects = [
  { title: 'Project One', desc: 'ระบบแสดงผลแบบเรียลไทม์ด้วย Vue + WebSocket', tags: ['Vue', 'WS', 'Vite'] },
  { title: 'Project Two', desc: 'Landing Page เร็วแรงด้วย Vite + Tailwind', tags: ['Vite', 'Tailwind'] },
  { title: 'Project Three', desc: 'Dashboard พร้อม Animation ที่ลื่นไหล', tags: ['Vue', 'Motion'] },
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold mb-8">ผลงาน</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="(p, i) in projects"
        :key="p.title"
        class="rounded-xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition"
        v-motion
        :initial="{opacity:0, y:16}"
        :enter="{opacity:1, y:0, transition: { delay: i * 0.05 }}"
      >
        <h3 class="text-xl font-semibold mb-2">{{ p.title }}</h3>
        <p class="text-slate-300 mb-3">{{ p.desc }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="t in p.tags" :key="t" class="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/20">{{ t }}</span>
        </div>
      </article>
    </div>
  </div>
</template>
