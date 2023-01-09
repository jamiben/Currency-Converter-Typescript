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
// let alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// function removeVowels(tab: string){
//         return tab.replace(/[AEIOUY]/gi, '');
//     }
// console.log(removeVowels(alfabet))
// let removeVowels = (tab:string) =>{
//     let voy = "AEIOUY";
//     let newTab;
//     for(let i=0; i < tab.length; i++){
//         if(tab.includes(voy[i])){
//             newTab = tab.replace(/[AEIOUY]/gi, '');
//         };
//     }
//     return newTab;
// }
// console.log(removeVowels(alfabet) + '   toto');
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
// ///////////////////////////////:Transformer une phrase en camalCase
// let variable1 = "je-suis-un-ours";
// let variable2 = "Je_Suis_Un_Ours" 
// let camelCase = (str : string) => {
//     let newStr = "";
//     let arrLetter = str.split(/[-_]/g);
//     for(let i in arrLetter){
//         if (parseFloat(i) > 0 ){
//             newStr += arrLetter[i].charAt(0).toUpperCase()+ arrLetter[i].slice(1) ;
//         }
//         else{
//             newStr += arrLetter[i];
//         }
//     }
//     return newStr;
// }
// console.log(camelCase(variable1 + "\n"+ variable2));
// /////////////////Verifier sir une chaine de caractère est un pangramme
// //////////////si c'est un pangramme renvoyer true
// ////////////Sinon renvoyer false
// //Definir une variable correspondant à toutes les lettres de l'alphabet
// // verifier si str correspond à toutes les lettres;
// // Si c'est les cas return true
// // Sinon return false
let pangram1 = "The quick brown fox jumps over the lazy dog.";
let pangram2 = "This is not a pangram.";
let pangram3 = "Portez ce vieux whisky au juge blond qui fume.";
let pangram4 = "Hello moto.";
let pangram5 = "Joyeux, ivre, fatigué, le nez qui pique, Clown Hary skie dans l’ombre.";
let pangram6 = "Ceci n'est pas un pangramme.";
let pangram7 = "Zut ! Je crois que le chien Sambuca préfère le whisky revigorant au doux porto.";
// const isPangram1 = (phrase: string) => {
//     let alfa = "abcdefghijklmnopqrstuvwxyz";
//     let regex = /\s/g;
//     let phNoMajNoSpace = phrase.toLowerCase().replace(regex, "");
//     for(let i=0; i<alfa.length; i++){
//         if(phNoMajNoSpace.indexOf(alfa[i])<0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPangram1(pangram));
// console.log(isPangram1(notPangram));
// Pour chaques lettre de la variable phrase 
// // si la lettre correspond à une ponctuation 
// // // alors je continue
// // si si la lettre n'est pas dans tab letter 
// // //on la rajoute 
// Si tabletter est === 25 
// // return true
// // sinon returne false
// const isPangram2 = (phrase: string) => {
//     let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
//     let tabLetter: string[] = [];   
//     for(let i=0; i<phrase.length; i++){
//         let phraseLowerC = phrase.toLowerCase().replace(/\s/g, "");
//         if(regex.test(phraseLowerC[i])){
//             continue;
//         }else if(!tabLetter.includes(phraseLowerC[i])){
//             tabLetter.push(phraseLowerC[i]);
//         }
//         // else if (tabLetter.length == 26){
//         //     console.log(tabLetter.length)
//         //     return true;
//         // }else { return false}
//         return tabLetter.length === 26 ? true : false;
//     }
//     return tabLetter.length;
// }
const isPangram2 = (phrase) => {
    let regex = /[\W]/g;
    let tabLetter = [];
    let phraseLowerC = phrase.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\s]/g, '');
    for (let i = 0; i < phraseLowerC.length; i++) {
        if (regex.test(phraseLowerC[i])) {
            continue;
        }
        else if (!tabLetter.includes(phraseLowerC[i])) {
            tabLetter.push(phraseLowerC[i]);
        }
    }
    return tabLetter.length === 26;
};
console.log(isPangram2(pangram1));
console.log(isPangram2(pangram2));
console.log(isPangram2(pangram3));
console.log(isPangram2(pangram4));
console.log(isPangram2(pangram5));
console.log(isPangram2(pangram6));
console.log(isPangram2(pangram7));
