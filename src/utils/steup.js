import { tabelaDia, diatoMes,  tartarugaTHora, tartarugaRHora, tartarugaTDia, tartarugaRDia } from './tabela';

export const Ano = ( value ) => {
  let ano = 0;
  if( value > 1923 && value < 1984){
    ano = value - 1923;
  }
  if( value > 1983 && value < 2044){
    ano = value - 1983;
  }
  return ano;
}

export const Dia = (valueAno, valueMes, valueDia) => {
  let tronco = 0;
  let isBi = bissextoChines(valueAno);
  let tabela =  prepararTabela(valueAno);
  let resAno = tabela.find( y => y.ano === valueAno);
  let resMes = diatoMes(valueMes);
  tronco = resAno.valor + resMes + valueDia + (isBi ? 1 : 0)
  return tronco;
}

export const Mes = ( troncoAno, month ) => {
  let valor = [];
  let tronco = 0;
 
  switch(month){
    case 0:
      valor = [3, 15, 27, 39, 51];
      break;
    case 1:
      valor = [4, 16, 28, 40, 52];
      break;
    case 2:
      valor = [5, 17, 29, 41, 53]; 
      break;
    case 3:
      valor = [6, 18, 30, 42, 54]; 
      break;
    case 4:
      valor = [7, 19, 31, 43, 55];
      break;
    case 5:
      valor = [8, 20, 32, 44, 56];
      break;
    case 6:
      valor = [9, 21, 33, 45, 57]; 
      break;  
    case 7:
      valor = [10, 22, 34, 46, 58]; 
      break; 
    case 8:
      valor = [11, 23, 35, 47, 59]; 
      break;       
    case 9:
      valor = [12, 24, 36, 48, 60]; 
      break;
    case 10:
      valor = [13, 25, 37, 49, 1];
      break;
    case 11:
      valor = [14, 26, 38, 50, 2 ] ;
      break;
    default:
      console.log('Mes error');
      break;
  }

  switch(troncoAno){
    case 1:
    case 6:
      tronco = valor[0];
      break;
    case 2:
    case 7:  
      tronco = valor[1]; 
      break;
    case 3:
    case 8:
      tronco = valor[2];  
      break;
    case 4:
    case 9:
      tronco = valor[3];  
      break;
    case 5:
    case 0:
      tronco = valor[4];  
      break;
    default:
      console.log('Mes error');
      break;
  }
  return tronco;
}

export const Hora = (troncoDia, hours) => {
  let valor = [];
  let tronco = 0;
  switch(hours){
    case 0:
    case 23:  
      valor = [1, 13, 25, 37, 49];
      break;
    case 1:
    case 2:
      valor = [2, 14, 26, 38, 50];
      break;
    case 3:
    case 4:
      valor = [3, 15, 27, 29, 51]; 
      break;
    case 5:
    case 6:
      valor = [4, 16, 28, 40, 52]; 
      break;
    case 7:
    case 8:
      valor = [5, 17, 29, 41, 53];
      break;
    case 9:
    case 10:
      valor = [6, 18, 30, 42, 54];
      break;
    case 11:
    case 12:
      valor = [7, 19, 31, 43, 55]; 
      break;  
    case 13:
    case 14:
      valor = [8, 20, 32, 44, 56]; 
      break; 
    case 15:
    case 16:
      valor = [9, 21, 33, 45, 57]; 
      break;       
    case 17:
    case 18:
      valor = [10, 22, 34, 46, 58]; 
      break;
    case 19:
    case 20:
      valor = [11, 23, 35, 47, 59];
      break;
    case 21:
    case 22:
      valor = [12, 24, 36, 48, 60 ] ;
      break;
    default:
      console.log('Hora error');
      break;
  }

  switch(troncoDia){
    case 1:
    case 6:
      tronco = valor[0];
      break;
    case 2:
    case 7:  
      tronco = valor[1]; 
      break;
    case 3:
    case 8:
      tronco = valor[2];  
      break;
    case 4:
    case 9:
      tronco = valor[3];  
      break;
    case 5:
    case 0:
      tronco = valor[4];  
      break;
    default:
      console.log('Hora error');
      break;
  }
  return tronco;
}

export const MV = (troncoDia, ramoDia, troncoHora, ramoHora) =>{
  let valor = tartarugaTDia(troncoDia) + 
              tartarugaRDia(ramoDia) + 
              tartarugaTHora(troncoHora) + 
              tartarugaRHora(ramoHora); 
  if(isPar(troncoDia)){
    console.log('kao')
    valor = valor % 6 ;
  }else{
    valor = valor % 9;
  }

  console.log(valor)            
}

const isPar = (troncoDia) =>{
  let isPar = false;
  if(troncoDia % 2 === 0 ){
    isPar = true;
  }
  return isPar;
}

const bissextoChines = (value) =>{
  let bi = false;
  if( (value % 4 === 0 && value % 100 !==0 ) || (value % 4 === 0 && value % 400 === 0)){
    bi = true
  }
  return bi;
}

export const prepararTabela = (ano) =>{
  let novo = [];
  if(ano >= 1980) {
    tabelaDia.map( e => {
      return novo.push({ ...e, ano: e.ano + 80 })
    })
  }
 return tabelaDia.concat(novo);
}

export const Tronco = value => {
  let tronco = 0;
  tronco = value % 10
  return  tronco;
}

export const Ramo = value => {
  let ramo = 0;
  ramo = value % 12
  return  ramo;
}
  