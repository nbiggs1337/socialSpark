import React from 'react'
import { Button } from "reactstrap"

function Buttons(props) {
    return (
        <Button className="btn-icon px-1 py-2 btn-3 mx-2 my-1" color="success" type="button" style={{width: '150px'}}>
            <span className="btn-inner--icon">
                <i className="ni ni-bag-17" />
            </span>
            <span className="btn-inner--text">{props.name}</span>
        </Button>
    )
}

export default Buttons