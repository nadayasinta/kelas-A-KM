import { useEffect,  } from 'react';
import {useParams, useLocation} from 'react-router-dom'

function FunctionComponent() {

    const param=useParams()
    const location=useLocation()

    useEffect(() => {
        console.log('params',param);
        console.log('location',location);
       
    }, []);

  

    return (
        <div className='App'>
            {location.pathname}
            <br/>
            {param?.id? 'PARAM ADA'+param?.id:'PARAM GA ADA'}
        </div>
    );
}

export default FunctionComponent;
