document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.querySelector(".fa-gear");
  const notificationsIcon = document.querySelector(".fa-bell");
  const messagesIcon = document.querySelector(".fa-comment");
  const existingIcon = document.querySelector(".fa-list");

  const userBox = document.querySelector(".user");
  const notificationsBox = document.querySelector(".Notifications");
  const messagesBox = document.querySelector(".Messages");
  const existingBox = document.querySelector(".existing");

  const allIcons = [userIcon, notificationsIcon, messagesIcon, existingIcon];
  const allBoxes = [userBox, notificationsBox, messagesBox, existingBox];

  // دالة لإظهار صندوق معين وإخفاء الباقي
  function showBox(icon, box) {
    allBoxes.forEach(b => {
      if (b !== box) b.style.display = "none";
    });

    // إعادة كل الأيقونات للونها الافتراضي
    allIcons.forEach(i => i.style.color = "#000");

    if (box.style.display === "block") {
      box.style.display = "none";
      icon.style.color = "#000"; // يرجع للون الطبيعي
    } else {
      box.style.display = "block";
      icon.style.color = "#318CE7"; // أزرق جميل ومتناسق مع التصميم
    }
  }

  // ربط الأحداث بالأيقونات
  userIcon.addEventListener("click", e => {
    e.stopPropagation();
    showBox(userIcon, userBox);
  });

  notificationsIcon.addEventListener("click", e => {
    e.stopPropagation();
    showBox(notificationsIcon, notificationsBox);
  });

  messagesIcon.addEventListener("click", e => {
    e.stopPropagation();
    showBox(messagesIcon, messagesBox);
  });

  existingIcon.addEventListener("click", e => {
    e.stopPropagation();
    showBox(existingIcon, existingBox);
  });

  // لما تضغط فاضي في الشاشة الكل يختفي + الألوان ترجع طبيعية
  document.addEventListener("click", () => {
    allBoxes.forEach(b => b.style.display = "none");
    allIcons.forEach(i => i.style.color = "#000");
  });

  // عشان متختفيش لما تدوس جواها
  allBoxes.forEach(b => {
    b.addEventListener("click", e => e.stopPropagation());
  });

  // ================================
  // الوضع الداكن مع الحفظ في localStorage
  // ================================

  const stoppedBtn = document.querySelector(".user p:nth-of-type(1)");
  const employmentBtn = document.querySelector(".user p:nth-of-type(2)");

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }

  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  stoppedBtn.addEventListener("click", () => {
    disableDarkMode();
  });

  employmentBtn.addEventListener("click", () => {
    enableDarkMode();
  });
});
