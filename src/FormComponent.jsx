import { useEffect, useState, useRef } from 'react';

const rgex = /^[A-Za-z]*$/;
const checkTextInput = (setError, state) => {
    setError(!rgex.test(state));
};

function FormComponent() {
    const [input, setInput] = useState({ text: '', number: 0, radio: '' });
    const data2 = useRef(null);
    const form = useRef(null);
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        console.log(e);
        let newValue = e.target.value;
        if (e.target.name === 'number') {
            newValue = Number(e.target.value);
        }
        setInput({ ...input, [e.target.name]: newValue });
        // setInput({...input,[e.target.name]:!e.target.checked&&e.target.value})
    };

    useEffect(() => {
        checkTextInput(setShowError, input.text);
    }, [input.text]);

    const deleteData = (e) => {
        setInput({ text: '', number: 0 });
    };

    const saveRef = (e) => {
        console.log(data2.current.name);
        console.log(data2.current.value);
    };

    const saveData = (e) => {
        console.log('saveData',form)
        // lakukan validasi
        form.validate()
    };

    

    return (
        <div className='App'>
            VALUE :{input.text} - {input.number} - {input.radio}
            <br />
            <br />
            <br />
            <form ref={form} >
                TEXT:{' '}
                <input
                    required
                    name='text'
                    type='text'
                    value={input.text}
                    onChange={handleChange}
                    onFocus={() => {
                        console.log('focus');
                    }}
                />
                {showError && <p>Text is not valid</p>}
                <br />
                NUMBER{' '}
                <input
                    name='number'
                    type='number'
                    value={input.number}
                    onChange={handleChange}
                />
                <br />
                {/* Radio <input  name="radio" type='radio' value="A" checked={input.radio==='A'} onChange={handleChange} /> A
            <input  name="radio" type='radio' value="B" checked={input.radio==='B'} onChange={handleChange} /> B */}
                RADIO{' '}
                <input
                    name='radio'
                    type='radio'
                    value='A'
                    onChange={handleChange}
                />{' '}
                A
                <input
                    name='radio'
                    type='radio'
                    value='B'
                    onChange={handleChange}
                />{' '}
                B
                <br />
                <button onClick={deleteData}>Delete</button>
                <button onClick={saveData}>Save</button>
                {/* saveData
                <input type='submit' value='Save'/> */}
            </form>
            <br />
            <br />
            <br />
            REF <input name='ref' type='text' ref={data2} defaultValue='halo' />
            <button onClick={saveRef}>Save Ref</button>
        </div>
    );
}

export default FormComponent;
