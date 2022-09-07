import {useEffect, useState} from "react";
import axios from "axios";
import {IParticipant} from "../models/IParticipant";

export function useParticipants(): IParticipant[] {
    const [participants, setParticipant] = useState<IParticipant[]>([]);

    async function fetchParticipant() {
        await axios.get<IParticipant[]>("http://127.0.0.1:8002/participant")
            .then(r => setParticipant(r.data));
    }

    useEffect(() => {
        fetchParticipant()
    }, []);

    return participants;
}