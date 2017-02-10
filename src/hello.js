import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello {
    constructor(config) {
        this.container = config.container;
    }

    render(authorData) {
        var greeting = `Hello ${authorData.name}, I am an AMD JS Module compiled with Webpack, Babel and React!`;
        ReactDOM.render(
            <p>{greeting}</p>,
            this.container
        );
    }
}
