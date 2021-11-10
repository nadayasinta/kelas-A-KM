import { useEffect, useState,  } from 'react';
import {Link, } from 'react-router-dom'

function TestingComponent() {
    const [input, setInput] = useState({ text: '', number: 0, radio: '' });
    const [showError, setShowError] = useState(false);
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        let newValue = e.target.value;
        if (e.target.name === 'number') {
            newValue = Number(e.target.value);
        }
        setInput({ ...input, [e.target.name]: newValue });
    };

    useEffect( () => {
    const getRespon = async () => {
      const response = await fetch('https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka');
      const body = await response.json();
      console.log(body)
      setResponse(body.message);
    };
    getRespon();
    // fetch('https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka', {
    //     method: 'GET',
    // })
    //     .then((response) => {
    //             return response.json();
    //     })
    //     .then((result) => {
    //         console.log(result);
    //         setResponse(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         setResponse(error);
    //     });
    }, []);

    useEffect(() => {
        const rgex = /^[A-Za-z]*$/;
        setShowError(!rgex.test(input.text));
    }, [input.text]);

    return (
        <div className='App'>
            <Link to="/">Home</Link>
           {response && <div data-testid='test-response'>{response}</div>}
            <br />
            <h1 data-testid='test-title'>USER FORM</h1>
            VALUE :{input.text} - {input.number} - {input.radio}
            <br />
            <br />
            <br />
            <form
                data-testid='test-form'
                onSubmit={(e) => {
                    console.log('form');
                    e.preventDefault();
                }}
            >
                TEXT:{' '}
                <input
                    data-testid='test-input'
                    required
                    name='text'
                    type='text'
                    value={input.text}
                    onChange={handleChange}
                />
                {showError && <p data-testid='test-error'>Text is not valid</p>}
                <button
                    data-testid='test-button'
                    onClick={() => {
                        console.log('button');
                    }}
                >
                    Submit
                </button>
                <br />
            </form>
        </div>
    );
}

export default TestingComponent;
