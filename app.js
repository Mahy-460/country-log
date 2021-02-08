fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountry(data))


const displayCountry = countries =>{
    const cDiv = document.getElementById('countris');
    countries.forEach(country=> {
        
       const countryDiv = document.createElement('div');  
        countryDiv.className = 'country';
        const info = `
           <h3 class="country-name">${country.name}</h3>
           <p>${country.capital}</p>
           <button onclick="displayCountryDetail('${country.name}')">Details</button>
           
        `;
        countryDiv.innerHTML = info;
        cDiv.appendChild(countryDiv);
    });
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];

        // const countryDiv = document.createElement('div');
        // const name = document.createElement('h3');
        // name.innerText = country.name;
        // const capital = document.createElement('p');
        // capital.innerText = country.capital;
        
        // countryDiv.appendChild(name);
        // countryDiv.appendChild(capital);

    //     countryDiv.className = 'country';
    //     const info = `
    //        <h3 class="country-name">${country.name}</h3>
    //        <p>${country.capital}</p

    //     `
    //     countryDiv.innerHTML = info;
    //     cDiv.appendChild(countryDiv);

    // }
}

const displayCountryDetail = name=>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country =>{
    console.log(country)
    const countryDiv = document.getElementById('countryDetail');
    let ful = countryDiv.innerHTML =`
        <h1>Country-Name :  ${country.name}</h1>
        <h3>Capital :  ${country.capital}</h3>
        <p>Population :  ${country.population}</p>
        <p>Area :  ${country.area}<p>
        <p>Time : ${country.timezones}</p>
        <img src="  ${country.flag}">
        
    `
}

