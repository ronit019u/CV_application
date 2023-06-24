import React, { Component } from "react"

class Education extends Component {
    render() {
    const {university, from, to, degree } = this.props;

    return (
          <div>
            <h1>Qualification</h1>
            <h2>University: {university}</h2>
            <h2>From: {from}</h2>
            <h2>to: {to}</h2>
            <h2>degree: {degree}</h2>
          </div>
    )
 }
}
export default Education;