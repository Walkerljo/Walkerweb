
	
/* Make sure pageList array is in the global scope.
Or you can pass it as the second parameter.
Depending on where that array is stored.
Set next to true if it's next, set it to false if it's prev.
 */
var pageList = ["DesmosAct1.html", "PreAlgebra.html", "02.html"];


function getUrl(next) { //next = true or false
    current = window.location;
    index = (next) ? 1 : -1;
    for(i = 0;i < pageList.length;i++) {
        if(current.toString().indexOf(pageList[i]) > -1) {
            return (pageList[i + index]);
        }
    }
}

var nextUrl = getUrl(true);
var prevUrl = getUrl(false);