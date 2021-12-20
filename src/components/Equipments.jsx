import React, { Component } from 'react'
// style sheet

export default class Equipments extends Component {
    render() {
        const equipmentsArray = this.props.equipments
        console.log(equipmentsArray)
        return (
            <div>
                {equipmentsArray.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </div>
        )
    }
}

