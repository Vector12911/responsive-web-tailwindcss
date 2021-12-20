const burger = document.querySelector('#burger');
const list = document.querySelector('#list-items');

// responsive header

burger.addEventListener('click', () => {
    if (list.classList.contains("top-0")) {
        list.classList.remove("top-0");
        list.classList.add("top-12");
    }
    else {
        list.classList.remove("top-12");
        list.classList.add("top-0");
    }
    list.classList.toggle("-translate-y-full");
})

//   responsive side bar

const drawLeftBtn = document.querySelector(".draw-left");
const asideBar = document.querySelector("#left-bar");

drawLeftBtn.addEventListener('click', () => {
    console.log("anjali love you")
    asideBar.classList.toggle("-translate-x-full")
})

// change theme

const themeBtn = document.querySelector("#theme");
const header = document.querySelector("#header");

themeBtn.addEventListener('click', () => {
    if (themeBtn.classList.contains('light')) {
        themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>`
        themeBtn.classList.remove("light");
        themeBtn.classList.add("dark");
        header.classList.remove("bg-white");
        header.classList.add("bg-gray-800");
    }
    else{
        themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`
        themeBtn.classList.remove("dark");
        themeBtn.classList.add("light");
        header.classList.remove("bg-gray-800");
        header.classList.add("bg-white");
    }

})




