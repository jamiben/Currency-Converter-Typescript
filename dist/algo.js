"use strict";
// trie des tableaux
// const tab2 = [10, 3, 54, 2, 68, 89, 100, 1000, 293];
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
// const tab = [10, 3, 54, 2, 68, 89, 100, 1000, 293];
// function bubblSort(tableau: number[]){
//     for(i = 0; i < tableau.length; i++){
//         for(let j = 0; j < tableau.length -1; j++){
//             if( tableau[j] > tableau[j +1]){
//                 let temp = tableau[j +1];
//                 tableau[j +1] = tableau[j];
//                 tableau[j] = temp;
//             }
//         }
//     }
//     return tableau;
// }
// console.log(bubblSort(tab));
// ///////////reverser un tableau
// const TabEntry = [1, 2, 3, 4, 5];
// function revers(tableau: number[]){
//     let tabExit = [];
//     for(i=0; i<tableau.length; i++){
//         tabExit[i] = tableau[tableau.length -i -1];
//     }
//     return tabExit;
// }
// console.log("function revers : " +revers(TabEntry));
// function test(tab: number[]){
//     let tabtest = [];
//     for(i = tab.length -1; i> 0 -1; i--){
//         tabtest[i] = tab[tab.length -i -1];
//     }
//     return tabtest
// }
// console.log("function test : " + test( TabEntry));
// :::::::::::: Supprimer les nombres paires d'un tableau ::::::://
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// function filterOdd(tableau: number[]){
//     let tab2 = [];
//     for(i = 0; i < tableau[i]; i++){
//         tab2[i] = tableau[i] %2 !== 0;
//     }
//     console.log(tableau[i % tableau.length  ]);
//     return tab2[i];
// }
// console.log("coucou " + filterOdd(tab));
// retirer les voyelles d'une tableau
let alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// function indexOf(tab: string){
//         return tab.replace(/[AEIOUY]/gi, '');
//     }
// console.log(indexOf(alfabet))
let indexOf = (tab) => {
    let voy = "AEIOUY";
    let newTab;
    for (let i = 0; i < tab.length; i++) {
        if (tab.includes(voy[i])) {
            newTab = tab.replace(/[AEIOUY]/gi, '');
        }
        ;
    }
    return newTab;
};
console.log(indexOf(alfabet) + '   toto');
// let arr = [1,56,34,76,78,45,65,23,45,123,7,453];
// let bubble = (tab:number[])=>{
//     for(let i=0; i<tab.length; i++){
//         for(let j=0; j<tab.length; j++){
//             if(tab[i] < tab[j]){
//                 let stockage = tab[j];
//                 tab[j] = tab[i];
//                 // console.log(tab[i])
//                 tab[i] = stockage;
//             }
//         }
//     }
//     return tab;
// }
// console.log(bubble(arr))
let variable1 = "je-suis-un-ours";
let variable2 = "Je_Suis_Un_Ours";
let camelCase = (str) => {
    let newStr = "";
    let arrLetter = str.split(/[-_]/g);
    for (let i in arrLetter) {
        if (i > 0) {
            newStr += arrLetter[i].charAt(0).toUpperCase() + arrLetter[i].slice(1);
        }
        else {
            newStr += arrLetter[i];
        }
    }
    return newStr;
};
console.log(camelCase(variable1 + "\n" + variable2));
