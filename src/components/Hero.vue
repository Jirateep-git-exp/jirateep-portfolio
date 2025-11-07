<template>
  <div class="grid lg:grid-cols-2 gap-8 items-center">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 0.1 } }"
      class="space-y-6"
    >
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
        <span class="text-accent-500">Jirateep Khamruang</span>
        <span class="text-accent-500 flex mt-2">(Sunday)</span>
      </h1>
      <p class="text-slate-700 text-lg">
        ผมสำเร็จการศึกษาจากมหาวิทยาลัยแม่ฟ้าหลวง ด้วยความมุ่งมั่นที่จะเข้าสู่สายงานพัฒนาเว็บไซต์ เพื่อใช้ทักษะที่มีในการสร้างสรรค์ผลงานที่มีคุณภาพ และพัฒนาตนเองอย่างต่อเนื่องผ่านการเรียนรู้เทคโนโลยีใหม่ๆ
      </p>
      <div class="flex gap-4">
        <a href="#projects" class="px-6 py-4 rounded-lg bg-gradient-to-r from-accent-500 to-accent-400 text-white hover:from-accent-600 hover:to-accent-500 transition">ดูผลงาน</a>
        <a href="#contact" class="px-6 py-4 rounded-lg border border-accent-200 text-accent-700 hover:border-accent-300 transition">ติดต่อ</a>
      </div>
    </div>
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 0.2 } }"
      class="flex justify-center"
    >
      <div class="size-60 sm:size-56 rounded-full bg-gradient-to-tr from-accent-500/30 to-accent-400/10 border border-slate-200 backdrop-blur flex items-center justify-center mt-14">
        <span class="text-accent-300 text-5xl">
          <img src="../utils/images/MyPhoto.jpg" alt="Profile" class="rounded-full" />
        </span>
      </div>
    </div>
  </div>
</template>
