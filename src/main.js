import{getMaria,getJoao} from './joaoEMARIA.js'
import { setJoao, setMaria } from './joaoEMaria.js';
let maria=getMaria();
let joao=getJoao();
setMaria(4);
setJoao(2);

console.log(maria,joao);
