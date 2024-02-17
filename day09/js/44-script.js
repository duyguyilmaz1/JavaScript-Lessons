const hesapla = (price,tax,discount) => {
    price??=0; //price = price ise priceı yaz , değilse 0 ata. Null gelmesin, en azından 0 gelsin dedik. 
    tax??=0;
    discount??=0;
  
    if(discount<=0) tax=0;
    if(price>1500) discount+=10;

    let totalTax= (price*tax)/100;
    let totalDiscount=(price*discount)/100;

    let result=price+totalTax-totalDiscount;
    return result;
}

const sonucuGoster = () => {
  let inpFiyat= document.querySelector("#inpFiyat");
  let inpFiyatValue=Number(inpFiyat.value);

  let inpKDV= document.querySelector("#inpKDV");
  let inpKDVValue=Number(inpKDV.value);

  let inpIndirim= document.querySelector("#inpIndirim");
  let inpIndirimValue=Number(inpIndirim.value);

  let totalResult=hesapla(inpFiyatValue,inpKDVValue,inpIndirimValue);
  document.querySelector("#sonuc").innerHTML=`Sonuc: ${totalResult.toFixed(2)}`
}
