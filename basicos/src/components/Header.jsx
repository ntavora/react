import React from 'react';
function Header(props) {
    return (
        <div className="App">
            <h1 className="encabezado">{props.title}</h1>
        </div>
    );
}

export default Header;