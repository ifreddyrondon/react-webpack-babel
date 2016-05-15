/**
 * Created by freddyrondon on 4/8/16.
 */

import React from 'react'
import ReactDOM from 'react-dom';

import './../css/bootstrap.css';
import './../css/font-awesome.css';
import './../css/base.css';

const app = document.getElementById("app");


export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React + Webpack + Babel + ES6 Starter Kit</h1>
            </div>
        );
    }
}

ReactDOM.render(<App/>, app);