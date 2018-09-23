function add(a,b){
    return a + b
}

function filter(task){
    var array = ['1','2','88','99','44'];
    var t = array.filter(function(value){
        return value === task
    })
    return t
}

module.exports = {
    add,
    filter
}