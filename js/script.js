const ex_01 = document.getElementById("fav");
ex_01.style.color = "hotpink";
ex_01.style.fontWeight = "bold";
console.log(ex_01);

const ex_02 = document.getElementsByClassName("baskin");
ex_02[2].style.color = "chocolate";
ex_02[2].style.fontWeight = "bold";
ex_02[2].style.fontSize = "24px";

const ex_03 = document.querySelectorAll(".query_selector img");
for (ex of ex_03) {
  ex.style.width = "160px";
}

ex_03[1].style.border = "2px solid #ff0000";

const ex_04 = document.querySelector("#test_04 img");
ex_04.setAttribute("src", "./img/desney_all.jpg");
ex_04.setAttribute("alt", "디즈니 패밀리");
ex_04.style.width = "300px";

const ex_05 = document.querySelector("#");
// let ex_05kakao = ex_05.innerHTML;
// let ex_05img = [
//   ["img/kakao_01.gif", "피부관리"][("img/kakao_02.gif", "첫눈")][
//     ("img/kakao_03.gif", "피치의 봄날")
//   ][("img/kakao_04.gif", "옛~썰")][("img/kakao_05.gif", "네오의 삐침")],
// ];
// ex_05.innerHTML.ex_05kakao;

// for (i = 0; i < ex_05img.length; i++){
//   document.write("<img src="img/${ex_05img}">");
// }

//5번을 잘 모르겠습니다..
