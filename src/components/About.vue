<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-3xl font-semibold mb-4">เกี่ยวกับผม</h2>
      <p class="text-slate-700 leading-8" v-motion :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0 }">
        มีประสบการณ์ในการพัฒนาเว็บด้วย Html, CSS, JavaScript, Vue.js, Node.js, C# แบบพื้นฐาน รวมถึงการใช้งานฐานข้อมูล
        MongoDB ในโครงการต่างๆ และสกิลในการใช้ AI ที่เน้นการสร้างระบบที่มีประสิทธิภาพและใช้งานง่าย
        นอกจากนี้ยังมีความสนใจในการเรียนรู้เทคโนโลยีใหม่ๆ อย่างต่อเนื่อง เพื่อพัฒนาทักษะและความรู้
        และมุ่งมั่นที่จะสร้างผลงานที่มีคุณภาพสูงเพื่อให้ตอบสนองความต้องการของผู้ใช้งานได้อย่างดีที่สุด
      </p>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-2">MBTI</h3>
      <p class="text-slate-700 leading-8" v-motion :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0 }">
        INTJ
      </p>
      <div>
        <p>
          ด้วยบุคลิกแบบ INTJ ผมเป็นคนที่วางแผนอย่างมีระบบ ชอบวิเคราะห์ปัญหาเชิงลึก
          และมุ่งเน้นการสร้างผลงานที่มีประสิทธิภาพสูง โดยเฉพาะในสายงานพัฒนาเว็บไซต์
          ผมมีแนวคิดแบบนักวางกลยุทธ์ที่ชอบเรียนรู้เทคโนโลยีใหม่ๆ
          และนำมาปรับใช้เพื่อพัฒนาระบบให้ตอบโจทย์ผู้ใช้งานได้ดีที่สุด
        </p>

        <p class="mt-4">
          สิ่งที่บุคลิก INTJ เสริมให้กับงานพัฒนาเว็บ:
        </p>
        <div class="mt-1">
          <p>
            ✅ วางโครงสร้างโปรเจกต์อย่างมีตรรกะและยืดหยุ่น
          </p>
          <p>
            ✅ มองเห็นภาพรวมของระบบและเชื่อมโยงเทคโนโลยีได้อย่างแม่นยำ
          </p>
          <p>
            ✅ ทำงานอิสระได้ดี พร้อมเสนอแนวทางใหม่เพื่อเพิ่มประสิทธิภาพ
          </p>
          <p>
            ✅ มีเป้าหมายชัดเจนและพัฒนาตนเองอย่างต่อเนื่อง
          </p>
          <p>
            ✅ ชอบสร้างระบบที่ใช้งานง่ายและมีคุณภาพสูง
          </p>
        </div>

      </div>
      <!-- images inline: stack on small screens, side-by-side on md+ -->
      <div class="mt-4 flex flex-wrap items-start gap-4">
          <img src="../utils/images/mbti-intj.jpg" alt="รูป MBTI"
            class="rounded-md shadow-lg object-cover h-44 w-44 md:h-56 md:w-56 flex-shrink-0" />
          <img src="../utils/images/intj-in-movie.jpg" alt="รูป MBTI-2"
            class="rounded-md shadow-lg object-cover h-44 w-44 md:h-56 md:w-56 flex-shrink-0" />
      </div>
    </div>
  </div>
</template>
