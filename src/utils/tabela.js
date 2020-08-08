
export const TextTronco = value => {
    let tronco = '';
    switch(value){
      case 1:
        tronco = 'T1 Yang-Madeira-VB';
        break;
      case 2:
        tronco = 'T2 Yin-Madeira-F'; 
        break;
      case 3:
        tronco = 'T3 Yang-Fogo-ID'; 
        break;
      case 4:
        tronco = 'T4 Yin-Fogo-C';
        break;
      case 5:
        tronco = 'T5 Yang-Terra-E';
        break;
      case 6:
        tronco = 'T6 Yin-Terra-BP';
        break;
      case 7:
        tronco = 'T7 Yang-Metal-IG';
        break;  
      case 8:
        tronco = 'T8 Yin-Metal-P';
        break; 
      case 9:
        tronco = 'T9 Yang-Água-B';
        break;       
      case 0:
        tronco = 'T10 Yin-Água-R';
        break;
      default:
        console.log('TextTronco error');
        break;
    }
    return tronco;
}

export const TextRamo = value => {
  let Ramo = '';
  switch(value){
    case 1:
      Ramo = 'RI Rato-Madeira-VB';
      break;
    case 2:
      Ramo = 'RII Boi-Madeira-F'; 
      break;
    case 3:
      Ramo = 'RIII Tigre-Metal-P'; 
      break;
    case 4:
      Ramo = 'RIV Lebre-Metal-IG';
      break;
    case 5:
      Ramo = 'RV Dragão-Terra-E';
      break;
    case 6:
      Ramo = 'RVI Serpente-Terra-BP';
      break;
    case 7:
      Ramo = 'RVII Cavalo-Fogo-C';
      break;  
    case 8:
      Ramo = 'RVIII Cabra-Fogo-ID';
      break; 
    case 9:
      Ramo = 'RIX Macaco-Água-B';
      break;       
    case 10:
      Ramo = 'RX Galo-Água-R';
      break;
    case 11:
      Ramo = 'RXI Cão-Fogo-CS';
      break;
    case 0:
      Ramo = 'RXII Porco-Fogo-TR';
      break;
    default:
      console.log('RamoTronco error');
      break;
  }
  return Ramo;
}

export const tartarugaTHora = (tronco) => {
  let valor = 0;
  switch(tronco){
    case 1: 
    case 6:
      valor = 9;
      break;
    case 2: 
    case 7:
      valor = 8;
      break;
    case 3: 
    case 8:
      valor = 7;
      break;
    case 4: 
    case 9:
      valor = 6;
      break;
    case 5: 
    case 0:
      valor = 5;
      break;
    default:
      console.log('Tartaruga error');
      break;
  }
  return valor;
}

export const tartarugaRHora = (ramo) => {
  let valor = 0;
  switch(ramo){
    case 1: 
    case 7: 
      valor = 9;
      break;
    case 2: 
    case 8:
      valor = 8;
      break;
    case 3:
    case 9:  
      valor = 7;
      break;
    case 4: 
    case 10:
      valor = 6;
      break;
    case 5: 
    case 11:
      valor = 5;
      break;
    case 6: 
    case 0:
      valor = 4;
      break;
    default:
      console.log('Tartaruga error');
      break;
  }
  return valor;
}

export const tartarugaTDia = (tronco) => {
  let valor = 0;
  switch(tronco){
    case 1: 
    case 6:
      valor = 10;
      break;
    case 2: 
    case 7:
      valor = 9;
      break;
    case 3: 
    case 8:
    case 5: 
    case 0:  
      valor = 7;
      break;
    case 4: 
    case 9:
      valor = 8;
      break;
    default:
      console.log('Tartaruga error');
      break;
  }
  return valor;
}

export const tartarugaRDia = (ramo) => {
  let valor = 0;
  switch(ramo){
    case 5: 
    case 11:
    case 2:
    case 8:  
      valor = 10;
      break;
    case 9: 
    case 10:
      valor = 9;
      break;
    case 1: 
    case 7:
    case 6:
    case 0:  
      valor = 7;
      break;
    case 3: 
    case 4:
      valor = 8;
      break;
    default:
      console.log('Tartaruga error');
      break;
  }
  return valor;
}

export const pontoAberto = (troncoDia, hours) => {
  let valor = [];
  let ponto = null;
  switch(hours){
    case 0:
    case 23:  
      valor = ['ID2','E36','IG3','TR1','VB38'];
      break;
    case 1:
    case 2:
      valor = ['C3','BP3','CS3','R7','R1'];
      break;
    case 3:
    case 4:
      valor = ['E43','TR10','B60','B67','ID8']; 
      break;
    case 5:
    case 6:
      valor = ['CS5','P8','P11','F8','F2']; 
      break;
    case 7:
    case 8:
      valor = ['IG5','IG1','VB34','VB43','TR6'];
      break;
    case 9:
    case 10:
      valor = ['BP1','R10','R2','CS7','C7'];
      break;
    case 11:
    case 12:
      valor = ['B54','B66','TR3','ID3','E45']; 
      break;  
    case 13:
    case 14:
      valor = ['P10','CS8','F3','C9','BP5']; 
      break; 
    case 15:
    case 16:
      valor = ['TR2','VB41','ID1','E41','IG2']; 
      break;       
    case 17:
    case 18:
      valor = ['R3','F1','C4','BP2','P5']; 
      break;
    case 19:
    case 20:
      valor = ['VB44','ID5','E44','IG11','B65'];
      break;
    case 21:
    case 22:
      valor = ['F4','C8','BP9','P9','CS9'] ;
      break;
    default:
      console.log('PONTO ABERTO error');
      break;
  }

  switch(troncoDia){
    case 1:
    case 6:
      ponto = valor[0];
      break;
    case 2:
    case 7:  
      ponto = valor[1]; 
      break;
    case 3:
    case 8:
      ponto = valor[2];  
      break;
    case 4:
    case 9:
      ponto = valor[3];  
      break;
    case 5:
    case 0:
      ponto = valor[4];  
      break;
    default:
      console.log('PONTO ABERTO error');
      break;
  }
  return ponto;
}
export const diatoMes = mes => {
    let valor = 0;
    switch(mes){
      case 0:
        break;
      case 1:
        valor = 31;
        break;
      case 2:
        valor = 59;
        break;
      case 3:
        valor = 30;
        break;
      case 4:
        break;
      case 5:
        valor = 31;
        break;
      case 6:
        valor = 1;
        break;  
      case 7:
        valor = 32;
        break; 
      case 8:
        valor = 3;
        break;       
      case 9:
        valor = 33;
        break;
      case 10:
        valor = 4;
        break;
      case 11:
        valor = 34;
        break;
      default:
        console.log('TextTronco error');
        break;
    }
    return valor;
}
  
 
export const tabelaDia = [
    { ano: 1900 , valor: 9},
    { ano: 1901 , valor: 15},
    { ano: 1902 , valor: 20},
    { ano: 1903 , valor: 25},
    { ano: 1904 , valor: 30},
    { ano: 1905 , valor: 36},
    { ano: 1906 , valor: 41},
    { ano: 1907 , valor: 46},
    { ano: 1908 , valor: 51},
    { ano: 1909 , valor: 57},
    { ano: 1910 , valor: 2},
    { ano: 1911 , valor: 7},
    { ano: 1912 , valor: 12},
    { ano: 1913 , valor: 18},
    { ano: 1914 , valor: 23},
    { ano: 1915 , valor: 28},
    { ano: 1916 , valor: 33},
    { ano: 1917 , valor: 39},
    { ano: 1918 , valor: 44},
    { ano: 1919 , valor: 49},
    { ano: 1920 , valor: 54},
    { ano: 1921 , valor: 60},
    { ano: 1922 , valor: 5},
    { ano: 1923 , valor: 10},
    { ano: 1924 , valor: 15},
    { ano: 1925 , valor: 21},
    { ano: 1926 , valor: 26},
    { ano: 1927 , valor: 31},
    { ano: 1928 , valor: 36},
    { ano: 1929 , valor: 42},
    { ano: 1930 , valor: 47},
    { ano: 1931 , valor: 52},
    { ano: 1932 , valor: 57},
    { ano: 1933 , valor: 3},
    { ano: 1934 , valor: 8},
    { ano: 1935 , valor: 13},
    { ano: 1936 , valor: 18},
    { ano: 1937 , valor: 24},
    { ano: 1938 , valor: 29},
    { ano: 1939 , valor: 34},
    { ano: 1940 , valor: 39},
    { ano: 1941 , valor: 45},
    { ano: 1942 , valor: 50},
    { ano: 1943 , valor: 55},
    { ano: 1944 , valor: 60},
    { ano: 1945 , valor: 6},
    { ano: 1946 , valor: 11},
    { ano: 1947 , valor: 16},
    { ano: 1948 , valor: 21},
    { ano: 1949 , valor: 27},
    { ano: 1950 , valor: 32},
    { ano: 1951 , valor: 37},
    { ano: 1952 , valor: 42},
    { ano: 1953 , valor: 48},
    { ano: 1954 , valor: 53},
    { ano: 1955 , valor: 58},
    { ano: 1956 , valor: 3},
    { ano: 1957 , valor: 9},
    { ano: 1958 , valor: 14},
    { ano: 1959 , valor: 19},
    { ano: 1960 , valor: 24},
    { ano: 1961 , valor: 30},
    { ano: 1962 , valor: 35},
    { ano: 1963 , valor: 40},
    { ano: 1964 , valor: 45},
    { ano: 1965 , valor: 51},
    { ano: 1966 , valor: 56},
    { ano: 1967 , valor: 1},
    { ano: 1968 , valor: 6},
    { ano: 1969 , valor: 12},
    { ano: 1970 , valor: 17},
    { ano: 1971 , valor: 22},
    { ano: 1972 , valor: 27},
    { ano: 1973 , valor: 33},
    { ano: 1974 , valor: 38},
    { ano: 1975 , valor: 43},
    { ano: 1976 , valor: 48},
    { ano: 1977 , valor: 54},
    { ano: 1978 , valor: 59},
    { ano: 1979 , valor: 4},
]

