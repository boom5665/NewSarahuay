<template>
  <div class="lucky-news-card">
    <div class="card card-pad">
      <div class="card-head">
        <div class="card-head-two">
          <div class="card-title"><span class="ic"><img src="/icon/hot6.png" alt=""></span> เลขเด่นวันนี้</div>
          <span class="card-sub">อัพเดตล่าสุด {{ highlightNumbers.updatedAt }}</span>
        </div>
        <div class="see-all">
          <span style="margin-right: .3125rem;">ดูทั้งหมด</span> <svg xmlns="http://www.w3.org/2000/svg" width="7"
            height="13" viewBox="0 0 7 13" fill="none">
            <path d="M0.75 0.750546L5.45003 6.0306L0.75 11.3105" stroke="#FFDE6E" stroke-width="1.5"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="hl-row">
        <div class="hl-box lead">
          <div class="hl-label">
            <span><img src="/icon/star.png" alt=""></span>
            เลขเด่น
          </div>

          <div class="hl-num">
            {{ highlightNumbers.lead.join(" ") }}
          </div>
        </div>

        <div class="hl-box hot">
          <div class="hl-label">
            <span><img src="/icon/fire.png" alt=""></span>
            เลขมาแรง
          </div>

          <div class="hl-num">
            {{ highlightNumbers.hot.join(" ") }}
          </div>
        </div>
      </div>
      <div class="hl-second">
        <div class="hl-label">เลขรอง</div>

        <div class="nums">
          <span v-for="num in highlightNumbers.secondary" :key="num">
            {{ num }}
          </span>
        </div>
      </div>
      <div class="src-row">
        <button v-for="source in sources" :key="source.id" class="src">
          <span class="si">
            <img :src="source.icon" :alt="source.title">
          </span>

          {{ source.title }}
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
const highlightNumbers = ref({
  updatedAt: "10:30 น.",
  lead: ["29", "78", "96"],
  hot: ["91", "17", "78"],
  secondary: ["04", "55", "16", "45", "43", "23"],
});

const sources = ref([
  {
    id: 1,
    icon: "/icon/fi1.png",
    title: "จากสถิติ",
  },
  {
    id: 2,
    icon: "/icon/fi3.png",
    title: "จากข่าว",
  },
  {
    id: 3,
    icon: "/icon/fi2.png",
    title: "จากโหเซียน",
  },
  {
    id: 4,
    icon: "/icon/fi4.png",
    title: "จากความฝัน",
  },
]);

const newsList = ref([
  {
    id: 1,
    number: "89",
    title: "เลขเด็ดแม่น้ำหนึ่ง",
    desc: "เลขดังงวดนี้มาแรง",
  },
  {
    id: 2,
    number: "24",
    title: "เลขปฏิทินจีน",
    desc: "เลขเด็ดจากสายมู",
  },
  {
    id: 3,
    number: "55",
    title: "เลขฝันแม่น",
    desc: "รวมเลขจากความฝัน",
  },
]);
</script>

<style scoped lang="scss">
.lucky-news-card {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: .0625rem solid #31304C;
  background: linear-gradient(180deg, #211F35 0%, #02062B 100%);
  color: white;
}

.hl-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem
}

.hl-box {
  border-radius: var(--radius-sm);
  padding: .5rem .5rem;
  text-align: center;
  border: .0625rem solid var(--line)
}

.hl-box.lead {
  border-radius: .3125rem;
  border: .0625rem solid #3D382D;
  background: linear-gradient(270deg, #1C1525 0%, #312A24 50%, #1C1525 100%);
}

.hl-box.hot {
  border-radius: .3125rem;
  border: .0625rem solid #2E4632;
  background: #1D2E28;
}

.hl-label {
  font-size: 1rem;
  color: #80FFF0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: .4375rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.hl-num {
  font-family: var(--head);
  font-weight: 800;
  font-size: 1.1875rem;

  white-space: nowrap
}

.lead .hl-num {
  color: var(--gold);

  border-radius: .25rem;
  background: #473A2A;
  padding: .5rem;
  font-size: 1rem;
}

.hot .hl-num {
  color: var(--green);
  border-radius: .25rem;
  background: #265243;
  padding: .5rem;
  font-size: 1rem;
}

.hl-second {
  margin-top: 0.5rem;
  border-radius: .5rem;
  border: .0625rem solid #1A3445;
  background: #092524;
  padding: .5rem;
}

.hl-second .hl-label {
  margin-bottom: .5625rem
}

.hl-second .nums {
  display: flex;
  background: #253F51;
  padding: .5rem;
  border-radius: .3125rem;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--head);
  font-weight: 700;
  font-size: 1rem;
  color: #bfeede
}

.src-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5rem;
  margin-top: .875rem;
  background: linear-gradient(111deg, #212D4B -0.96%, #120E29 126.93%);

  border-radius: .3125rem;
}

.src {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .375rem;
  padding: .5rem 0rem;
  font-size: 0.75rem;
  color: var(--white);
  transition: .15s;
  background: transparent;
  border: none;
}

.src:hover {
  color: var(--text);
  border-color: var(--line-strong)
}

.src .si {
  width: 1.625rem;
  height: 1.625rem;
  display: grid;
  place-items: center;

  color: var(--gold);

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>