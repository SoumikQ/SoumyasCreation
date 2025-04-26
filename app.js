let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;

// Haburger manye 
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
  if (window.innerWidth > 768) { // Only scroll on large screens
      let thumbnailActive = document.querySelector('.thumbnail .item.active');
      let rect = thumbnailActive.getBoundingClientRect();

      if (rect.left < 0 || rect.right > window.innerWidth) {
          thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
      }
  }
}


// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
      itemActive = index;
      showSlider();
  })
})

function scrollToSection(pack) {
  const target = document.getElementById('pack');
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
function scrollToSection1(about) {
    const target = document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToSection2(contact) {
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }