$(document).ready(function () {
    // 切換 header-right 的寬度
    $(".mb-header__openbtn").click(function () {
      $(".header-right").toggle("width");
    });

    // 初始應用一次響應式 CSS
    applyResponsiveCSS();

    // 監測窗口大小變化
    $(window).on("resize", function () {
      applyResponsiveCSS();
    });

    // 添加點擊事件來顯示對應的 Banner
    document.getElementById("socialmedia").addEventListener("click", function () {
      showBanner("socialmedia-Banner");
    });

    document.getElementById("customdesign").addEventListener("click", function () {
      showBanner("order-Banner");
    });

    document.getElementById("hahababydesign").addEventListener("click", function () {
      showBanner("hahababy");
    });

    // 針對每個標籤元素添加點擊事件監聽器
    const labels = document.querySelectorAll('.label');
    labels.forEach(label => {
      label.addEventListener('click', function() {
        // 先將所有標籤移除選定樣式
        labels.forEach(l => l.classList.remove('selected'));
        // 將點擊的標籤添加選定樣式
        this.classList.add('selected');
      });
    });

    // 滾動監聽器
    window.onscroll = function() {scrollFunction()};
  });

  // 應用響應式 CSS
  function applyResponsiveCSS() {
    var screenWidth = $(window).width();
    if (screenWidth <= 768) {
      $(".header-right").css("display", "none");
    } else {
      $(".header-right").css("display", "flex");
    }
  }

  // 隱藏所有 Banner
  function hideAllBanners() {
    document.getElementById("socialmedia-Banner").style.display = "none";
    document.getElementById("order-Banner").style.display = "none";
    document.getElementById("hahababy").style.display = "none";
  }

  // 顯示指定的 Banner
  function showBanner(bannerId) {
    hideAllBanners();
    document.getElementById(bannerId).style.display = "flex";
  }

  // 滾動顯示返回頂部按鈕
// 滾動顯示返回頂部按鈕
function scrollFunction() {
    const goTopBtn = document.getElementsByClassName("goTopBtn")[0];
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  }
  
  // 返回頂部功能
  function goTopFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // 確保頁面加載後立即檢查滾動按鈕的顯示狀態
    scrollFunction();
  
    // 監聽滾動事件
    window.onscroll = function() {
      scrollFunction();
    };
  
    // 預設顯示 order-Banner
    showBanner("order-Banner");
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    // 預設顯示 order-Banner
    showBanner("order-Banner");
  });