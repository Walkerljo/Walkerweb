var myImage = document.getElementById('portrait');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.png') {
      myImage.setAttribute ('src','images/me_gaudi2.jpg');
    } else {
      myImage.setAttribute ('src','images/me.png');
    }
}
