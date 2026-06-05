<template>
  <div class="result-table">


    <div class="card card-pad">
      <div class="card-head">
        <div class="card-head-two">
          <div class="card-title"><span class="ic"><img src="/icon/hot3.png" alt=""></span> ข่าวสาร & เลขเด็ด</div>
        </div>
        <div class="see-all">
          <span style="margin-right: 5px;">ดูทั้งหมด</span> <svg xmlns="http://www.w3.org/2000/svg" width="7"
            height="13" viewBox="0 0 7 13" fill="none">
            <path d="M0.75 0.750546L5.45003 6.0306L0.75 11.3105" stroke="#FFDE6E" stroke-width="1.5"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="tabs">
        <button v-for="tab in tabs" :key="tab" class="tab" :class="{ active: activeTab === tab }"
          @click="activeTab = tab">
          {{ tab }}
        </button>
      </div>
      <div class="news">
        <article v-for="item in displayNews" :key="item.id" class="news-item">
          <div class="news-thumb" :style="{
            backgroundImage: `url(${item.image})`
          }">
            <span class="news-cat" :style="{ background: item.categoryColor }">
              {{ item.category }}
            </span>
          </div>

          <div class="news-body">
            <div class="news-title">
              {{ item.title }}
            </div>

            <div class="news-meta">
              <div class="news-meta-left">
                <span class="m">
                  <img src="/icon/clock.svg" alt=""> {{ item.date }}
                </span>

                <span class="m">
                  <img src="/icon/Eye.png" alt=""> {{ item.views }}
                </span>
              </div>

              <div class="news-analyze">
                   <img src="/icon/aicrop.svg" alt="">   วิเคราะห์เลขจากข่าว
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref("ทั้งหมด");

const tabs = [
  "ทั้งหมด",
  "หวยรัฐบาล",
  "หวยลาว",
  "เลขเด็ด",
  "บทความ",
];

const newsList = [
  {
    id: 1,
    category: "หวยลาว",
    categoryColor: "#541F83",
    image: "/icon/Hightlight.png",
    title:
      'ส่อง "เลขเด็ด" พิธีบวงสรวงครบรอบ 105 ปีชาตกาล "หลวงพ่อพัฒน์" ลุ้นงวด 16/5/69',
    date: "30 พ.ค. 2569 12:00 น.",
    views: "9,999,999",
  },
  {
    id: 2,
    category: "เลขเด็ด",
    categoryColor: "#1F8324",
    image: "/icon/Hightlight.png",
    title:
      "เลขเด็ดเชียงใหม่มาแล้ว แม่ค้าหวยเผยเลขขายดี มีทั้งเลขงานพุ่มพวง เลขวันวิสาขบูชา",
    date: "29 พ.ค. 2569 12:00 น.",
    views: "1,245,678",
  },
  {
    id: 3,
    category: "หวยรัฐบาล",
    categoryColor: "#1F3983",
    image: "/icon/Hightlight.png",
    title:
      "สถิติหวยรัฐบาลย้อนหลัง 20 งวด เลขเด่นที่ออกซ้ำมากที่สุด",
    date: "28 พ.ค. 2569 08:30 น.",
    views: "856,321",
  },

];

const filteredNews = computed(() => {
  if (activeTab.value === "ทั้งหมด") {
    return newsList;
  }

  return newsList.filter(
    (item) => item.category === activeTab.value
  );
});
const displayNews = computed(() => {
  return filteredNews.value.slice(0, 3);
});
</script>
<style scoped lang="scss">
.result-table {

  border: 1px solid #3C4765;
  background: var(--bg-content, linear-gradient(293deg, #120E29 2.26%, #212D4B 109.49%));
  border-radius: 16px;
  padding: 20px;
  color: white;
  border: 1px solid rgba(59, 130, 246, 0.2);
  overflow: hidden;
}

.tabs {
  display: flex;
  gap: 4px;
  background: #0e0e20;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 14px
}

.tab {
  flex: 1;
  padding: 9px 0;
  border-radius: 9px;
  font-size: 1rem;
  color: var(--white);
  font-weight: 600;
  transition: .15s;
  background: no-repeat;
  border: none;
}

.tab.active {
  background: #F6AE1D;
  color: #1a1206;
  font-weight: 700
}

.news {
  border-radius: var(--spacing-8, 8px);
  border: 1px solid #3C4765;
  background: linear-gradient(293deg, #02062B 2.26%, #211F35 109.49%);
  padding: 1rem;
  height: 22.5625rem;
}

.news-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;

  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #3C4765;
}

.news-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.news-item {
  display: flex;
  gap: 16px;
  align-items: flex-start
}

.news-thumb {
  width: 8.5rem;
  height: 5.5rem;
  border-radius: 9px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line)
}

.news-cat {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 14px;
  padding: 4px 6px;
  border-radius: 5px;
  font-weight: 700;
  color: white;
}



.news-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  height: 88px;
  justify-content: space-between;
}

.news-title {
  font: var(--HeadCardPC);
  font-weight: 500;
  color: #e7e2f5;
  line-height: 1.4;
  margin-bottom: 6px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-meta {
  display: flex;
  align-items: flex-end;
  gap: .875rem;
  font: var(--TimeCardPC);
  color: var(--muted-2);
  justify-content: space-between;
}

.news-meta-left {
  display: flex;
  align-items: center;
  gap: 14px
}

.news-meta .m {
  display: flex;
  gap: 4px;
  align-items: flex-start;
}

.news-analyze {
  flex-shrink: 0;
  align-self: center;
  border-radius: 8px;
  background: #F6AE1D;
  color: var(--black);
  font-size: 1rem;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: .15s
}

.news-analyze:hover {
  background: rgba(241, 196, 85, .2)
}
</style>
