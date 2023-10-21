import './Layer.css';

export const Layer = ({ color, label }) => {
  return (
    <div className="layer">
      <div
        className="layer__color"
        style={{ backgroundColor: '#613916' }}
      ></div>
      <div className="layer__label">espresso</div>
    </div>
  );
};
