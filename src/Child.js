import React from 'react'

const Child = (props) => {
    return (
        <div>
            {props.handleAlert()}
        </div>
    )
}

export default Child

Child.defaultProps  = {
    handleAlert: "Undefined"
}