<script>
export default {
  data() {
    return {
      showLineModal: false,
      lineImageLoaded: false,
    }
  },
  mounted() {
    // close modal on Escape
    this._onKeydown = (e) => {
      if (e.key === 'Escape' && this.showLineModal) this.closeLineModal()
    }
    window.addEventListener('keydown', this._onKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this._onKeydown)
  },
  methods: {
    openLineModal() {
      this.showLineModal = true
      // reset image loaded state; image will attempt to load
      this.lineImageLoaded = false
    },
    closeLineModal() {
      this.showLineModal = false
    },
    onLineImageLoad() {
      this.lineImageLoaded = true
    },
    onLineImageError() {
      this.lineImageLoaded = false
    }
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto">
  <h2 class="text-3xl font-semibold mb-4">ติดต่อ</h2>
  <p class="text-slate-700 mb-6 text-lg">พร้อมที่จะร่วมงานหรือพูดคุยเกี่ยวกับโปรเจกต์ใหม่ๆ</p>

    <div class="flex flex-wrap gap-4" v-motion :initial="{opacity:0, y:6}" :enter="{opacity:1, y:0}">
      <a
        class="flex items-center gap-4 px-6 py-4 rounded-lg bg-gradient-to-r from-accent-500 to-accent-400 text-white hover:from-accent-600 hover:to-accent-500 transition-shadow shadow-sm ring-1 ring-accent-200/30"
        href="mailto:jirateep.khamruang@gmail.com"
        aria-label="ส่งอีเมลถึง Jirateep"
        >
        <i class="fa-solid fa-envelope w-6 h-6"></i>
        <span>E-mail</span>
      </a>

      <a
        class="flex items-center gap-4 px-6 py-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-shadow bg-cream-50 text-slate-700"
        href="https://www.linkedin.com/in/jirateep-khamruang-319033383/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ไปที่ LinkedIn ของ Jirateep"
      >
        <i class="fa-brands fa-linkedin text-accent-500 w-6 h-6"></i>
        <span>LinkedIn</span>
      </a>
      <button
        class="flex items-center gap-4 px-6 py-4 rounded-lg bg-gradient-to-r from-accent-500 to-accent-400 text-white hover:from-accent-600 hover:to-accent-500 transition-shadow shadow-sm"
        type="button"
        @click="openLineModal"
        aria-label="ติดต่อผ่าน Line (เปิด QR)"
      >
        <i class="fa-brands fa-line w-6 h-6"></i>
        <span>Line</span>
      </button>

      <a
        class="flex items-center gap-4 px-6 py-4 rounded-lg border border-slate-200 bg-transparent text-slate-700 hover:border-slate-300"
        href="tel:+66810825512"
        aria-label="โทรหา Jirateep"
      >
        <i class="fa-solid fa-phone w-6 h-6"></i>
        <span>Tel: +66 81 082 5512</span>
      </a>
    </div>

  <p class="text-lg text-slate-500 mt-5">หรือส่งข้อความมาทางอีเมลหรือไลน์ — จะตอบกลับโดยเร็วที่สุด</p>
  </div>

  <!-- LINE QR Modal -->
  <div v-if="showLineModal" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="closeLineModal" aria-hidden="true"></div>
    <div class="relative bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full mx-4 z-10">
      <button @click="closeLineModal" class="absolute top-3 right-3 text-slate-600 dark:text-slate-200 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">เพิ่มเพื่อนใน LINE</h3>
      <p class="text-sm text-slate-500 dark:text-slate-300 mt-2">สแกน QR code ด้านล่างเพื่อติดต่อ</p>

      <div class="mt-4 flex justify-center">
        <!-- try to load image if user places it at src/utils/images/line-qr.png -->
        <img
          src="../utils/images/line-qr.jpg"
          alt="LINE QR"
          class="w-56 h-56 object-cover rounded"
          @load="onLineImageLoad"
          @error="onLineImageError"
        />

        <!-- placeholder shown while image missing or not loaded -->
        <div v-if="!lineImageLoaded" class="w-56 h-56 bg-cream-50 dark:bg-slate-700 flex items-center justify-center rounded">
          <!-- simple SVG placeholder -->
          <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="120" height="120" fill="#f3efe6" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b7280" font-size="12">LINE QR</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
