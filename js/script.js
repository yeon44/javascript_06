const ex_01 = document.getElementById("fav");
ex_01.style.color = "hotpink";
ex_01.style.fontWeight = "bold";
console.log(ex_01);

const ex_02 = document.getElementsByClassName("baskin");
ex_02[2].style.color = "chocolate";
ex_02[2].style.fontWeight = "bold";
ex_02[2].style.fontSize = "24px";

const ex_03 = document.querySelectorAll("#test_03 img");
for (i = 0; i < ex_03.length; i++) {
  if (i == 1) {
    ex_03[i].style.border = "2px solid #ff0000";
  }

  ex_03[i].style.width = "160px";
}

const ex_04 = document.querySelector("#test_04 img");
ex_04.setAttribute("src", "./img/desney_all.jpg");
ex_04.setAttribute("alt", "디즈니 패밀리");
ex_04.style.width = "300px";

const ex_05 = document.querySelector("#test_05");
let ex_05arr = "";

let ex_05img = [
  ["kakao_01.gif", "피부관리"],
  ["kakao_02.gif", "첫눈"],
  ["kakao_03.gif", "피치의 봄날"],
  ["kakao_04.gif", "옛~썰"],
  ["kakao_05.gif", "네오의 삐침"],
];

for (i = 0; i < ex_05img.length; i++) {
  ex_05arr +=
    "<img src = './img/" + ex_05img[i][0] + "'alt = '" + ex_05img[i][1] + "'>";
}

ex_05.innerHTML = ex_05arr;

// var test1 = document.getElementById("fav");
// console.log(test1);
// test1.style.color = "hotpink";
// test1.style.fontWeight = "bold";

// var test2 = document.getElementsByClassName("baskin");
// console.log(test2);
// test2[2].style.color = "chocolate";
// test2[2].style.fontWeight = "bold";
// test2[2].style.fontSize = "24px";

// var test4 = document.querySelector("#test_04 img");
// console.log(test4);
// test4.setAttribute("src", "./img/desney_all.jpg");
// test4.setAttribute("alt", "디즈니 패밀리");
// test4.style.width = "300px";

// var test5 = document.querySelector("#test_05");
// var test5_img = "";  //하나씩 추가시킬 케이스 역할을 담당
// var test5_arr = [
//     ["kakao_01.gif", "피부관리"],   //0
//     ["kakao_02.gif", "첫눈"],       //1
//     ["kakao_03.gif", "피치의 봄날"],//2
//     ["kakao_04.gif", "옛~썰"],      //3
//     ["kakao_05.gif", "네오의 삐침"] //4
// ];

// for(i = 0; i < test5_arr.length; i++){
//     test5_img += "<img src='./img/" + test5_arr[i][0] +   "' alt='" + test5_arr[i][1] + "'>";
//     console.log(test5_img);
// }`

// test5.innerHTML = test5_img;
