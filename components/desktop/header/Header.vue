<template>
  <div class="header-container">
    <div class="content">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>

      <div class="menu-icons">
        <div v-for="item in menuList" :key="item.id" class="menu-item" :class="{ active: route.path === item.link }"
          @click="goPage(item.link)">
          <img :src="item.icon" class="icon" />
          <span class="bottom-nav">{{ $t(item.name) }}</span>
        </div>
      </div>
      <div class="menu-button-container">
        <div class="lang-wrapper">
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
        </div>
        <img class="hamberger" src="/assets/svg/hamberger.svg" @click="navigateTo('/profile')" />
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
  background: var(--Green-Main-Green-500, #008F6C);
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  width: 100%;
  height: 5rem;
  padding: 0.625rem 0px;

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
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  padding: .6875rem 1rem;
  justify-content: center;
  color: white;
}

.menu-item.active {
  border-radius: .5rem;
  background: var(--Green-Green-700, #005C46);
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
  top: 40px;
  right: 0;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 8.125rem;
  z-index: 9999;
}

.lang-item {
  display: flex;
  gap: 8px;
  padding: 0px 0px;
  cursor: pointer;
  height: 2.5rem;
  width: 100%;
  align-items: center;
  padding-left: 10px;
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
  border-top-left-radius: .3125rem;
  border-top-right-radius: .3125rem;
  color: white;

}
</style>
