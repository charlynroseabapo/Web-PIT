
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

//TAB HEADER FUNCTION
function todo(todotask,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(todotask).style.display = "block";
    elmnt.style.backgroundColor = color;
  
  }
  document.getElementById("defaultOpen").click();

//TO ADD LIST OF TASK
  function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
      alert ("Please input something!");
    }else{
      document.getElementById("myList").appendChild(li);
    }
      document.getElementById("myInput").value="";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className="close";
      span.appendChild(txt);
      li.appendChild(span);

      for(i = 0; i<close.length; i++){
        close [i].onclick = function(){
          var div = this.parentElement;
          div.style.display="none";
        }
      }
      var list = document.querySelector('ol');
      list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('myList');
        }
      }, false);
      
  }