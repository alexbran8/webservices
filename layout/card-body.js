import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
                <CheckCircleOutlineIcon className="icon"  />
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
