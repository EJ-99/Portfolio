// 아래로 스크롤 시 Header에 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// 홈 섹션을 아래로 스크롤 시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = `${0.1 + (homeHeight - scrollY) / homeHeight}`;
});

// 아래로 스크롤시 Arrow up 버튼을 투명하게 처리
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  scrollY / homeHeight > 1 / 2
    ? arrowUp.classList.add('arrow-up--visible')
    : arrowUp.classList.remove('arrow-up--visible');
});

// header의 토글 버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('header__menu--open');
});

// navbar 메뉴 클릭 시 메뉴 닫음
navbarMenu.addEventListener('click', (e) => {
  if (e.target.tagName !== 'A') return;
  navbarMenu.classList.remove('header__menu--open');
});
