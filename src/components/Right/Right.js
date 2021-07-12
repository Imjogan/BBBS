import './Right.css';
import { Link } from 'react-router-dom';
import { formArray } from '../../utils/constants';

const Right = ({ ...right }) => (
  <div className="guide-container__card">
    <div className="block-rights">
      <Link
        className={`block-rights__wrapper ${
          formArray[Math.floor(Math.random() * formArray.length)]
        } background-${right.color}`}
        to={`/right/${right.id}`}
      >
        <h2 className="block-rights__title">{right.title}</h2>
        <p className="block-rights__category">рубрика</p>
      </Link>
    </div>
  </div>
);

export default Right;
