import logo from './logo.svg';
import './FunctionComponent.css';
import { useEffect, useState } from 'react';
import Number from './Number';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeDarkMode ,getDataToServer} from './store/colorConfig';

function FunctionComponent() {
    const {
        darkMode,
        color: textColor,
        fontSize,
        requestStatus,
    } = useSelector((state) => state.colorConfig);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [number, setNumber] = useState(0);
    const [isEven, setIsEven] = useState(true);
    const param = useParams();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('text')){
            setText(localStorage.getItem('text'))
        }
        return () => {
            console.log('componentWillUnmount');
        };
        
    }, []);

    useEffect(() => {
        setIsEven(number % 2 === 0);
    }, [number]);

    const funcA = () => {
        dispatch(changeDarkMode());
    };

    const changeNumber = () => {
        setNumber(number + 1);
    };
     
    useEffect(() => {
        localStorage.setItem('text',text)
    }, [text]);

    const changeText = (value) => {
        setText(value);
    };
      
    return (
        <div className='App'>
            <header className='App-header'>
                requestStatus:{requestStatus}
                <button
                    onClick={() => {
                        dispatch(getDataToServer({data:'data'}));
                    }}
                >
                    GET DATA TO BE
                </button> 
                <br />
                {/* FONT SIZE:{fontSize}
                <button
                    onClick={() => {
                        dispatch(changeFontSize(20));
                    }}
                >
                    CHANGE SIZE
                </button>
                <br /> */}
                <Link to='/detail'>GO TO DETAIL</Link>
                <button
                    onClick={() => {
                        history.go(-1);
                    }}
                >
                    GO TO DETAIL
                </button>
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

export default FunctionComponent;
