import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import data from "../data/products.json";

const CardBody = (props) => {
  const { title, description } = props;
  return (
      <div className="grid-item">
        <div className="grid-item-header">
          <h3>{title}</h3>
        </div>
        <div className="grid-item-body">
        <ul>
          {description &&
            description.map((item, index) => (
              <li key={index}>
                <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                {item}
              </li>
            ))}
        </ul>
        </div>
        <div className="grid-item-footer">
          <button className="button">Afla mai multe informatii</button>
        </div>
      </div>
  );
};

export default CardBody;
