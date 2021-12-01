

function openPlayer(evt,playerName) {
    var i, tabcontent, tabnav;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display="none";
    }
    tabnav = document.getElementsByClassName("tabnav");
    for (i = 0; i < tabnav.length; i++) {
      tabnav[i].className = tabnav[i].className.replace(" active", "");
    }
    document.getElementById(playerName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function myFunction() {
    var input, filter, ul, li, a,i,txtValue;
    input = document.getElementById("checkPlayer");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
  
