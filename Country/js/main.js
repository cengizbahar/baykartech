const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown")
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");
const filter = document.querySelector(".filter");
/* Get APi Call */
async function getCountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });

}

/* Data Append */
getCountry()
function showCountry(data){
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML =`
    <div class="country-img">
        <img src="${data.flags.svg}" alt="">
    </div>
    <div class="country-info">
        <h5 class="countryName">${data.name.common}</h5>
        <p><strong>Population :</strong> ${data.population}</p>
        <p class="regionName"><strong>Region :</strong> ${data.region}</p>
        <p><strong>Capital :</strong> ${data.capital}</p>
    </div>`;
    countriesElem.appendChild(country)
    country.addEventListener("click", () => {
        showCountryDetail(data);
    });
}

/* DropDown */

dropDown.addEventListener("click",function() {
    dropElem.classList.toggle("showDropDown")
});


const regionName = document.getElementsByClassName("regionName");

region.forEach(element => {
    element.addEventListener("click", () =>{
       Array.from(regionName).forEach(elem => {
        if(elem.innerText.includes(element.innerText) || element.innerText =="All" ){
            elem.parentElement.parentElement.style.display = "grid"
        } else {
            elem.parentElement.parentElement.style.display = "none"
        }
       });
      
    })
});

/* Search */
const countryName = document.getElementsByClassName("countryName");

search.addEventListener("input", () => {

    Array.from(countryName).forEach(elem => {
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
            elem.parentElement.parentElement.style.display = "grid"
        } else {
            elem.parentElement.parentElement.style.display = "none"
        }
       });
});

/* Toggle */
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    moon.classList.toggle("")
}); 

/* Modal */

const countryModal = document.querySelector(".countryModal");
function showCountryDetail(data) {
    countryModal.classList.toggle("show");
    countryModal.innerHTML=` <button class="back">Back</button>
    <div class="modal">
            <div class="leftModal">
                <img src="${data.flags.svg}" alt="">
            </div>
            <div class="rightModal">
                <h1>German</h1>
                <div class="modalinfo">
                    <div class="innerLeft">
                        <div class="country-info">
                            <p><strong>Native Name :</strong> ${data.name.common}</p>
                            <p><strong>Population :</strong> ${data.population}</p>
                            <p><strong>Region :</strong> ${data.region}</p>
                            <p><strong>Capital :</strong> ${data.capital}</p>
                        </div>
                    </div>
                    <div class="innerRight">
                        <div class="country-info">
                            <p><strong>Car :</strong> ${data.car.signs}</p>
                            <p ><strong>Subregion :</strong> ${data.subregion}</p>
                            <p><strong>Status :</strong> ${data.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        const back = countryModal.querySelector(".back");

        back.addEventListener("click",() =>  {
            countryModal.classList.toggle("show");
        });
}