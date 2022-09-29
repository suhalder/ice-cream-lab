import "./AdDesigner.css";
const AdDesigner = () => {
  return (
    <div className="AdDesigner">
      <h1>Ad Designer</h1>
      <p>Vote For</p>
      <p>
        <b>What to support</b>
      </p>
      <nav>
        <a href="#" className="button">
          Chocolate
        </a>
        <a href="#" className="button">
          Vanilla
        </a>
        <a href="#" className="button">
          Strawberry
        </a>
      </nav>

      <p>
        <b>Color Theme</b>
      </p>
      <nav>
        <a href="#" className="button">
          Light
        </a>
        <a href="#" className="button">
          Dark
        </a>
      </nav>

      <p>
        <b>Font Size</b>
      </p>
      <nav>
        <a href="#" className="button">
          Down
        </a>
        <a href="#" className="button">
          Up
        </a>
      </nav>
    </div>
  );
};

export default AdDesigner;
