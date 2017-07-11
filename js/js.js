$(function(){
	$('.del').click(function(){
		$('.ttt:last-child').remove();
	});
	$('.add').click(function(){
		var html = '<div class="ttt"></div>';
		$('body').append(html);
		var h=$('body').height();
		hh();
	})
	
	
    $('[hover-slideout]').each(function(){
        $(this).hover(function(e){
        	$(this).find('[smelly-cat]').css(induction_position($(this), e)).stop(true, true).animate({"left":0, "top":0}, 200);
        },function(e){
        	$(this).find('[smelly-cat]').stop(true, true).animate(induction_position($(this), e), 200);
        });
    });

    //鼠标进入方向
    function induction_position(elem, e){
    	var w = elem.width(), h = elem.height(), direction=0, obj={};
    	/** 计算x和y得到一个角到elem的中心，得到相对于x和y值到div的中心 **/
    	var x = (e.pageX - elem.offset().left - (w / 2)) * (w > h ? (h / w) : 1);
    	var y = ((e.pageY - elem.offset().top - (h / 2)) * (h > w ? (w / h) : 1))*(-1);
        //console.info('原始元素距离左边：'+elem.offset().left+',鼠标x值：'+e.pageX+', x='+x +', y='+y);

    	/** 鼠标从哪里来 / 角度 和 方向出去顺时针（得出的结果是TRBL 0 1 2 3） **/
    	/**
    	   * 首先计算点的角度，
    	   * 再加上180度摆脱负值
    	   * 90初,一得到的象限（象限，又称象限角，意思就是一个圆之四分之一等份）
    	   * 加上3，做一个模（求模 求余数）4的象限转移到一个适当的顺时针 得出 TRBL 0 1 2 3（上/右/下/左）
    	   */
		
		console.info(x,y);
    	direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        //console.info('(x='+x+',y='+y+'):'+(Math.atan2(y, x) * (180 / Math.PI)));
        //console.info((Math.atan2(y, x) * (180 / Math.PI) + 180));
		console.info(direction);
    	switch(direction)
    	{
            case 0://from bottom
                obj.left = 0;
                obj.top = "100%";
                break;
            case 1://from right
                obj.left = "100%";
                obj.top = 0;
                break;
    		case 2://from top
    			obj.left = 0;
    			obj.top = "-100%";
    			break;
    		case 3://from left
    			obj.left = "-100%";
    			obj.top = 0;
    			break;
    	}
    	return obj;
    }
});
//判断浏览器是否有滚动条
function hasScroll() {
    var scrollVar = {
        scrollX: false,
        scrollY: false
    };
    //纵向
    if (document.documentElement.clientHeight < document.documentElement.scrollHeight) {
        scrollVar.scrollY = true;
    }
    //横向
    if (document.documentElement.clientWidth < document.documentElement.offsetWidth) {
        scrollVar.scrollX = true;
    }
    return scrollVar;
}
//尾部重新定位
function relocFooter() {
    if (typeof hasScroll === "function" && hasScroll().scrollY) {
        $(".bottom").removeClass("bottom-pos");
    } else {
        $(".bottom").addClass("bottom-pos");
    }
}

$(function () {
    relocFooter();
    window.onresize = function () {
        relocFooter();
    };
});
var hh = function(){
	var bh =$('body').height();
	$('#if').height(bh);
	console.info('bh:' + bh);
}

