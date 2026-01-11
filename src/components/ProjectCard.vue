<script setup lang="ts">
// Define props
defineProps<{
  project: {
    title: string;
    desc: string;
    tags: string[];
    img: string;
    link: string;
  };
  index: number;
}>();

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
  <article
    class="group relative overflow-hidden rounded-xl border border-slate-200 p-6 bg-cream-100 hover:bg-cream-200 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    v-motion
    :initial="{opacity:0, y:16}"
    :enter="{opacity:1, y:0, transition: { delay: index * 0.05 }}"
    @click="open($event, project.link)"
    @keydown.enter="open($event, project.link)"
    tabindex="0"
    role="link"
    :aria-label="`Open ${project.title}`"
  >
    <img :src="project.img" :alt="project.title" class="w-full h-48 object-cover rounded-md mb-4" />
    <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
    <p class="text-slate-600 mb-3">{{ project.desc }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="t in project.tags" :key="t" class="text-sm px-3 py-1 rounded-md bg-accent-500/10 text-accent-500 border border-accent-500/10">{{ t }}</span>
    </div>

    <!-- Hover / focus overlay to indicate clickable card -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100 pointer-events-none">
      <!-- text container: has contrasting background in both light and dark modes -->
      <div class="px-4 py-2 rounded-md shadow-md bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 text-sm font-medium">
        <div v-if="project.link">
          <span>กดเพื่อดูเว็บไซต์</span>
        </div>
        <div v-else>
          <span>เว็บไซต์ไม่พร้อมใช้งาน</span>
        </div>
      </div>
    </div>
  </article>
</template>
