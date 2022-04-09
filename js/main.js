const removeActiveClass = () => {
    let actives = document.querySelectorAll('.active');
    actives.forEach(item => {
        item.classList.remove('active');
    })
}

const addActiveClass = (title, ...boxes) =>{
    if (title.classList.contains('active')){
        removeActiveClass();
    }else{
        removeActiveClass();
        title.classList.add('active');
        boxes.forEach(item => item.classList.add('active'));
    }
}

window.addEventListener('click', ()=>{

    findAttribute(event);
})

const findAttribute = (event) => {
    let currentElement = event.target;
    if (currentElement.hasAttribute('active')){
        let block = currentElement.closest("div[box]");
        addActiveClass(block);
    }
}

let btn_menu = document.querySelector('#menu_btn');
let menu = document.querySelector('.menuList');
btn_menu.addEventListener('click', () => {
    addActiveClass(btn_menu, menu)
})

let btn_cart = document.querySelector('#cart_btn');
let cart = document.querySelector('.cartContainer');
btn_cart.addEventListener('click', () => {
    addActiveClass(btn_cart, cart)
})

let btn_search = document.querySelector('#search_btn');
let searchForm = document.querySelector('.searchForm');
btn_search.addEventListener('click', () => {
    addActiveClass(btn_search, searchForm)
})


window.onscroll = ()=>{
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 500){
       removeActiveClass();
    }
}



