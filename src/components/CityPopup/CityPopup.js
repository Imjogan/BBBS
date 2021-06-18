import './CityPopup.css';
import City from './City/City';
import api from "../../utils/api";


function CityPopup({ enroll, onUserData, onUserCity, cities }) {

  const {isCityPopupOpen, toggleCityPopup} = enroll;

  function handleCityChange(id) {
    api.changeCity(id)
      .then((res) => onUserData(res.data))
      .catch((err) => console.log(err))
    
    onUserCity();
    toggleCityPopup();
  }

  function filterCities(array) {
    const citiesObj = {
      main: [],
      other: []
    };

    array.map((city) => {

      if (city.isPrimary === true) {
        citiesObj.main.push(city);
      } 
      else {
        citiesObj.other.push(city);
      }

      citiesObj.main.sort();
      citiesObj.other.sort();

      return citiesObj;
    });

    return citiesObj;
  }

  const citiesToRender = filterCities(cities);

  return (
    <div className={ isCityPopupOpen ? "visible-block popup" : "popup" }>
      <div className="popup__container popup__container_type_city">
        <h2 className="list__title">
          Выберите ваш город
        </h2>
        <ul className="cities-list">
          <div className="cities-list__main">
            {citiesToRender.main.map((city) => (
              <City
                key={city.id}
                id={city.id}
                city={city.name}
                handleChange={handleCityChange}
              />
            ))}
          </div>
          {citiesToRender.other.map((city) => (
            <City
              key={city.id}
              id={city.id}
              city={city.name}
              handleChange={handleCityChange}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CityPopup;