<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-semibold mb-4">ติดต่อ</h2>
    <p class="text-slate-300 mb-6">พร้อมร่วมงานและพูดคุยเกี่ยวกับโปรเจกต์ใหม่ ๆ</p>
    <div class="flex gap-3" v-motion :initial="{opacity:0}" :enter="{opacity:1}">
      <a class="px-5 py-3 rounded-md bg-cyan-500 text-white hover:bg-cyan-400 transition" href="mailto:you@example.com">อีเมล</a>
      <a class="px-5 py-3 rounded-md border border-slate-700 hover:border-slate-500 transition" href="#">LinkedIn</a>
    </div>
  </div>
</template>
