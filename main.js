function image1(){
    document.getElementById('picture').style.background = "url('./changes/remove1.png') center center / cover";
}
function image2(){
    document.getElementById('picture').style.background = "url('./changes/remove3.png') center center / cover";
}
function image3(){
    document.getElementById('picture').style.background = "url('./changes/remove4.png') center center / cover";
}
function image4(){
    document.getElementById('picture').style.background = "url('./changes/remove2.png') center center / cover";
}


function toggleNavbar() {
    var navbarList = document.getElementById("navbarList");
    if (navbarList.style.display === "block") {
      navbarList.style.display = "none";
    } else {
      navbarList.style.display = "block";
    }
  }
  