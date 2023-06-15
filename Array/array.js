/*let n = [3,4,1,5,9]
let n2 
for (let i = 0;i<n.length;i++){
    n2=n[i]
    n[i]=n[n.length-1-i]
    n[n.length-1-i]=n2
}
console.log(n)
*/
/*let num=[3,6,1,7,9,4,2,8,3,8,2,1,6,23]
length = num.length;  
for (var i = 0; i < length; i++) {
      for (var j = 0; j < (length - i - 1); j++) {
               if(num[j] > num[j+1]) {
                       var aux = num[j]; 
            num[j] = num[j+1]; 
            num[j+1] = aux; 
        }
    }        
}
console.log(num)*/

var arr = [3,5,6,28,7,7,7,3,5,10,23,654,65,14,3,49,343]
var n = []
var aux = "não foi encontrado"
var test = 3
var test2 = 0


for (var i = 0; i < arr.length; i++) {
    if(arr[i]===test)
        n.push(i)
    else if(arr[i]===7){
        test2++
        aux = "foi encontrado " + test2 + " vezes"
    }    
}
if (n.length==0)
    console.log("O número " + test + " não foi encontrado" + n + ". O número 7 "+ aux)
else
    console.log("O número " + test + " está nas posições " + n + ". O número 7 "+ aux)