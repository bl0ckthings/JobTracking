const openBtn = document.querySelector('.Sidebar-figure-burger-img');
const menuArea = document.querySelector('.Sidebar-menuArea');

openBtn.addEventListener('click', (e) =>  {
menuArea.classList.toggle('open');
if (menuArea.classList.contains('open')) {
    openBtn.style.transform = 'rotate(180deg)';
} else {
    openBtn.style.transform = 'rotate(0deg)';
}
e.preventDefault();
})
