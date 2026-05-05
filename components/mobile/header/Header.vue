<template>
  <div class="header-container">
    <div class="logo">
    </div>
    <div class="logo">
      <img :src="logo" alt="logo" />
    </div>


    <div class="menu-button-container">
      <img class="hamberger" src="/assets/svg/hamberger.svg" @click="toggleMenu" />
    </div>

    <!-- Overlay -->
    <div v-if="showMenu" class="menu-overlay" @click="toggleMenu"></div>

    <!-- Side Menu -->
    <div class="side-menu" :class="{ open: showMenu }">
      <div class="side-header">
        <span>MENU</span>
        <button @click="toggleMenu">✕</button>
      </div>

      <div v-for="item in menuList" :key="item.id" class="side-item" @click="goPage(item.link)">
        <img :src="item.icon" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showMenu = ref(false);

const logo = "/Logo.png";

const menuList = ref([
  // {
  //   id: 1,
  //   name: "หน้าแรก",
  //   icon: "https://dummyimage.com/30x30/ff0000/fff&text=H",
  //   link: "/"
  // },
  // {
  //   id: 2,
  //   name: "ข่าวหวย",
  //   icon: "https://dummyimage.com/30x30/0099ff/fff&text=N",
  //   link: "/lotto-news"
  // },
  // {
  //   id: 3,
  //   name: "โปรโมชั่น",
  //   icon: "https://dummyimage.com/30x30/22cc88/fff&text=P",
  //   link: "/promotion"
  // },
  // {
  //   id: 4,
  //   name: "บทความ",
  //   icon: "https://dummyimage.com/30x30/ffaa00/fff&text=A",
  //   link: "/article"
  // }
]);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const goPage = (link) => {
  console.log("go to:", link);
};
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem;
  background: cadetblue;
}

.logo img {
  height: 1.5rem;
}

.menu-icons {
  display: flex;
  gap: 0.5rem;
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.hamberger {
  width: 1.75rem;
  cursor: pointer;
}

/* overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 90;
}

/* side menu */
.side-menu {
  position: fixed;
  top: 0;
  right: -16.25rem;
  width: 16.25rem;
  height: 100%;
  background: white;
  box-shadow: -0.1875rem 0 0.625rem rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  z-index: 100;
  padding: 1.25rem;
}

/* when open */
.side-menu.open {
  right: 0;
}

.side-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  font-weight: bold;
}

.side-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 0;
  cursor: pointer;
}

.side-item img {
  width: 1.5rem;
}
</style>
