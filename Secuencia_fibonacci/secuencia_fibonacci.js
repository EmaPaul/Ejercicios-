/* Metodo 1 */

function secuenciaFibonacci1(n) {
  let x = 0;
  let y = 1;
  let z = 1;

  for (let i = 0; i < n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  return x;
}

let n1=5;
let arr1=[];

for(let i=0; i < n1; i++) {
    arr1.push(secuenciaFibonacci1(i))
}

console.log(arr1)
console.log(arr1[n1-1]) // por si deseas ver como regresar el ultimo valor

/* Metodo 2 */

function secuenciaFibonacci2(n){
    if(n<2){
        return n
    }else{
        return secuenciaFibonacci2(n-1)+secuenciaFibonacci2(n-2)
    }
}

let n2=10;
let arr2=[];

for(let i=0; i < n2; i++) {
    arr2.push(secuenciaFibonacci2(i))
}

console.log(arr2)
console.log(arr2[n2-1]) // por si deseas ver como regresar el ultimo valor


/* Metodo 3 */

function secuenciaFibonacci3(n){
    let sFibonacci=[0,1];
    for(let i=2; i<n; i++){
        sFibonacci.push(sFibonacci[i-1] + sFibonacci[i-2])
    }
    return [sFibonacci,sFibonacci[n-1]]
}

console.log(secuenciaFibonacci3(20)[0])
console.log(secuenciaFibonacci3(20)[1]) // por si deseas ver como regresar el ultimo valor
