let a = document.querySelector('#メインタイトル');

console.log("altura:" + a.offsetWidth);
console.log("largura:" + a.offsetHeight);

console.log("altura:" + a.clientWidth);
console.log("largura:" + a.clientHeight);

console.log(a.getBoundingClientRect());