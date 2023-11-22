
let maria =2;
let joao=1;
{
    let joao=3;
}
function getMaria(){
    return maria;
}
function getJoao(){
    return joao;
}
function setMaria(num){
    maria=num
}
function setJoao(num){
    joao=num
}
function deJoaoParaMaria(){
    joao=joao+maria;
    maria=0
}
function deMariaParaJoao(){
    maria=joao+maria;
    joao=0
}
export{getJoao,getMaria,setMaria,setJoao,deMariaParaJoao,deJoaoParaMaria};