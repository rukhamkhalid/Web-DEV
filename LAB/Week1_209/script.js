let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.form-box');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');



var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}






window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});




searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

    formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src =src;

    });
});






var modal = document.getElementById('login-Form');
window.onclick=function (event)
{
    if(event.target == modal)
    {
        modal.style.display = "none";
    }
}