<template>
  <div class="header-container">
    <div class="content">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>

      <div class="menu-icons">
        <div
          v-for="item in menuList"
          :key="item.id"
          class="menu-item"
          @click="goPage(item.link)"
        >
          <img :src="item.icon" class="icon" />
          <span class="bottom-nav">{{ item.name }}</span>
        </div>
        <!-- <div>
          <button @click="locale = 'en'">EN</button>
          <button @click="locale = 'th'">TH</button>
        </div> -->
      </div>

      <div class="menu-button-container">
        <img
          class="hamberger"
          src="/assets/svg/hamberger.svg"
          @click="navigateTo('/profile')"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showMenu = ref(false);

const logo = "https://dummyimage.com/120x40/000/fff&text=LOGO";

const menuList = ref([
  {
    id: 1,
    name: "หน้าแรก",
    icon: "https://dummyimage.com/30x30/ff0000/fff&text=H",
    link: "/"
  },
  {
    id: 2,
    name: "ข่าวหวย",
    icon: "https://dummyimage.com/30x30/0099ff/fff&text=N",
    link: "/lotto"
  },
  {
    id: 3,
    name: "ผลรางวัล",
    icon: "https://dummyimage.com/30x30/22cc88/fff&text=P",
    link: "/reward"
  },
  {
    id: 4,
    name: "วิเคราะห์ AI",
    icon: "https://dummyimage.com/30x30/ffaa00/fff&text=A",
    link: "/aigen"
  },
  {
    id: 5,
    name: "สายมู",
    icon: "https://dummyimage.com/30x30/ffaa00/fff&text=A",
    link: "/supers"
  }
]);

const goPage = (link) => {
  router.push(link);
};


const { t, locale } = useI18n();

</script>

<style scoped>
.header-container {
  background: cadetblue;
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  width: 100%;
  padding: 0.625rem 0px;
}
.logo img {
  width: 8.75rem;
  height: 3.75rem;
}

.menu-icons {
  display: flex;
  gap: 1rem;
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.hamberger {
  width: 2.5rem;
  cursor: pointer;
}

/* .bottom-nav{
  font: var(--Note);
} */
</style>
