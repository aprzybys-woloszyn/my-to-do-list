let myList = document.getElementsByTagName("LI");

for (let i = 0; i < myList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}


let listItems = document.querySelector('ul');
listItems.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let tn = document.createTextNode(inputValue);
  li.appendChild(tn);
  if (inputValue === '') {
    alert("Please add your task!");
  } else {
    document.getElementById("mylist").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}