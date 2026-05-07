<template>
  <div class="home-content">
    <div class="home-box">
      <div class="text-toplotto">ข่าวหวยทั้งหมด</div>

      <div class="top-bar">
        <div class="menu-tab">
          <div
            v-for="menu in menuList"
            :key="menu.id"
            :class="['tab-item', activeMenu === menu.value ? 'active' : '']"
            @click="changeMenu(menu.value)"
          >
            {{ menu.name }}
          </div>
        </div>

        <div class="date-filter">
          <input type="date" v-model="selectedDate" />
        </div>
      </div>

      <div class="home-item">
        <NuxtLink
          v-for="imgcard in filteredData"
          :key="imgcard.id"
          :to="`/detailsnew/${imgcard.id}`"
          class="news-link"
        >
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

const imgcardData = ref([
  {
    id: 1,
    category: "lotto",
    date: "2024-09-21",
    imgSrc: "https://picsum.photos/350/180?random=1",
    subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
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
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 1200)
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
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 1rem;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.menu-tab {
  display: flex;
  gap: 1rem;
  line-height: 1.4;
}

.tab-item {
  cursor: pointer;
  font-size: 0.875rem;
}

.active {
  // font-weight: bold;
  color: var(--primary-color-500);
  border-bottom: 0.125rem solid var(--primary-color-500);
  line-height: 1.4;
}

.date-filter input {
  height: 2rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  padding: 0 0.5rem;
}

.home-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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
  max-width: 1080px;
  width: 100%;
}
.home-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem 0px;
}
.d-flex {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

</style>
