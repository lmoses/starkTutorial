// $(document).ready(function(){
// 	loadPage();
//     });
// function loadPage(url){
//     if (url == undefined){
// 	$('#container').load('index.html #header ul', hijackLinks);
//     }else{
// 	$('#container').load(url + ' #content', hijackLinks);
//     }
// }
// function hijackLinks(){
//     $('container a').click(function(e){
// 	    e.preventDefault();
// 	    loadPage(e.target.href);
// 	});
// }

$(document).ready(function(){ 
	loadPage();
    });
function loadPage(url) {
    $('body').append('<div id="progress">Loading...</div>');
    scrollTo(0,0);
    if (url == undefined) {
	$('#container').load('index.html #header ul', hijackLinks);
    } else {
	$('#container').load(url + ' #content', hijackLinks);
    }
}
function hijackLinks() {
    $('#container a').click(function(e){
	    var url = e.target.href;
	    //	    if (url.match(/lmoses.com/)){
		e.preventDefault();
		loadPage(url);
		//	    }
	});
    var title = $('h2').html() || 'Hello!';
    $('h1').html(title);
    $('h2').remove();
    $('#progress').remove();
}


// if (window.innerWidth && window.innerWidth <= 480) {
//     $(document).ready(function(){ 
//         $('#header ul').addClass('hide'); 
//         $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
//     }); 
//     function toggleMenu() {
//         $('#header ul').toggleClass('hide'); 
//         $('#header .leftButton').toggleClass('pressed');
//     }
// }

