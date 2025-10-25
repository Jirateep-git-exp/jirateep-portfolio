<template>
  <div class="grid lg:grid-cols-2 gap-8 items-center">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 0.1 } }"
      class="space-y-6"
    >
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
        สวัสดีครับ ผมชื่อ <span class="text-cyan-400">Jirateep</span>
      </h1>
      <p class="text-slate-300 text-lg">
        ผมเป็นนักพัฒนาซอฟต์แวร์ที่ชอบสร้างเว็บแอปพลิเคชันที่รวดเร็ว
        ตอบสนองได้ดี และใช้งานง่าย
      </p>
      <div class="flex gap-3">
        <a href="#projects" class="px-5 py-3 rounded-md bg-cyan-500 text-white hover:bg-cyan-400 transition">ดูผลงาน</a>
        <a href="#contact" class="px-5 py-3 rounded-md border border-slate-700 hover:border-slate-500 transition">ติดต่อ</a>
      </div>
    </div>
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 0.2 } }"
      class="flex justify-center"
    >
      <div class="size-48 sm:size-56 rounded-full bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 border border-white/10 backdrop-blur flex items-center justify-center">
        <span class="text-cyan-300 text-5xl">👋</span>
      </div>
    </div>
  </div>
</template>
