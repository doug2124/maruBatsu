let a = document.querySelectorAll('.itens-vermelhos');

console.log(a[0].style.color);
console.log(a);
for(i=0;i<6;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
    a[i].style.color = 'red';
}
console.log(a[5].style.color);