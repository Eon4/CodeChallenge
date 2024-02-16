import { NavLink } from 'react-router-dom';


export const Navbar = ({  backgroundColor= "#F4A460" }) => {
  const navStyle = {
    backgroundColor,
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
  };

 
  

  const navArr = [
    { Link: "/", Page: "Home"},
    { Link: "/contact", Page: "Contact" },
    { Link: "/about", Page: "About" },
    { Link: "/login", Page: "Login" },
]

  return (
    <nav style={navStyle}>
      {navArr.map((item, index) => (
        <NavLink key={index} to={item.Link}>{item.Page} </NavLink>
      ))}
    </nav>

  );
};

