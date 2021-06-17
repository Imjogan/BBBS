import './CityPopup.css';
import City from './City/City';


function CityPopup({ enroll, onUserData, cities }) {
 // ВОЗМОЖНО, ЗНАЧЕНИЕ ВЭЛЬЮ ПРИДЕТСЯ ПОМЕНЯТЬ НА АЙДИ ГОРОДА, НАДО УТОЧНИТЬ У БЕКА

 const {isCityPopupOpen, toggleCityPopup} = enroll;

  function handleCityChange(e) {
    console.log(e.target.value);
    // patch запрос к апи для изменения города в профиле юзера => res
    // onUserData(res);
    toggleCityPopup();
  }

  function filterCities(array) {
    const citiesObj = {
      main: [],
      other: []
    };

    array.map((city) => {
      if (city.name.toLowerCase() === 'москва') {
        citiesObj.main.unshift(city);
      } else 
      if (city.name.toLowerCase() === 'санкт-петербург') {
        citiesObj.main.push(city);
      } else {
        citiesObj.other.push(city);
      }

      citiesObj.other.sort();

      return citiesObj;
    });

    return citiesObj;
  }

  const a = [{name: 'москва', id: 1}, {name: 'санкт-петербург', id: 2}, {name: 'а', id: 3}, {name: 'б', id: 4}, {name: 'в', id: 5}, {name: 'г', id: 6}, {name: 'д', id: 7}]; // типа список городов

  const citiesToRender = filterCities(a); // поменять на cities

  return (
    <div className={ isCityPopupOpen ? "visible-block popup" : "popup" }>
      <div className="popup__container popup__container_type_city">
        <h2 className="list__title">
          Выберите ваш город
        </h2>
        <ul className="cities-list" onChange={ handleCityChange }>
          <div className="cities-list__main">
            {citiesToRender.main.map((city) => (
              <City
                key={city.id}
                city={city.name}
              />
            ))}
          </div>
          {citiesToRender.other.map((city) => (
            <City
              key={city.id}
              id={city.id}
              city={city.name}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CityPopup;