import { useEffect, useState } from 'react';
const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState(initialValue);
    const [color, setColor] = useState('black');

    useEffect(() => {
        setColor(darkMode ? 'black' : 'white');
    }, [darkMode]);

    return { darkMode, setDarkMode, color };
};
export default useDarkMode;
