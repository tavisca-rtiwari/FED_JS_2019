var list = [];
function set(element){
  HideAll(element);
  document.getElementById(element.name).style.display="block";
}
function HideAll(){
  var a=document.getElementsByClassName("articleinfo");
  for(var i=0;i<a.length;i++){
    a[i].style.display="none";;
  }
}
function setValue(ele) {
  var input , set,li,ul,input;
  input = document.getElementById("dropdown");
  var ul = document.getElementById("dropdown-content");
  set  = input.value;
  li = document.createElement('li');
  li.id = "texts";
  let datalist = document.getElementById("suggest");
  let option = document.createElement("option");
  option.value = set;
  datalist.appendChild(option);
  var textnode = document.createElement("span");
  textnode.innerText = set;
  var edit = document.createElement("button");
  edit.innerText = "edit";
  edit.id="edit";
  edit.onclick = editText;
  var del = document.createElement("button");
  del.innerText = "X";
  del.id="del";
  del.onclick = deleteText;
  li.appendChild(textnode);
  ul.appendChild(li);
  li.appendChild(del);
  li.appendChild(edit);
  list.push(set);

}
function displayTask(element){
  var input, filter, ul, li, a, i, txtValue,add;
    input = document.getElementById("dropdown");
    filter = input.value.toUpperCase();
    ul = document.getElementById("dropdown-content");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < list.length; i++) {
        txtValue = list[i];
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }

}

var input = document.getElementById("dropdown");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});


function editText() {
  var input = document.getElementById("dropdown");
  var li = this.parentNode.parentNode;
  var spanText = li.getElementsByTagName("span")[0].innerText;
  input.value = spanText;
  deleteEditText(this);
}

function deleteText() {
  var li = this.parentNode;
  var ul = li.parentNode;
  ul.removeChild(li);
  // li.style.display = "none";
}
function deleteEditText(elem) {
  var li = elem.parentNode;
  var ul = li.parentNode;
  ul.removeChild(li);
  // li.style.display = "none";
}
