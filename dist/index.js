const burger = document.querySelector('#burger');
const list = document.querySelector('#list-items');

burger.addEventListener('click',()=>{
    if(list.classList.contains("top-0")){
        list.classList.remove("top-0");
        list.classList.add("top-12");
    }
    else{
        list.classList.remove("top-12");
        list.classList.add("top-0");
    }
    list.classList.toggle("-translate-y-full");
})

const drawLeftBtn1 = document.querySelector(".draw-left1");
const asideBar1 = document.querySelector("#left-bar");
// console.log(drawLeftBtn);
// console.log(asideBar);
drawLeftBtn1.addEventListener('click',()=>{
    console.log("anjali love you")
    asideBar1.classList.toggle("-translate-x-full")
})
const drawLeftBtn2 = document.querySelector(".draw-left2");
const asideBar2 = document.querySelector("#left-bar");
// console.log(drawLeftBtn);
// console.log(asideBar);
drawLeftBtn2.addEventListener('click',()=>{
    console.log("anjali love you")
    asideBar2.classList.toggle("-translate-x-full")
})

// const toggle = document.querySelector("#toggle");
// const sqr = document.querySelector("#sqr");
// console.log(toggle);

// toggle.addEventListener('click',()=>{
//     sqr.classList.toggle("-translate-x-full")
// })


