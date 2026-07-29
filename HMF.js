//------------------ toggle_nav --------------
 var menu_list = document.getElementById("menu_list")
    menu_list.style.maxHeight = "0px";
    function togglemenu() {
        if (menu_list.style.maxHeight == "0px") {
            menu_list.style.maxHeight = "100%"
        } else {
            menu_list.style.maxHeight = "0"
        }
    }







// -------img_gallery/mySlides----------------

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500);    
}