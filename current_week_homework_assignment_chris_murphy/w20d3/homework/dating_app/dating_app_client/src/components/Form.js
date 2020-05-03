import React, {Component} from 'react'



class Form extends Component {
    state = {
        name: '',
        starsign: '',
        age: '',
        img: '',
        ltl: false
    }

        render(){
            return (
                  <>
                    <form action="">
                        <input type="text" name="name" id="name"/>
                    </form>
                  </>  
            )
        }
}


export default Form