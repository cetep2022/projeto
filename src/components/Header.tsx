import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <ul className="Header__list">
        <li className="list__item"><a href="#" className="item__link">Home</a></li>
        <li className="list__item"><a href="#cards" className="item__link">Cards</a></li>
      </ul>
    </div>
  );
}
