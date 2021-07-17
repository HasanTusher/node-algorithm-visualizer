

let validator = (name, age) =>  {
    if(name != null && age > 0)
        return true;
    else
        return false;
}
module.exports  = {validator: validator};
