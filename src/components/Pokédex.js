import React from 'react';

import './Extra.css';

let e = React.createElement;

export default class Pokédex extends React.Component {
    render() {

        return (
            <div className="container">

                <h2 class="center">Here are multple lists of Pokemon from you to pick from!</h2>

                <div className="container">
                    <img height="1615px" src='https://i.pinimg.com/originals/68/04/f9/6804f94f08de92dd38c664a70a6decfa.jpg' alt="Pokemon" />;
                </div>

                <div className="container">
                    <img height="1615px" src='https://i.pinimg.com/originals/a7/b0/e6/a7b0e6f84c02f65c4ebd4232ff559d6b.jpg' alt="Pokemon" />;
                </div>

                <div className="container"  >
                    <img height="1615px" src='https://i.pinimg.com/originals/d5/20/a3/d520a30905e5fa0f2100d02034a102a1.jpg' alt="Pokemon" />;
                </div>

            </div>
        )
    }
}