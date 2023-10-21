import { Drink } from '../Drink/Drink';
import './Menu.css';

export const Menu = ({ drinks }) => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((drink) => (
            <>
              <Drink
                name={drink.name}
                ordered={drink.ordered}
                image={drink.image}
                layers={[
                  {
                    color: '#fbdf5b',
                    label: 'citrón',
                  },
                  {
                    color: '#613916',
                    label: 'espresso',
                  },
                ]}
              />
            </>
          ))}
        </div>

        <div className="order-detail">
          <a href="/objednavka">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
