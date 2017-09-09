var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.png') {
      myImage.setAttribute ('src','images/me2.jpg');
    } else {
      myImage.setAttribute ('src','images/me.png');
    }
}
Save all files and load in