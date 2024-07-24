import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({theme, toggleTheme}) {
    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            <div className={`toggle-circle ${theme}`}></div>
        </div>
    );
}

export default ThemeToggle;
