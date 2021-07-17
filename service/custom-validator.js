
let customValidator = function (){

    function inner(req, res, next){
        console.log('i was called');
        next()
    }

    return inner;
}

let custVal2 = function (){
    let i = 0;

    function inner(){
        return ++i;
    }
    return inner;
}


module.exports = {
    customValidator:customValidator,
    custVal2: custVal2
}
