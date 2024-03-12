import Language from "./Language";
import { data } from "../data/data";
const Card = () => {
  return (
    <div className="card">
      <h1>Language</h1>
      <div className="langWrapper">
        {data.map((lang, index) => (
          <Language {...lang} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Card;
