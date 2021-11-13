// let user_hand = prompt('グー、チョキ、パー');
// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
//   alert('グー・チョキ・パーのどれか');
//   user_hand = prompt('今度はグー、チョキ、パー頼むよ！');
// }

// let js_hand = getJShand();

// let judge = winLose(user_hand,js_hand);

// if (user_hand != null){
// alert('選んだ手は' + user_hand + 'です' + 'javascriptは' + js_hand + 'です。結果は' + judge +'じゃ');
// }else{
//   alert("またね")
// }

// function getJShand(){
//   let js_hand_num = Math.floor(Math.random()*3);
//   let hand_name

//   if(js_hand_num == 0){
//     hand_name = "グー"
//   }else if(js_hand_num == 1){
//     hand_name = "チョキ"
//   }else if(js_hand_num == 2){
//     hand_name = "パー"
//   }
//   return hand_name;
// }


// function winLose(user,js){
//   let winLoseStr;

//   if(user == "グー"){
//    if(js == "グー"){
//      WinLoseStr == "あいこ";
//    } else if(js == "チョキ"){
//     winLoseStr = "勝ち";
//   } else if(js == "パー"){
//     winLoseStr = "負け";
//   }
// } else if(user == "チョキ"){
//   if(js == "グー"){
//     winLoseStr = "負け";
//   } else if(js == "チョキ"){
//     winLoseStr = "あいこ";
//   } else if(js == "パー"){
//     winLoseStr = "勝ち";
//   }
// } else if(user == "パー"){
//   if(js == "グー"){
//     winLoseStr = "勝ち";
//   } else if(js == "チョキ"){
//     winLoseStr = "負け";
//   } else if(js == "パー"){
//     winLoseStr = "あいこ";
//   }
// }

// return winLoseStr;
// }
 
// １章
// alert('Hello World')

// let a = "Hello World"
// alert(a);

// let int1 = 1;
// alert(int1);


// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんよりりんごが高い');
// }else if(orange == apple){
//   alert('同じ値段');
// }else{
//   alert('りんごが高い');
// }

// let max = 1000;
// let num = 100;
// let count = 0;

// while(num < max){
//   num = num*2;
//   count = count + 1;
// }
// alert('２をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i =　0;
// let num = 0;

// for(i; i < 11; i++){
//   num = num + i;
// }

// prompt('1から10まで足し算した結果は' + num + 'です');

// ３章
// let alertString = addString("WebCamp");

// alert(alertString);

function addString(StrA){
  let addStr = "Hello" + StrA;
  return addStr;
}

let a = prompt('何か入力');
alert(a);

//ジャンケンの手を入力　プロンプト欄
let user_hand = prompt('ぐー、チョキ、パー')

//judge(結果)に、ユーザーの出した手とJavaScriptのランダムの手を比べる関数を入れる
let judge = 

let js_hand_num = Math.floor(Math.random()*3);

if(js_hand_num == 0){
  js_hand = 'グー';
}else if(js_hand_num == 1){
  js_hand = 'チョキ';
}else(js_hand_num == 2){
  js_hand = 'パー';
}

return js_hand
alert(js_hand)
