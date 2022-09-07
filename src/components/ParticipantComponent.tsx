import React from 'react';
import {IParticipant} from "../models/IParticipant";

interface ParticipantProps {
    participant: IParticipant;
}

export function ParticipantComponent({participant}: ParticipantProps) {
    return (
            <tr>
                <td>{participant.id}</td>
                <td>{participant.code}</td>
                <td><input type={"checkbox"} defaultChecked={participant.active}/></td>
            </tr>
    )
}

export default ParticipantComponent;