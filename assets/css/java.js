const elmBox = document.querySelector ("#box");
const elmMenu = document.querySelector ("#menu");

document.querySelector("#menu")
    .addEventListener ("click", function (){
        elmBox.classList.toggle ("show")
    });


// function toggle_visibility(#menu) {
//         var e = document.getElementById(#menu);
//         if(e.style.display == 'block')
//            e.style.display = 'none';
//         else
//            e.style.display = 'block';
//      }