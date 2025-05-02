let リスト = document.createElement('ul');

for(i=0;i<5;i++){
    
    let アイテム = document.createElement('li');

    let テキスト = document.createTextNode("テキスト"+i);
    アイテム.appendChild(テキスト);
    リスト.appendChild(アイテム);
    
}

let コンテンツ=document.getElementById("メインコンテンツ");

コンテンツ.append(リスト);