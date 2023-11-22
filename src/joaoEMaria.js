
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
    if(num>=0){
        maria=num

    }else{
        maria=0
    }
}
function setJoao(num){
    if(num>=0){
        joao=num

    }else{
        joao=0
    }
}
function deMariaParaJoao(){
    joao=joao+maria;
    joao=0
}
function deMariaParaJoao(){
    maria=joao+maria;
    maria=0
}
export{getJoao,getMaria,setMaria,setJoao,deMariaParaJoao,deJoaoParaMaria};