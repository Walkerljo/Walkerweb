
	
/* Make sure pageList array is in the global scope.
Or you can pass it as the second parameter.
Depending on where that array is stored.
Set next to true if it's next, set it to false if it's prev.
 */
var tutorial_1= [
                    "DesmosAct1.html",
                    "DesmosAct2.html",
                    "LinearEquationsQuiz.html",
                    "02.html"
                 ];

function getUrl(next) { //next = true or false
    current = window.location;
    index = (next) ? 1 : -1;
    for(i = 0;i < tutorial_1.length;i++) {
        if(current.toString().indexOf(tutorial_1[i]) > -1) {
            return (tutorial_1[i + index]);
        }
    }
}

var nextUrl = getUrl(true);
var prevUrl = getUrl(false);
var next = function(){
    window.location=getUrl(true);
}
var back = function(){
    window.location=getUrl(false);
}