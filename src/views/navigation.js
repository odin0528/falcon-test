
import { Link, useParams } from "react-router-dom";

function Navigation({onChangeCategoryTitle, navList}) {

  const params = useParams();

  return (
    <ul className="nav-list">
      {navList.map((item, index) => (
        <li key={index} className="nav-item">
          <Link to={`/${item.path}`} className={item.path === params.category ? 'active' : ''} onClick={()=>onChangeCategoryTitle(item.title)}>
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;