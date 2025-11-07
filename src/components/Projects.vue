<script setup lang="ts">
const projects = [
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
  { 
    title: 'Accounting Webapp With LineOA', 
    desc: 'ระบบบันทึกรายรับรายจ่ายโดยใช้ line ในการบันทึกข้อมูลพร้อมหน้าเว็บแสดงผล พัฒนาโดยใช้ Vue + Node.js + lineWebhook + MongoDB', 
    tags: ['Vue', 'Node.js', 'lineWebhook', 'MongoDB'], 
    img: new URL('../utils/images/accounting-webapp.png', import.meta.url).href,
    link: 'https://sundayandbam-keepi-webapp.vercel.app/login'
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
    desc: 'Landing Page สำหรับเว็บขายคุกกี้ พัฒนาโดยใช้ (ยังไม่เสร็จ)', 
    tags: ['React', 'Node.js', 'MongoDB'], 
    img: new URL('../utils/images/cookie-market-landing-page.png', import.meta.url).href,
    link: ''
  },
]
const open = (event: Event, url: string) => {
  // Try to open if URL provided
  if (url) {
    window.open(url, '_blank')
  }

  // Remove focus from the card so group-focus:opacity-100 no longer applies
  try {
    const el = event && (event.currentTarget as HTMLElement | null)
    if (el && typeof el.blur === 'function') el.blur()
    // As a fallback, blur active element
    else if (document.activeElement && typeof (document.activeElement as HTMLElement).blur === 'function') (document.activeElement as HTMLElement).blur()
  } catch (e) {
    // swallow errors silently - not critical
  }
}
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold mb-8">ผลงาน</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <article
    v-for="(p, i) in projects"
    :key="p.title"
  class="group relative overflow-hidden rounded-xl border border-slate-200 p-6 bg-cream-100 hover:bg-cream-200 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        v-motion
        :initial="{opacity:0, y:16}"
        :enter="{opacity:1, y:0, transition: { delay: i * 0.05 }}"
        @click="open($event, p.link)"
        @keydown.enter="open($event, p.link)"
        tabindex="0"
        role="link"
        :aria-label="`Open ${p.title}`"
      >
        <img :src="p.img" :alt="p.title" class="w-full h-48 object-cover rounded-md mb-4" />
        <h3 class="text-xl font-semibold mb-2">{{ p.title }}</h3>
        <p class="text-slate-600 mb-3">{{ p.desc }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="t in p.tags" :key="t" class="text-sm px-3 py-1 rounded-md bg-accent-500/10 text-accent-500 border border-accent-500/10">{{ t }}</span>
        </div>
        <!-- Hover / focus overlay to indicate clickable card -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100 pointer-events-none">
          <!-- text container: has contrasting background in both light and dark modes -->
          <div class="px-4 py-2 rounded-md shadow-md bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 text-sm font-medium">
            <div v-if="p.link">
              <span>กดเพื่อดูเว็บไซต์</span>
            </div>
            <div v-else>
              <span>เว็บไซต์ไม่พร้อมใช้งาน</span>
            </div>
          </div>
        </div>
          
      </article>
    </div>
  </div>
</template>
