import {countries} from "../../day19/data/countries.js" ;

const search=document.getElementById("search");
const countrylist=document.getElementById("countrylist");
let timer=null;

search.addEventListener("input" , (e)=>{
    if(timer) clearTimeout(timer); // bu metod setTimeout metodunu durdurur-> clearTimeout

  timer=  setTimeout(()=>{

    // Textboxtaki bilgiyi al
   const userInput= e.target.value;
 
   // Ulkeleri filtrele
   const filteredCountries= filterCountry(userInput);
   
   console.log(filteredCountries);

   // listeyi guncelle
   setList(filteredCountries);

    } , 1500)

})


const filterCountry = (val) => {
  
    if(val.length<3) return [];
    const filteredCountries = countries.filter(country=> 
        country.name.official.toLowerCase().includes(val.toLowerCase()));
        return filteredCountries;
   
}
const setList = (items) => {
    countrylist.innerHTML="";
   items.forEach(item=>{
    const li= document.createElement("li");
    li.textContent= item.name.official;
    countrylist.appendChild(li);
   })
}
