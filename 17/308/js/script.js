// window.addEventListener("load",function(){
//     alert("ページが再ロードされました");
// });

window.addEventListener("beforeunload",function(e){
    this.event.returnValue=null;
})