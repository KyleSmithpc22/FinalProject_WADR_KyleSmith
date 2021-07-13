import React from 'react';

import './Extra.css';

import "bootstrap/dist/css/bootstrap.min.css";

let e = React.createElement;

export default class MainPage extends React.Component {
    render() {

        return (
            
            <div>
                <div>

                    <div className="container" class="center">
                        <img height="250px" src='https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9' alt="Pokemon Logo" />;
                    </div>

                    <div>
                        <h1 class="center">
                            TEAM MAKER!
                        </h1>
                    </div>
                    
                </div>

            </div>
        )
    }
}