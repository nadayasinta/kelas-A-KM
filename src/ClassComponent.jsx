import './ClassComponent.css';
import React from 'react';
class PageClass extends React.Component {
    constructor() {
        super();
        this.state = {
            darkMode: false,
            text: '',
            number: 0,
            isEven: true,
        };
    }

    componentDidMount() {
        this.setState({
            text: "Let's Learn React",
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.number !== this.state.number) {
            this.setState({
                isEven: this.state.number % 2 === 0,
            });
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    funcA = () => {
        this.setState({
            darkMode: true,
        });
    };

    render() {
        return <div className='page-class'>{this.state.text}</div>;
    }
}

export default PageClass;
