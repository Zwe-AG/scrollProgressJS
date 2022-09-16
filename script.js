let getProgressBar = document.getElementById("progress-bar");


window.onscroll = function(){scrollPoint()};
function scrollPoint(){
    // console.log("hi");
    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    var getcalheight =  getscrollheight - getclientheight ;

    var getfinal = Math.round(( getscrolltop * 100 ) / getcalheight) ;
    // console.log(getfinal);
    getProgressBar.style.width = `${getfinal}%`;
}

function printme(){
    window.print();
}