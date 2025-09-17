import { useState } from 'react';
import './App.css';

export default function Calculator() {
    const [display, setDisplay] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = (value) => {
        if (value === 'C') {
            setDisplay('');
        } else if (value === '=') {
            try {
                const result = eval(display);
                setDisplay(result.toString());
            } catch {
                setDisplay('Error');
            }
        } else {
            setDisplay(display + value);
        }
    };

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <div className={`calculator ${darkMode ? 'dark' : 'light'}`}>
            <div className="theme-toggle">
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme} />
                    <span className="slider" />
                </label>
                <span>{darkMode ? 'Switch to Light' : 'Switch to Dark'}</span>
            </div>

            <div className="display">{display || '0'}</div>

            <div className="buttons">
                <button onClick={() => handleClick('C')}>C</button>
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('*')}>*</button>

                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('-')}>-</button>

                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('+')}>+</button>

                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('=')}>=</button>

                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('00')}>00</button>
            </div>
        </div>
    );
}
