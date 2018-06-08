/*
 * @Author: BlingBling 
 * @Date: 2018-06-01 18:55:46 
 * @Last Modified by: BlingBling
 * @Last Modified time: 2018-06-02 12:27:27
 * 原型链学习— --- DOM操作
 * 模拟jquery的选择器
 */

(function (window, undefined) {
    var Bquery = function (selecter) {
        return new Bquery.fn.init(selecter);
    }

    /**
     * 解析标签
     */
    Bquery.fn.prototype = {
        constructor:Bquery,
        init: (selecter, context) => {
            selecter = selecter || document;
            context = context || document;
            if (!selecter) {
                return this;
            } else if (typeof selecter === "string") {
                //id正则
                idSelectorRE = /^#([\w-]*)$/
                //class 正则
                classSelectorRE = /^\.([\w-]+)$/
                //DOM正则
                tagSelectorRE = /^[\w-]+$/
                var elem;
                if (selecter.match(idSelectorRE)) {
                    console.log("id选择器");
                    var id = selecter.slice(1, );
                    elem = document.getElementById(id);
                    return elem;
                }else if(selecter.match(classSelectorRE)){
                    console.log("class选择器");
                    var className = selecter.slice(1,);
                    elem = document.getElementsByClassName(className);
                    return elem;
                }else if(selecter.match(tagSelectorRE)){
                    console.log("DOM选择器");
                    elem = document.getElementsByTagName(selecter);
                    return elem;
                }
            } else if (selecter.nodeType) {
                // HANDLE: $(DOMElement)
                this.context = this[0] = selecter;
                this.length = 1;
                return this;
            }
        },
        length: 0,
        size: function(){
            return length;
        },
        bquery: "0.1.1"
    }

    Bquery.fn.init.prototype = Bquery.fn;
    window.Bquery = window.$ = Bquery

})(window);

