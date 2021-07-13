import React from 'react';
import { House } from './CRUD/House';
import { housesApi } from './CRUD/HousesApi';
import { NewRoomForm } from './CRUD/NewRoomForm';
// import { EditRoomForm } from './edit';

export class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        console.log("Inside componentDidMount Funcaton Block")
        this.fetchHouses();
    }

    fetchHouses = async () => {
        console.log("Inside fetchHouses Funcaton Block")
        const houses = await housesApi.get();
        this.setState({ houses });
    }

    updateHouse = async (updatedHouse) => {
        console.log("Inside updateHouse Funcaton Block")
        console.log("housesApi Check: " + housesApi)
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    render() {
        console.log("Inside render of Houses-List")
        console.log(this.state.houses);
        return (
            <div className="house-list" className="container">

                <div className="container">
                
                {this.state.houses.map((house) => (
                    <House 
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            <NewRoomForm /> 
            </div>
            </div>
        )
    }
}

