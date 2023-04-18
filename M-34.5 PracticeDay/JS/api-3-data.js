const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
} 

const displayCountries = (countries) => {
    // console.log(countries);
    const container = document.getElementById('container');
    countries.forEach(country => {
        const {region, capital} = country;
        // console.log(region,capital[0]);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img class="" src="${country.flags.png}" alt="flags" /></figure>
          <div class="card-body">
            <h2 class="card-title">Name: ${country.name.common}</h2>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
          </div>
        </div>
        `;
        container.appendChild(div);
    });
}

// Filter by 
const dataByRegion = (region) => {
    const url = `https://restcountries.com/vX/region/${region}`
    fetch(url)
    .then(res => res.json())
    .then(data => showByRegion(data));
}

const showByRegion = (regions) =>{
    console.log(regions);
}
dataByRegion("asia");




const dataByCapital = (capital) => {
    const url = `https://restcountries.com/v3.1/capital/${capital}`
    fetch(url)
    .then(res => res.json())
    .then(data => showByCapital(data));
}

const showByCapital = (capitals) =>{
    // console.log(capitals);
}
// dataByCapital();



const dataByLanguage = () => {
    const url = `https://restcountries.com/v2/lang/es`
    fetch(url)
    .then(res => res.json())
    .then(data => showByLanguage(data));
}

const showByLanguage = (languages) => {
    // console.log(languages);
    languages.forEach(language => {
        // console.log(language);
    })
}
// dataByLanguage();

loadCountries();