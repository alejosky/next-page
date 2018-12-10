import Flippable from '../components/flippable.js'

const image = "code.png";
const imagePath = "../static/images/";

const frontSrc = imagePath + "ascii.png";
const frontAlt = "ascii";
const backSrc = imagePath + "face.jpg";
const backAlt = "face";

const Header = (props) => (
  <header className="banner-wrapper">
    <div className="banner">
      <img className="banner-image"
        src={imagePath + image}
        alt={image}
      />
      <Flippable
        frontSrc={frontSrc}
        frontAlt={frontAlt}
        backSrc={backSrc}
        backAlt={backAlt}
      />
      <h1>{props.author}</h1>
    </div>
  </header>
)

export default Header