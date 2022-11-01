/* 
Dada una matriz cuadrada, calcule la diferencia absoluta entre las sumas de sus diagonales.

1   2   3
4   5   6     
9   8   9

*/


function matriz(arr){
    let diagonalPrincipal=0;
    let diagonalSecundaria=0;

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length;j++){
            if(i===j){
                diagonalPrincipal=diagonalPrincipal+arr[i][j];
            }
            if(i+j==arr.length-1){
                diagonalSecundaria=diagonalSecundaria+arr[i][j];
            }
        }
    }

    let diferenciaAbsoluta=Math.abs(diagonalPrincipal - diagonalSecundaria);
    return diferenciaAbsoluta
}

console.log(matriz([[1,2,3],[4,5,6],[9,8,9]]))