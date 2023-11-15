/*export const API_KEY = 'QlJ2nJ30RIAIoaJvosr4ypLeRSA1u4G4';
export const LOCATION_URL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
export const LONDRINA = 'Londrina'

dataservice.accuweather.com/locations/v1/cities/search?q=Londrina&apikey=QlJ2nJ30RIAIoaJvosr4ypLeRSA1u4G4
44945	

function getLondrina() {
    const url = `${LOCATION_URL}?q=${LONDRINA}&apikey=${API_KEY}`;
    
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const infosLondrina = json[0];
        const chaveLondrina = infosLondrina['Key'];
      });
    }
*/