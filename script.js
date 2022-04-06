

var n = 1;


function AddRow() {

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var massage = document.getElementById("massage").value;




   if( name=="" ){
       document.getElementById('user').innerHTML="please fill the number"

   }
  
   else{

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    cel1.innerHTML = name;
    cel2.innerHTML = email;
    cel3.innerHTML = number;
    cel4.innerHTML = massage;

    n++;
    x++;
}
}

// image slider




    var slider_img = document.querySelector('.slider-img');
    var images = ['a.jpg', 'b.jpg', 'bg2.png', 'header-bg.png', 'i.jpg'];
    var i = 0;

    function prev() {
        if (i <= 0) i = images.length;
        i--;
        return setImg();
    }

    function next() {
        if (i >= images.length - 1) i = -1;
        i++;
        return setImg();
    }

    function setImg() {
        return slider_img.setAttribute('src', "images/" + images[i]);

    }

