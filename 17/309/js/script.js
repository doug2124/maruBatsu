let timeout;//変数を前に宣言しないといけない

window.addEventListener("mousemove",function(e){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log(e.x);
    }, 50);
});