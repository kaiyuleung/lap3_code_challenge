import React from 'react';
import { useNavigate } from 'react-router';


export default function BackBtn() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)}>Back</button>
    )
}
