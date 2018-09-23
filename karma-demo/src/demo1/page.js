function addClass(classNameStr,newClass){   
    if(typeof(classNameStr) === 'string'){
        var classNameData = classNameStr.split(' ');
        if(classNameData.length>0){
            if(classNameData.indexOf('sliderBlue') === -1 && classNameData.indexOf('slider')>-1){
                return classNameStr +' '+ newClass;
            }else{
                return classNameStr
            }
        }
    }
}


function changeColor(el){
    var elClassName = el.className,
        addClassStr = this.addClass(elClassName,'sliderBlue');
    el.className = addClassStr;
    // el.style.background = 'blue'
}
 

module.exports = addClass;


