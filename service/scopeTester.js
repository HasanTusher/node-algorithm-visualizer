const axios = require('axios');

function fun(){
     var i = 0;

     function inner(){
         var j = 1;
         function innerMost(){
             return j;
         }
         return innerMost;
     }
     return inner;
}
var functionObj = fun(); // inner was not called, if it had then i would have been increased
console.log(functionObj()())
// console.dir(functionObj);
// console.log(i)
// console.log(i);
//module.exports = asdf
// var temp = asdf();
// temp('sdf', 20)
// asdf();
// console.log(name);


function fun2(){
    var name;
    var age;

    function constructor(n, a){
        name = n;
        age = a;
    }

    function getName(){
        return name;
    }

    function  getAge(){
        return age;
    }

    return {
        'constructor': constructor,
        'getName' : getName,
        'getAge' : getAge
    };

}

var fun2Obj = fun2();
fun2Obj.constructor('asdf', 20);
console.log(fun2Obj.getAge());
console.log(fun2Obj.getName());
let data2;
function funct() {
    let data;

    axios.get('https://gorest.co.in/public/v1/users')
        .then(function(res){
        data = res.data;
        //data2 = res.data;
        //console.log(data);
        console.log(data);
    }).catch((e) =>{
        //console.log(e);
    })
}

//funct();

// console.log('ayya');
// for(let i = 0; i> -100; i++){
//     if(i <=5){
//         funct()
//     }
//     if(i == 100)
//         break;
// }


(function closureQueue(){
    x = 0;
    console.log('yaya');
})()
//closureQueue();
console.log(x);

function func(){

    let x = 0;

    function inner(){


    }

    return inner;
}

let z = func();
console.log(z);
