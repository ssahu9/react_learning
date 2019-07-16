import React, {Component} from 'react';


// class Ninjas extends Component {
// const Ninjas= (props)=>{
    const Ninjas= ({ninjas})=>{
    // const {ninjas} = props
    const ninjaList = ninjas.map( ninja =>{
        return(
             <div className="ninjas" key={ninja.id}>
            <p>Name: {ninja.name}</p>
            <p>Age: {ninja.age}</p>
            <p>Belt: {ninja.belt}</p>
        </div>     
        )
    })
    return(
        <div className="ninjas">
           {ninjaList}
        </div>
    )
}



export default Ninjas