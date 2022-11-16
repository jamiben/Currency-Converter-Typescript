const USD = 	1.04;
const IDR = 0.000064;
const DZ = 0.0072;
const rouble = 0.016;
const EUR = 1.04;

const select1 = (document.querySelector("#choice1") as HTMLSelectElement);
const select2 = (document.querySelector("#choice2") as HTMLSelectElement);
const symbol1 = (document.querySelector("#symbol1") as HTMLElement);
const symbol2 = (document.querySelector("#symbol2") as HTMLElement);
const inpchoice1 = (document.querySelector("#inpChoice1") as HTMLInputElement).value;
const inpchoice2 = (document.querySelector("#inpChoice2") as HTMLInputElement).value;
const submit = (document.querySelector("#submit") as HTMLButtonElement);
// console.log(inpchoice1.value);

const startValue = (document.querySelector("#startValue") as HTMLOptionElement);
const compar = (document.querySelector("#compar") as HTMLOptionElement);

let i = 0;
let tabOptions = [
    {name: "USD", value:1.3, symbol:"$"},
    {name:"IDR", value:83.18, symbol:"RP"},
    {name:"DNR", value:143.43, symbol:"DA"},
    {name:"RB", value:62.65, symbol:"₽"},
    {name:"EUR", value:1, symbol:"€"},
];

// console.log(tabOptions);
let valeurSelect; 
let tauxEnCours;


for( i=0; i <= tabOptions.length -1; i++ ){
        select1.options[i] = new Option(tabOptions[i].name);
        select2.options[i] = new Option(tabOptions[i].name);
};

select1.addEventListener('change', event =>{
    const target1 = event?.target as HTMLSelectElement;
    // console.log(select1.value);
    console.log(select1.options.selectedIndex)
});     

select2.addEventListener('change', event => {
    const target2 = event?.target as HTMLSelectElement;
    // console.log(target2.value);
});            



submit.onclick = function submit() {
    event?.preventDefault(); 

    select1.addEventListener = function choiceDev1(){
        const target1 = event?.target as HTMLSelectElement;
        let result;
        const euro: any = inpchoice1;
            switch(target1.value){
                case "EUR": if(target1.value == "EUR"){
                    result = euro * tabOptions[i].value; 
                    alert("coucou");
                }break; 
                case "USD": if(target1.value === "USD"){
                    result = euro * tabOptions[i].value;
                } 
                case "DZ": if(target1.value === "DZ"){
                    result = euro * tabOptions[i].value;
                } 
            }   
            console.log(target1);            
    }

}; 



