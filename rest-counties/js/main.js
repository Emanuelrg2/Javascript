import { getAllCountries } from "./service.js";
window.onload = () => {
    loadCountries();
};

const loadCountries = () => {
    const dataContainer = 
        document.getElementById('data-container');
    
        
        getAllCountries().then(resp =>{
        resp.forEach(country => {

            const countryElement = 
                document.createElement('div');
                countryElement.innerHTML =`

                <img src="${country.flags.png}" alt="${country.flags.alt}">
                ${
                    JSON.stringify(country.name)
                }
                ${country.name.common}
                
                `
                


                
             dataContainer.appendChild(countryElement);
        });
    })
};