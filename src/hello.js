import React from 'react';
import ReactDOM from 'react-dom';
import './hello.less';

export default class Hello {
    constructor(environment) {
        this.container = environment.container;
        this.environment = environment;
    }

    render(authorData) {
        var greeting = `Hello ${authorData.name}, I am an AMD JS Module compiled with Webpack, Babel and React!`;
        ReactDOM.render(
            <h1>{greeting}</h1>,
            this.container,
            // After render, update the height of the iFrame.
            () => this.environment.requestHeightChange()
        );
    }

}
