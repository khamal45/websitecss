const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const mountains_front = document.getElementById('mountains_front');
const header = document.getElementById('header');
window.addEventListener('scroll',function(){
const value1 = window.scrollY;
stars.style.left = value1 * 0.2 + 'px';
mountains_behind.style.top = value1 * 0.2 + 'px';
mountains_front.style.top = value1 *0 + 'px';
moon.style.top = value1*-0.2+ 'px';
text.style.marginLeft = value1 * 2 +'px';
btn.style.marginTop = value1 *1.2 + 'px';
text.style.marginTop = value1 *0.5 + 'px';
header.style.marginTop = value1 * 0.8 + 'px';


})