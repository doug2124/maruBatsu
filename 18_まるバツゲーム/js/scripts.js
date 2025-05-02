let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes =document.querySelectorAll(".box");
let button = document.querySelectorAll("#buttons-container button");
let textMessage = document.querySelector("#message p");
let message = document.querySelector("#message");
let secondPlayer;
//誰のターンのカウンター
let player1 = 0;
let player2 = 0;


//ゲームモード
//2プレイヤー対戦
let button1=button[0].addEventListener("click",function(){
    hideButton();
    showBoard();
    for(let i=0;i<boxes.length;i++){ 

        boxes[i].addEventListener("click",function(){
        let el= checkPlayer(player1,player2);
        console.log(el);
        if(this.childNodes.length==0){
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            
            //プレイヤー切り替える
            if(player1== player2){
                player1++;
            }else{
                player2++;
            }
        }
            checkWin();
            //引き分け
            if(player1+player2==9){
                checkDraw();
                player1=0;
                player2=0;
            }
        });
}
});
//vsAI
let button2=button[1].addEventListener("click",function(){
    hideButton();
    showBoard();
    for(let i=0;i<boxes.length;i++){ 

        boxes[i].addEventListener("click",function(){
        let el= x;
            
        if(this.childNodes.length==0){//まるか抜毛履いている確認関数
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            checkWin();
            if(player1==4){
                checkDraw();
            }
            if(checkEmptySpace()==undefined){//引き分けの場合はAIがプレイしないように
                aiPlay();
            }
            //プレイヤーカウンター
            player1++;
            console.log(player1);
        }
        });
}  
});

function checkPlayer(player1,player2){//２プレイヤー対戦のみ
    if(player1==player2){
        //x
        el=x;
    }else{
        //o
        el=o;
    }
    return el;
}

function checkWin(){//勝利確認の関数
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //横
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
            if(b1Child =="x" && b2Child == "x" && b3Child =="x"){
                xWin();
            }else if(b1Child=='o'&&b2Child=='o'&&b3Child=='o'){
                oWin();
            }
    }if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
            if(b4Child =="x" && b5Child == "x" && b6Child =="x"){
                xWin();
            }else if(b4Child=='o'&&b5Child=='o'&&b6Child=='o'){
                oWin();
            }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
            if(b7Child =="x" && b8Child == "x" && b9Child =="x"){
                xWin();
            }else if(b7Child=='o'&& b8Child=='o'&& b9Child=='o'){
                oWin();
            }
    }
    //立て
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
            if(b7Child =="x" && b4Child == "x" && b1Child =="x"){
                xWin();
            }else if(b7Child=='o'&& b4Child=='o'&& b1Child=='o'){
                oWin();
            }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
            if(b2Child =="x" && b5Child == "x" && b8Child =="x"){
                xWin();
            }else if(b2Child=='o'&& b5Child=='o'&& b8Child=='o'){
                oWin();
            }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
            if(b3Child =="x" && b6Child == "x" && b9Child =="x"){
                xWin();
            }else if(b3Child=='o'&& b6Child=='o'&& b9Child=='o'){
                oWin();
            }
    }
    //斜め
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
            if(b1Child =="x" && b5Child == "x" && b9Child =="x"){
                xWin();
            }else if(b1Child=='o'&& b5Child=='o'&& b9Child=='o'){
                oWin();
            }
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
            if(b7Child =="x" && b5Child == "x" && b3Child =="x"){
                xWin();
            }else if(b7Child=='o'&& b5Child=='o'&& b3Child=='o'){
                oWin();
            }
    }
    
}
//ばつの勝ちだ
function xWin(){
    let text='ばつの勝ちだ';
    textMessage.innerHTML=text;
    message.classList.remove("hide");
    textMessage.classList.remove("hide");
    setTimeout(function(){
        clearBoard();
        message.classList.add("hide");
    },2000);
    let xScore =document.querySelector("#scorecounter-1");
    xScore.textContent= parseInt(xScore.textContent)+1;
    player1=0;
    player2=0;
}
//まるの勝ちだ
function oWin(){
    let text='まるの勝ちだ';
    textMessage.innerHTML=text;
    message.classList.remove("hide");
    textMessage.classList.remove("hide");
    setTimeout(function(){
        clearBoard();
        message.classList.add("hide");
    },2000);
    let oScore =document.querySelector("#scorecounter-2");
    oScore.textContent= parseInt(oScore.textContent)+1;
    player1=0;
    player2=0;
}
//引き分け
function checkDraw(){
    let counter=0;
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].childNodes[0]!=undefined){
            counter++;
        }
    }
    if(counter==9){
        let text='引き分け';
        textMessage.innerHTML=text;
        message.classList.remove("hide");
        textMessage.classList.remove("hide");
        setTimeout(function(){
            clearBoard();
            message.classList.add("hide");
        },2000);
    }
}

//ボードクリア
function clearBoard(){
    let b1 = document.getElementById("block-1").innerHTML = "";
    let b2 = document.getElementById("block-2").innerHTML = "";
    let b3 = document.getElementById("block-3").innerHTML = "";
    let b4 = document.getElementById("block-4").innerHTML = "";
    let b5 = document.getElementById("block-5").innerHTML = "";
    let b6 = document.getElementById("block-6").innerHTML = "";
    let b7 = document.getElementById("block-7").innerHTML = "";
    let b8 = document.getElementById("block-8").innerHTML = "";
    let b9 = document.getElementById("block-9").innerHTML = "";
}
//ボタンを隠す
function hideButton(){
    setTimeout(function(){
        document.getElementById("buttons-container").style.display="none";
    },400);
}
function showBoard(){//ボードを見せる
    setTimeout(function(){
        let container=document.querySelector("#container");
        container.classList.remove("hide");
        container.classList.add("show");
        let scoreContainer=document.querySelector("#scoreboard-container");
        scoreContainer.classList.remove("hide");
        scoreContainer.classList.add("show");
},500);}

function aiPlay(){
    let j = Math.floor(Math.random()*8)+1;
    if(boxes[j].childNodes.length==0){
        let ai=o;
        let cloneEl = ai.cloneNode(true);
            setTimeout(function(){
                boxes[j].appendChild(cloneEl);
                checkWin();
            },400);
    }else{
        return aiPlay();
    }

}
function checkEmptySpace(){//コンピューター対戦で空いてるところが無い時、コンピューターがプレイしない
    let counter=0;
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].childNodes[0]!=undefined){
            counter++;
        }
    }
    if(counter==9){
        return true;
    }
}