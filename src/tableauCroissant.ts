const tab2 = [10, 3, 54, 2, 68, 89, 100, 1000, 293];

// function compar (tableau: number[]){

//     for(i=0; i < tableau.length ; i++){
//         for(let j=0; j < tableau.length ; j++){
//             if(tableau[i]< tableau[j]){
//                 let stockage = tableau[j];
//                 tableau[j] = tableau[i];
//                 tableau[i] = stockage ;    
//             }
//         }
//     }
//     return tab2;
// }
// console.log(compar(tab2));


const tab = [10, 3, 54, 2, 68, 89, 100, 1000, 293];

function bubblSort(tableau: number[]){

    for(i = 0; i < tableau.length; i++){
        for(let j = 0; j < tableau.length -1; j++){
            if( tableau[j] > tableau[j +1]){
                let temp = tableau[j +1];
                tableau[j +1] = tableau[j];
                tableau[j] = temp;
            }
        }
    }
    return tableau;
}
console.log(bubblSort(tab));
