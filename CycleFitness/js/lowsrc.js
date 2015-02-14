/**
* Laod large image at last.
* requires jQuery
* @author: takien
*/
jQuery(document).ready(function($){
$('img').each(function(){
  	var hires = $(this).data().src;
		if((hires != undefined) && (hires != '')){
			$(this).attr('src',hires);
		}
});
});