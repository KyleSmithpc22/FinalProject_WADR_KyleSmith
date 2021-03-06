import React from 'react';
import { NewRoomForm } from './NewRoomForm';
import { EditRoomForm } from './EditRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }
     
    const updateRoom = (index) => (name,area) => {
        const updatingHouse = JSON.parse(JSON.stringify(house));
        updatingHouse.rooms[index] = {...updatingHouse.rooms[index], name,area}
        updateHouse(updatingHouse );
    }


    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`Level ${room.area} ${room.name}`}  </label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete Pokemon</button>
                    <EditRoomForm selectedRoom={room} onSubmit={updateRoom(index)} />
                    <h1> </h1>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )
    
};