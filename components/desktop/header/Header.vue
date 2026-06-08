<template>
  <div class="header-container">
    <div class="content">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>

      <div class="menu-icons">
        <div v-for="item in menuList" :key="item.id" class="menu-item" :class="{ active: route.path === item.link }"
          @click="goPage(item.link)">
          <!-- <img :src="item.icon" class="icon" /> -->
          <span class="bottom-nav">{{ $t(item.name) }}</span>
        </div>
      </div>
      <div class="menu-button-container">
        <div class="search-box">
          <input type="text" placeholder="ค้นหาข่าว หวย ดูดวง..." class="search-input" />

          <img src="/icon/srch.png" alt="" class="search-icon">
        </div>

        <div class="chat-with-ai">
          <img src="/icon/botcaht.svg" alt=""> <span></span>คุยกับ AI
        </div>
        <!-- <div class="lang-wrapper">
          <div class="lang" @click="showLang = !showLang" v-if="currentLang">
            <img :src="currentLang.icon" alt="lang" class="lang-img" />
          </div>

          <div v-if="showLang" class="lang-dropdown">
            <div class="cheng">
              เลือกภาษา
            </div>
            <div v-for="lang in languages" :key="lang.code" class="lang-item"
              :class="{ active: lang.code === (locale || '').split('-')[0] }" @click="changeLang(lang.code)">
              <img :src="lang.icon" />
              <span>{{ lang.label }}</span>
            </div>
          </div>
        </div> -->
        <!-- <img class="hamberger" src="/assets/svg/hamberger.svg" @click="navigateTo('/profile')" /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();

const showLang = ref(false);
const logo = "/Logo.png";

const languages = [
  { code: "en", label: "English", icon: "/language/en.svg" },
  { code: "th", label: "ไทย", icon: "/language/th.svg" },
  { code: "cn", label: "中國", icon: "/language/cn.svg" },
  { code: "km", label: "ខ្មែร", icon: "/language/km.svg" },
];

const currentLang = computed(() => {
  const code = (locale.value || "en").split("-")[0];
  return languages.find(l => l.code === code) || languages[0];
});

const menuList = ref([
  { id: 1, name: "Home", icon: "/icon/home.svg", link: "/" },
  { id: 2, name: "Lottery", icon: "/icon/newspaper.svg", link: "/lotto" },
  { id: 3, name: "Result", icon: "/icon/sresh.svg", link: "/reward" },
  { id: 4, name: "AIanalysis", icon: "/icon/analyse.svg", link: "/aigen" },
  { id: 5, name: "Saimu", icon: "/icon/magic-ball.svg", link: "/supers" }
]);

const goPage = (link) => {
  router.push(link);
};

const changeLang = (code) => {
  locale.value = code;
  showLang.value = false;
};

const handleClickOutside = (e) => {
  if (!(e.target instanceof Element)) return;
  if (!e.target.closest(".lang-wrapper")) {
    showLang.value = false;
  }
};

onMounted(() => {
  const savedLang = localStorage.getItem("lang");
  locale.value = savedLang || "th";

  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

watch(locale, (val) => {
  localStorage.setItem("lang", val);
});
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 101.25rem; // 1620px
  width: 100%;
  height: 5rem;
  padding: 0.625rem 0;
}

.logo img {
  width: 10.625rem;
  height: 3rem;
}

.menu-icons {
  display: flex;
  gap: 1rem;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4063rem 1rem;
  color: #737373;
}

.menu-item.active {
  color: #C00;
}

.menu-item.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 1rem; /* เท่ากับ padding ซ้าย */
  right: 1rem; /* เท่ากับ padding ขวา */
  height: 0.125rem;
  background: #C00;
  border-radius: 999rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.hamberger {
  width: 2.5rem;
  cursor: pointer;
}

.lang-wrapper {
  position: relative;
}

.lang-dropdown {
  position: absolute;
  top: 2.5rem; // 40px
  right: 0;
  background: white;
  border-radius: 0.5rem; // 8px
  display: flex;
  flex-direction: column;
  width: 8.125rem; // 130px
  z-index: 9999;
}

.lang-item {
  display: flex;
  gap: 0.5rem; // 8px
  cursor: pointer;
  height: 2.5rem; // 40px
  width: 100%;
  align-items: center;
  padding-left: 0.625rem; // 10px
  color: white;
  background: #114606;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.lang-item.active {
  background: #0b2d03;
  font-weight: 600;
}

.lang-item:hover {
  background: #124b06;
}

.lang-img {
  width: 1.5rem;
  height: 1.5rem;
}

.cheng {
  text-align: center;
  padding: 0.625rem;
  background: #071f02;
  border-top-left-radius: 0.3125rem; // 5px
  border-top-right-radius: 0.3125rem; // 5px
  color: white;
}

.search-box {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  height: 2.5rem; // 40px
  padding: 0 3.125rem 0 1rem; // 50px 16px
  border-radius: 0.75rem; // 12px
  border: 0.09375rem solid #E3E3E3; // 1.5px
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 0.875rem;
}

.search-icon {
  position: absolute;
  right: 1rem; // 16px
  top: 50%;
  width: 1.25rem; // 20px
  height: 1.25rem; // 20px
  transform: translateY(-50%);
  pointer-events: none;
}

.chat-with-ai {
  display: flex;
  align-items: center;
  gap: 0.3125rem; // 5px
  padding: 0.5rem 1rem;
  border-radius: 0.5rem; // 8px
  background: #F6AE1D;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;

  img {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }
}
</style>
