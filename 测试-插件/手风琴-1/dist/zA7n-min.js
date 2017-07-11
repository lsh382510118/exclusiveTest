/*!
 * zA7n, v1.0, MIT License
 * bryzgalovd@gmail.com
 */
!function(n,t){"use strict";function i(i,c){function s(){e=i.width(),u=e/o,a.css({width:u+"px"})}var e,o,u,a=n("li",i);o=a.length,a.each(function(){var t,i=n(this);t=i.width(),i.on({mouseover:function(n){a.css({width:(e-t)/(o-1)+"px"}),i.css({width:t+"px"})},mouseout:function(n){a.css({width:u+"px"})}})}),s(),n(t).on("resize",function(){s()}.debounce(150))}n.fn.zA7n=function(t){var c=n.extend({},t);return this.each(function(){var t=n(this);t.data("zAc6n")||(i(t,c),t.data("zAc6n",1).addClass("_create"))})}}(jQuery,this);