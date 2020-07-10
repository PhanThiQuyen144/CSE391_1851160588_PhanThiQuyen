// alert(" xin chao cac ban");
//  Xac dinh cac phan tu se tac dong 

var fruit     = document.getElementById('txtFruit');
var showFruit = document.getElementById('btnShowFruit');
var imgFruit  = document.getElementById('imgFruit');
//  buoc 2: bat su kien
showFruit.addEventListener('click', showResult);
// buoc 3: viet ham xu ly su kien
function showResult(){
    var getFruit= fruit.value;
    // imgFruit.setAttribute("src","anh/"+ getFruit + ".jpg");
    imgFruit.setAttribute('src', 'images/'+ getFruit +'.jpg');
}