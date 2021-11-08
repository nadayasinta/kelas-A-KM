import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Component from './Component';
import FormComponent from './FormComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/detail' exact>
                    <Component />
                </Route>

                <Route path='/about/:id'>
                    <Component />
                </Route>

                <Route path='/' exact>
                    <FunctionComponent />
                </Route>
                <Route path='/detail'>
                    <ClassComponent />
                </Route>
                <Route path='/form'>
                    <FormComponent />
                </Route>
                <Route path='*'>
                    <div>Not Found</div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
