<template>
  <div class="home-content">
    <div class="home-box">
      <div class="text-toplotto">
        <span>
          <NuxtLink to="/" class="link">หน้าแรก</NuxtLink>
        </span> /
        <span>ข่าวหวยทั้งหมด</span>
      </div>
      <div class="top-bar">
        <div class="menu-wrapper">
          <div class="menu-tab">
            <div v-for="menu in menuList" :key="menu.id"
              :class="['tab-item', activeMenu === menu.value ? 'active' : '']" @click="changeMenu(menu.value)">
              {{ menu.name }}
            </div>
          </div>
        </div>

        <div class="date-btn" @click="openDate">📅</div>

        <input ref="dateInput" type="date" v-model="selectedDate" @change="changeDate" class="date-input" />
      </div>
      <div class="home-item">
        <NuxtLink v-for="imgcard in filteredData" :key="imgcard.id" :to="`/detailsnew/${imgcard.id}`" class="news-link">
          <ImageCard :obj="imgcard" :loading="loading" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ImageCard from "~/components/desktop/ImageCard.vue";

const activeMenu = ref("all");
const selectedDate = ref("");

const menuList = [
  { id: 1, name: "ข่าวทั้งหมด", value: "all" },
  { id: 2, name: "ข่าวล่าสุด", value: "latest" },
  { id: 3, name: "เลขเด็ด", value: "lucky" },
  { id: 4, name: "ข่าวหวย", value: "lotto" }
];
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 1200)
const imgcardData = ref([
  {
    id: 1,
    category: "lotto",
    date: "2024-09-21",
    imgSrc: "https://picsum.photos/350/180?random=1",
    subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
    taxt: "ข่าวหวย"
  },
  {
    id: 2,
    category: "lucky",
    date: "2024-09-20",
    imgSrc: "https://picsum.photos/350/180?random=9",
    subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
    taxt: "ข่าวหวย"
  },
  {
    id: 3,
    category: "latest",
    date: "2024-09-21",
    imgSrc: "https://picsum.photos/350/180?random=2",
    subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
    taxt: "ดูดวง"
  },
  {
    id: 4,
    category: "lucky",
    date: "2024-09-20",
    imgSrc: "https://picsum.photos/350/180?random=3",
    subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
    taxt: "ข่าวหวย"
  }
]);

const changeMenu = (menu) => {
  activeMenu.value = menu;
};

const filteredData = computed(() => {
  let data = imgcardData.value;

  if (activeMenu.value !== "all") {
    data = data.filter((item) => item.category === activeMenu.value);
  }

  if (selectedDate.value) {
    data = data.filter((item) => item.date === selectedDate.value);
  }

  return data;
});
</script>

<style scoped lang="scss">
.text-toplotto {
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 0.5rem;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.active {
  font-weight: bold;
  border-bottom: 0.125rem solid #000;
}

.date-filter input {
  height: 2rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  padding: 0 0.5rem;
}

.button {
  min-width: 14.438rem;
  height: 3rem;
}

.home-content {
  display: flex;
  justify-content: center;
}

.home-box {
  max-width: 650px;
  width: 100%;
  padding: 0.5rem;
}

.home-item {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;
  margin: 0.5rem 0px;
}

.d-flex {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.menu-wrapper {
  width: 84%;
  overflow-x: auto;
  border-radius: 9999px;
}

.menu-wrapper::-webkit-scrollbar {
  display: none;
}

.menu-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.menu-tab {
  display: flex;
  gap: 8px;
  min-width: -moz-max-content;
  min-width: max-content;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  padding: 4px;
}

.tab-item {
  padding: 0.5rem;
  border-radius: 1.25rem;
  background: #e0e0e0;
  cursor: pointer;
  white-space: nowrap;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
}

.tab-item.active {
  background: #4b4b4b;
  color: white;
  border: none;
}

.date-btn {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 31.25rem;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.4375rem;
}

.date-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
