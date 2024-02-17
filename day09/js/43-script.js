// decleration function

function lengthiBul(value){

    return value.length;

}

console.log(lengthiBul("merhaba"));

// expression function

let topla= function(a,b){
    return a+b;
}

let toplamSonuc=topla(5,20);
console.log(toplamSonuc);

// arow function

let carpma= (a,b) => a*b;

console.log(carpma(5,8));

const firstletter= (str) => {
    let letter=str.charAt(str.length-1);
    return letter;
}

console.log(firstletter("merhaba"))

const findSubstring = (param) => {
   let sonuc= param.substring(1,4);
   return sonuc;
}

console.log(findSubstring("Dünya"));

