export default defineNuxtPlugin((nuxtApp) => {
const magic = () => {
  let fontSize = 100;

  if (window.innerWidth <= 1024) {
    const windowWidth = Math.min(window.innerWidth, 650);

    fontSize = (windowWidth / 375) * 100;

    nuxtApp.$mainStore.setResultLayout("mobile");
  } else {
    fontSize = (window.innerWidth / 1620) * 100;

    if (fontSize > 100) {
      fontSize = 100;
    }

    nuxtApp.$mainStore.setResultLayout("desktop");
  }

  document.documentElement.style.fontSize =
    Math.round(fontSize) + "%";
};

  const getIcon = (icon, path) => {
    let imageSrc = '';
    try {
      let images;
        if (path == 'svg') images = import.meta.glob('@/assets/svg/*.svg', { eager: true });
        else if (path == 'flags') images = import.meta.glob('@/assets/flags/*.svg', { eager: true });
        else images = import.meta.glob('@/assets/icons/*.svg', { eager: true });
        const imagePath = `/assets/${icon}`;
        if (images[imagePath]) {
          imageSrc = images[imagePath].default
        } else {
          console.error(`Image not found: ${icon}`)
        }
      } catch (e) {
        console.error(`Error loading image: ${icon}`, e)
      }
      return imageSrc;
  };

  const alertModalToggle = (status, title, desc) => {
    console.log(status, title, desc);
    
    nuxtApp.$alertStore.setAlertStatus(status);
    nuxtApp.$alertStore.setAlertTitle(title);
    nuxtApp.$alertStore.setAlertDesc(desc);
    setTimeout(() => {
      nuxtApp.$alertStore.setAlertShow(true);
    }, 1)
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    // ตรวจสอบว่า date เป็นค่าที่ถูกต้องหรือไม่
    if (isNaN(date)) {
      throw new Error("Invalid Date Format");
    }
    
    const options = {
      year: 'numeric',
      month: 'short', // เดือนแบบย่อ (เช่น "ธ.ค.")
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // ใช้เวลา 24 ชั่วโมง
    };
    return new Intl.DateTimeFormat('th-TH', options).format(date) + ' น.';
  };

  // ตั้งค่า Cookie
  const setCookie = (cName, value) => {
    const Cookie = useCookie(cName); // ชื่อ Cookie
    Cookie.value = value; // กำหนดค่า Cookie
    Cookie.options = {
      maxAge: 60 * 60 * 24, // อายุ Cookie 1 วัน
      path: '/', // ระบุ path
    };
  };
  // อ่านค่า Cookie
  const getCookie = (cName) => {
    return useCookie(cName);
  };
  // ลบ Cookie
  const removeCookie = (cName) => {
    const userCookie = useCookie(cName);
    userCookie.value = null; // ตั้งค่าเป็น null เพื่อลบ
  };
  
  return {
    provide: {
      magic,
      getIcon,
      alertModalToggle,
      formatDateTime,
      setCookie,
      getCookie,
      removeCookie,
    }
  }
});
