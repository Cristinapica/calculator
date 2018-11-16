var add = function add (x,y) {
    return x+y
}

var substract = function substract (x,y) {
    return x-y
}

var multiply = function multiply (x,y) {
    return x*y
}

var divide = function divide (x,y) {
    return x/y
}
exports.pow = function (x,y) {
    var result=1
    for (i=0; i<y; i++){
        result=result*x
    }
    return result

}

exports.factorial = function (n) {
    var result=1
   for (i=1; i<=n; i++){
       result=result*i

   }
   return result
}

exports.factorial_r = function factorial_r(n) {
    if (n===0){
        return 1
    }
    return factorial_r(n-1)*n
}

exports.fib = function fib(n) {
    if (n===0){
        return 1
    }
    if (n===1){
        return 1
    }
    return fib(n-1)+fib(n-2)
}

exports.ecuatie = function ecuatie(n) {

   var index = n.indexOf('+')
    if (index>-1){
        var left=n.substring(0,index)
        var right=n.substring(index+1,n.length)
        return ecuatie(left)+ecuatie(right)
    }
    index = n.indexOf('-')
    if (index>-1){
        var left=n.substring(0,index)
        var right=n.substring(index+1,n.length)
        return ecuatie(left)-ecuatie(right)
    }
    index = n.indexOf('*')
    if (index>-1){
        var left=n.substring(0,index)
        var right=n.substring(index+1,n.length)
        return ecuatie(left)*ecuatie(right)
    }
    index = n.indexOf('/')
    if (index>-1){
        var left=n.substring(0,index)
        var right=n.substring(index+1,n.length)
        return ecuatie(left)/ecuatie(right)
    }

    return parseInt(n)
}

var operations=[
    {stringval:"*", operation:multiply, priority: 2},
    {stringval:"/", operation:divide, priority: 2},
    {stringval:"+", operation:add, priority: 3},
    {stringval:"-", operation:substract, priority: 3}
]

exports.ecuatie1 = function ecuatie1(n) {

    for (i=0; i<operations.length; i++) {
        var index = n.indexOf( operations[i].stringval )
        if (index > -1) {
            var left = n.substring(0, index)
            var right = n.substring(index + 1, n.length)
            return operations[i].operation(ecuatie1(left), ecuatie1(right))
        }
    }
    return parseInt(n)
}

exports.multiply = multiply
exports.divide = divide
exports.add = add
exports.substract = substract









