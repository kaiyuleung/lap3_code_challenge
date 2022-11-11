import React from 'react';
import { useNavigate } from 'react-router';

import './style.css'

export default function BackBtn() {
    const navigate = useNavigate();
    return (
        <button className='backbtn' onClick={() => navigate(-1)}>&larr; Go back</button>
    )
}
