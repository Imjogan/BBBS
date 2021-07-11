import './Right.css';
import { Link } from 'react-router-dom';
import { colorArray, formArray } from '../../utils/constants';


const Right = ({...right}) => {
  const currentColor = colorArray.find((obj) => Object.keys(obj)[0] === right.color);

  return (
    <div className="guide-container__card">
      <div className="block-rights">
        <Link
          className={`block-rights__wrapper ${
            formArray[Math.floor(Math.random() * formArray.length)]
          } ${Object.values(currentColor)[0]}`}
          to={`/right/${right.id}`}
        >
          <h2 className="block-rights__title">{right.title}</h2>
          <p className="block-rights__category">рубрика</p>
        </Link>
      </div>
    </div>
  );
};

export default Right;
