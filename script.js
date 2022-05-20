const departments = document.querySelector('.dep')
const clubs = document.querySelector('.clubs')
const listclubs = document.querySelector('.listclubs')
const listdep = document.querySelector('.listdep')
departments.addEventListener('click',()=>{
    listdep.classList.toggle('show')
    console.log('hell');
})

clubs.addEventListener('click',()=>{
    listclubs.classList.toggle('show')
    console.log('hell');
})