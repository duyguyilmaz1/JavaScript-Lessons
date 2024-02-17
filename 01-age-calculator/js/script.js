function getAge(){
    // input elementlerini al
    const txtDay= document.querySelector("#day");
    const txtMonth= document.querySelector("#month");
    const txtYear= document.querySelector("#year");

    // input değerlerini al
    const day= Number(txtDay.value); // falsy durumlar-> undefined, NaN, null, 0, ""empty
    const month= Number(txtMonth.value);
    const year= Number(txtYear.value);

    // input değerlerini kontrol et
    if (!day || typeof day !==  "number" || day < 1 || day > 31) {
        alert("Invalid day");
        return;
    }
    if (!month || typeof month !==  "number" || month < 1 || month > 12) {
        alert("Invalid month");
        return;
    }
    if (!year || typeof year !==  "number" || year < 1) {
        alert("Invalid year");
        return;
    }

    // mevcut tarihi alalım
    const currentDate= new Date();

    // input değerlerden doğum tarihini oluştur

    const birthDate= new Date(`${year} - ${month} - ${day}`)
    // alternatif:  const birthDate= new Date(year, month-1, day)

    //mevcut tarih ile doğum tarihini karşılaştır:
    if(birthDate>currentDate){
        alert("Invalid date");
        return;
    }

    // mevcut tarihi gün/ay/yıl olarak ayıralım: 
    const currentYear= currentDate.getFullYear();
    const currentMonth= currentDate.getMonth() + 1; // sıfır tabanlı, yani 0 Ocak'ı verir, o yüzden 1 ekledik
    const currentDay= currentDate.getDate();

    //mevcut tarihten doğum tarihini çıkar:
    let ageYears=currentYear - year;
    let ageMonths=currentMonth - month;
    let ageDays=currentDay - day;

    if(ageDays< 0){
        ageDays+=30;
        ageMonths--;
    }

    if(ageMonths<0){
        ageMonths+=12;
        ageYears--;
    }

    console.log(ageYears , ageMonths , ageDays)

    // sonucu göster
    document.querySelector("#lblYears").textContent= ageYears;
    document.querySelector("#lblMonths").textContent= ageMonths;
    document.querySelector("#lblDays").textContent= ageDays;


}