import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import useDarkMode from './hooks.js';
import Number from './Number';

function App() {
    const { darkMode, setDarkMode, color: textColor } = useDarkMode(false);
    const [text, setText] = useState('');
    const [number, setNumber] = useState(0);
    const [isEven, setIsEven] = useState(true);

    useEffect(() => {
        console.log('useEffect');
        setText('Learn React');
        return () => {
            console.log('componentWillUnmount');
        };
    }, []);

    useEffect(() => {
        console.log('useEffect number');
        setIsEven(number % 2 === 0);
    }, [number]);

    const funcA = () => {
        setDarkMode(!darkMode);
    };

    const changeNumber = () => {
        setNumber(number + 1);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {text}
                </a>
                <br />
                {textColor}
                <button onClick={() => funcA()}>Color Mode</button>
                <br />
                <br />
                Number di page: {number} (is {isEven ? 'even' : 'odd'} number)
                <br />
                <Number number={number} changeNumber={changeNumber} />
            </header>
        </div>
    );
}

export default App;
