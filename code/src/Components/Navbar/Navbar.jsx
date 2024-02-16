import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = (props) => {
  // Initialiserer tilstanden med en standardfarve eller en farve fra props
  const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor || "#F4A460");

  // En funktion, der genererer en ny tilfældig farve og sætter den som baggrundsfarve
  const changeBackgroundColor = () => {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(newColor);
  };

  const navStyle = {
    backgroundColor, // Bruger tilstanden til at sætte baggrundsfarven
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const navArr = [
    { Link: "/", Page: "Home"},
    { Link: "/contact", Page: "Contact" },
    { Link: "/about", Page: "About" },
    { Link: "/login", Page: "Login" },
  ];

  return (
    <nav style={navStyle}>
      {navArr.map((item, index) => (
        // Tilføjer onClick-handler til hvert NavLink-element for at ændre farven
        <NavLink key={index} to={item.Link} onClick={changeBackgroundColor} style={{ color: 'inherit', textDecoration: 'none' }}>
          {item.Page}
        </NavLink>
      ))}
    </nav>
  );
};
