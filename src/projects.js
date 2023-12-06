'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (e) => {
  const filter =
    e.target.dataset.filter || e.target.parentElement.dataset.filter;
  if (filter == null) return;
  const target = e.target.dataset.filter ? e.target : e.target.parentElement;
  handleActiveSelection(target);
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    filterProjects(filter);
    projectsContainer.classList.remove('anim-out');
  }, 150);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
