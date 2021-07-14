import './Right.css';
import { Link } from 'react-router-dom';
import { formArray, colorArray } from '../../utils/constants';

const Right = ({ ...right }) => (
  <div className="guide-container__card">
    <div className="block-rights">
      <Link
        className={`block-rights__wrapper ${
          formArray[(right.id - 1) % formArray.length]
        } ${colorArray[(right.id - 1) % colorArray.length]}`}
        to={`/right/${right.id}`}
      >
        <h2 className="block-rights__title">{right.title}</h2>
        <p className="block-rights__category">рубрика</p>
      </Link>
    </div>
  </div>
);

export default Right;
