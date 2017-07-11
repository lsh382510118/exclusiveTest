var EventUtil = {
    addHandler:function(elm,type,handler){
        if (elm.addEventListener) {
            elm.addEventListener(type,handler,false)
        } else if(elm.attachEvent){
            elm.attactEvent('on' + type,handler,false)
        } else{
            elm['on' + type]=handler;
        }

    },
    removeHandler:function(elm,type,handler){
        if (elm.removeEventListener) {
            elm.removeEventListener(type,handler,false);
        } else if(elm.detackEvent){
            elm.detackEvent('on' + type,handler)
        } else{
            elm['on' + type] = null;
        }
    }
}