import React, {Component} from 'react'


class Daters extends Component {

    state = {
        daters: []
    }

    getDaters = () => {
        fetch("/users")
        .then(response => response.json())
        .then(jData => this.setState({daters: jData}))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getDaters()
    }

    render() {
        return (
            <>
            {this.state.daters.map( dater => {
                return(
                <div className="dater" key={dater.id}>
                    <img src={dater.img}></img>
                    <h2>{dater.name}</h2>
                    <h3>{dater.starsign}</h3>
                    <h4>{dater.age}</h4>
                    {dater.ltl ? <h5>Loves to laugh and have a good time</h5> : <h4>Hates laughing, does not like having a good time</h4>}
                    

                </div>
                )
            })}
            </>
        )
    }
}


export default Daters



