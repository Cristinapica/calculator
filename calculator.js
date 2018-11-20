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



exports.ecuatie2 = function ecuatie2(n) {

    operations = operations.sort(function(a, b){return b.priority - a.priority}); //??
        var index_break_s = n.indexOf("(")
        var index_break_e = n.indexOf(")")
        if (index_break_s > -1) {
            return ecuatie2(n.substring((index_break_s + 1), index_break_e))
        }


    for (i=0; i<operations.length; i++) {
        var index = n.indexOf( operations[i].stringval )  //The indexOf() method returns the position of the first occurrence of a specified value in a string
        if (index > -1) {
            var left = n.substring(0, index)  //This method extracts the characters in a string between "start" and "end", not including "end" itself.
            var right = n.substring(index + 1, n.length)
            return operations[i].operation(ecuatie2(left), ecuatie2(right))
        }
    }
    return parseInt(n) //parses a string and returns an integer
}


exports.multiply = multiply
exports.divide = divide
exports.add = add
exports.substract = substract









