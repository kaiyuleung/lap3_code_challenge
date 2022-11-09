import React from 'react'

export default function Breadcrumb({Name, URL}) {
    return (
        <div style={{display:"inline-block"}}>
            <a href={URL}>{Name}</a>
        </div>
    )
}
