// create a close button and append it to each list item
var listItems = document.getElementsByTagName("li")
var i;
for(i=0; i<listItems.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(text);
    listItems[i].appendChild(span);
}

// click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for(i=0; i<close.length; i++) {
    close[i].onclick=function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add a "checked" symbol whhen clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') ev.target.classList.toggle('checked');
}, false);

// create a new list item when clicking the add button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("tdyi-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert("Surely you have SOMETHING that needs doing!")
    } else {
        document.getElementById("tdyi-list").appendChild(li);
    }
    document.getElementById("tdyi-input").value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(text);
    li.appendChild(span);

    for(i=0; i<close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}