import './Drink.css';
import { Layer } from '../Layer/Layer';

export const Drink = ({ name, ordered, image, layers, id }) => {
  let btnText = '';
  let btnClass = 'order-btn';

  if (ordered) {
    btnText = 'Zrušit';
    btnClass += ' order-btn--ordered';
  } else {
    btnText = 'Objednat';
  }

  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => (
            <>
              <Layer key={id} color={layer.color} label={layer.label} />
            </>
          ))}
        </div>
      </div>
      <div className="drink__controls">
        <button className={btnClass} id={id}>
          {btnText}
        </button>
      </div>
    </div>
  );
};
