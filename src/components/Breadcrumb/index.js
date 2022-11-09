import React from 'react'

export default function Breadcrumb({Name, URL}) {
    return (
        <div>
            <a href={URL}>{Name}</a>
        </div>
    )
}
