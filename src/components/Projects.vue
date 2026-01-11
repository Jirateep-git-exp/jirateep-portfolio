<script setup lang="ts">
const projects_mfu = [
  { 
    title: 'Gems Car Senior Project', 
    desc: 'ระบบดูตำแหน่งรถไฟฟ้าภายในมหาลัย พัฒนาโดยใช้ React + TypeScript + WebSocket', 
    tags: ['React', 'TypeScript', 'WebSocket', 'MongoDB'], 
    img: new URL('../utils/images/gems-car.png', import.meta.url).href,
    link: 'https://gemscar.mfu.ac.th/'
  },
  { 
    title: 'Mfii Digital Service Team Project ', 
    desc: 'ระบบจัดการทรัพย์สินทางปัญญาของมหาลัย พัฒนาโดยใช้ Vue + Node.js + MongoDB', 
    tags: ['Vue', 'Node.js', 'MongoDB'], 
    img: new URL('../utils/images/mfii-mfu.png', import.meta.url).href,
    link: 'https://ip-mfii.mfu.ac.th/'
  },
]

const projects_personal = [
    { 
    title: 'Accounting Webapp With LineOA', 
    desc: 'ระบบบันทึกรายรับรายจ่ายโดยใช้ line ในการบันทึกข้อมูลพร้อมหน้าเว็บแสดงผล พัฒนาโดยใช้ Vue + Node.js + lineWebhook + MongoDB', 
    tags: ['Vue', 'Node.js', 'lineWebhook', 'MongoDB'], 
    img: new URL('../utils/images/accounting-webapp.png', import.meta.url).href,
    link: 'https://sundayandbam-keepi-webapp.vercel.app/login'
  },
  { 
    title: 'Liar Game', 
    desc: 'เกมที่ผู้เล่นต้องการที่จะโกงผู้เล่นอื่นๆ แต่ถ้าถูกจับก็จะต้องโดนส่งออกจากเกม เกมนี้ได้แรงบันดาลใจจากเกมที่มีอยู่แล้วแต่ผมปรับเปลี่ยนเพื่อไว้เอาไว้เล่นกับเพื่อนๆ', 
    tags: ['Vue.js', 'Node.js', 'Socket.io'], 
    img: new URL('../utils/images/liar-game.png', import.meta.url).href,
    link: 'https://liar-game-chi.vercel.app/'
  },
  { 
    title: 'Market Stock System', 
    desc: 'ระบบจัดการสต็อกสินค้า พัฒนาโดยใช้ React + Node.js + MongoDB', 
    tags: ['React', 'Node.js', 'MongoDB'], 
    img: new URL('../utils/images/market-stock-system.png', import.meta.url).href,
    link: ''
  },
  { 
    title: 'Cookie Market LandingPage', 
    desc: 'Landing Page สำหรับเว็บขายคุกกี้ (ยังไม่เสร็จ)', 
    tags: ['React', 'Node.js', 'MongoDB'], 
    img: new URL('../utils/images/cookie-market-landing-page.png', import.meta.url).href,
    link: ''
  },
]
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold mb-8">ผลงาน</h2>
    <h3 class="text-xl font-semibold mb-2">ผลงานที่ทำตอนเรียนมหาลัย (ทำเป็นทีม)</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard 
        v-for="(p, i) in projects_mfu" 
        :key="p.title"
        :project="p" 
        :index="i" 
      />
    </div>

    <!-- ทำขีดเส้นยาวคั่น -->
    <div class="w-full h-px bg-slate-400 my-8"></div>
    
    <h3 class="text-xl font-semibold mb-2 mt-8">ผลงานทั่วไป</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="(p, i) in projects_personal"
        :key="p.title"
        :project="p"
        :index="i"
      />
    </div>
  </div>
</template>
