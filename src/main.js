import{getMaria,getJoao} from './joaoEMARIA.js'
import { deJoaoParaMaria, setJoao, setMaria } from './joaoEMaria.js';

setMaria(4);
setJoao(-2);

let maria=getMaria();
let joao=getJoao();

deJoaoParaMaria();

 maria=getMaria();
 joao=getJoao();
console.log(maria,joao);
