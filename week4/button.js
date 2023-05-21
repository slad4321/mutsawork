console.log("1")
const mode = document.getElementById("first");
console.log(mode);

mode.addEventListener("mouseover", function () {
    if (mode.innerText === "change") {
        mode.innerText = "changed!";
    } else {
        mode.innerText = "change";
    }
});

var greenBtn = document.getElementById("green");
var itemBox = document.getElementById("item");
var color = false;

green.addEventListener("click", changeColor);

console.log(color);

function changeColor() {
    console.log(color);
    console.log(item);
    if (color == false) {
        itemBox.style.backgroundColor = "green";
        color = true;
    } else {
        itemBox.style.backgroundColor = "white";
        color = false;
    }
}

// dom onkeydown -> 배열에 입력 값 추가 (검색 기능)
var content = document.getElementById("content");
var addBtn = document.getElementById("addBtn");
var addedText = document.getElementById("added-text");

console.log(content)
console.log(addedText)

var curItem;
var list = [];

content.addEventListener("keyup", (e) => addList(e));
function addList(e) {
    //   console.log(e);
    //   console.log(e.target.value);
    curItem = e.target.value;
}

addBtn.addEventListener("click", addText);
function addText() {
    // console.log(list);
    list.push(curItem);
    // console.log("list", list);
    content.value = "";
    // addedText.innerHTML = list;
    //  리스트로 출력
    let finalText = "";
    for (i = 0; i < list.length; i++) {
        console.log(i);
        finalText += `<li>${list[i]}</li>`;
    }

    console.log("final", finalText);
    addedText.innerHTML = finalText;
}
//   list.push(curItem);
//   curItem = "";
//   content.value = "";
//   addedText.innerHTML = list;

// const newbutton = document.getElementById("linkBtn");
// console.log(newbutton);

// const navigateToLogin = () => {
//     console.log(window.location);
//     window.location.href = "/week4/index.html";
//     console.log(newbutton);
// };

// newbutton.addEventListener("click", navigateToLogin);


const loginBtn = document.getElementById("linkBtn");

console.log(loginBtn);

const navigateToLogin = () => {
  console.log(window.location);
  window.location.href = "/week4/index.html";
};

loginBtn.addEventListener("click", navigateToLogin);
