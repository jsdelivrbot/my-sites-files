(function(){
$(function(){
var fix = $('#side-ad'), //�Œ肵�����R���e���c
side = $('#sidebar-1'), //�T�C�h�o�[��ID
main = $('body'), //�Œ肷��v�f�����߂�͈�
sideTop = side.offset().top;
fixTop = fix.offset().top,
mainTop = main.offset().top,
w = $(window);
var adjust = function(){
fixTop = fix.css('position') === 'static' ? sideTop + fix.position().top : fixTop;
var fixHeight = fix.outerHeight(true),
mainHeight = main.outerHeight(),
winTop = w.scrollTop();
if(winTop + fixHeight > mainTop + mainHeight){
fix.css({
position: 'absolute',
top: mainHeight - fixHeight
});
}else if(winTop >= fixTop){
fix.css({
position: 'fixed',
top: 0
});
}else{
fix.css('position', 'static');
}
}
w.on('scroll', adjust);
});
})(jQuery);