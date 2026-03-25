<template>
  <div class="home-content">
    <div class="home-box">
      <div class="layout">
        <!-- ซ้าย -->
        <div class="menu-left">
          <Menuburger v-model="menu" v-model:darkMode="darkMode" />
        </div>

        <!-- ขวา -->
        <div class="content-right">
          <div v-if="menu === 'account'"><Menuprofile /></div>

          <div v-if="menu === 'security'"><Menusecurity /></div>

          <div v-if="menu === 'notify'"><Menunotify /></div>

          <div v-if="menu === 'activity'"><Menuevent /></div>
          <div v-if="menu === 'ai-stock'"><Menuai /></div>
          <div v-if="menu === 'package'"><Menunpake /></div>
          <div v-if="menu === 'ai-history'"><Menuhistoryai /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menuburger from "~/components/desktop/Menuburger.vue";
import Menuprofile from "~/components/desktop/Menuprofile.vue";
import Menusecurity from "~/components/desktop/Menusecurity.vue";
import Menunotify from "~/components/desktop/Menunotify.vue";
import Menuevent from "~/components/desktop/Menuevent.vue";
import Menuhistoryai from "~/components/desktop/Menuhistoryai.vue";
import Menuai from "~/components/desktop/Menuai.vue";
import Menunpake from "~/components/desktop/Menunpake.vue";
const menu = ref("account");
const darkMode = ref(false);
</script>

<style scoped lang="scss">
.home-content {
  display: flex;
  justify-content: center;
}

.home-box {
  max-width: 1080px;
  width: 100%;
}

/* layout */

.layout {
  display: grid;
  grid-template-columns: 18.75rem 1fr;
  gap: 1rem;
  align-items: start;
  padding-top: 1rem;
}
</style>
