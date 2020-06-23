import React from 'react'

function CountryListRegion(props) {
    return (
        <div>
            <select onChange={props.filterRegion}>
                <option value="asia">asia</option>
                <option value="africa">africa</option>
                <option value="americas">america</option>
                <option value="europe">europa</option>
            </select>
        </div>
    )
}

export default CountryListRegion
