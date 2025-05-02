let input = document.querySelector("input");

input.addEventListener("focus",function(){
    console.log("入力できます");
});

input.addEventListener("blur",function(){
    console.log("入力できません");
});