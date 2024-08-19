import React from 'react'
import { ReactGridSelection } from "react-grid-selection"

const ShowCase = () => {
    return (
        <div className='flex justify-center mt-4'>
            <ReactGridSelection
                hasFooter
                grid={[10, 10]}
                onSelected={(grid) => alert(grid)}
            />
        </div>
    )
}

export default ShowCase