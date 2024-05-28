import 'jquery/dist/jquery.min.js';
import $ from 'jquery';

var i=1;
$(function(){
	$('.img1').css('display','block');
	setInterval(function show(){
	$('.img'+i).hide(3000);
			
	i=i+1;
	if(i===4)
	{
		i=1;
	}
	$('.img'+i).fadeIn(4000);
			return show;
		},4000);	
});