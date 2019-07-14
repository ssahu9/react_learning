import React, {Component} from 'react';


class Ninjas extends Component {

render(){
    console.log(this.props)
    const {name , age, belt } = this.props
    return(
        <div className="ninjas">
            <p>Name: {name}</p>
            <p>Age: {age}</p>

        </div>
    )
}

}

export default Ninjas