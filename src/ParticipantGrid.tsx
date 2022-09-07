import React from 'react';
import './Participant.css';
import ParticipantComponent from "./components/ParticipantComponent";
import {useParticipants} from "./hooks/ParticipantHooks";
import {IParticipant} from "./models/IParticipant";

const ParticipantGrid = () => {
    const participants: IParticipant[] = useParticipants();
    return (
        <table className="participant">
            <thead>
            <tr id="row-target">
                <th scope="col">id</th>
                <th scope="col">code</th>
                <th scope="col"> active</th>
            </tr>
            </thead>
            <tbody>
            {participants.map(product => <ParticipantComponent participant={product} key={product.id}/>)}
            </tbody>
        </table>
    );
};


export default ParticipantGrid;
