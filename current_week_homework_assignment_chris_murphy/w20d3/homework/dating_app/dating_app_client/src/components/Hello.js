import React, {Component} from 'react'


class Daters extends Component {

    getDaters = () => {
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(jData => console.log(jData))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getDaters()
    }

    render() {
        return (
            <>
            <h1>Hello Dating World</h1>
            </>
        )
    }
}


export default Daters



