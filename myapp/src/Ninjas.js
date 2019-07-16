import React from 'react';


// class Ninjas extends Component {
// const Ninjas= (props)=>{
    const Ninjas= ({ninjas})=>{
    // const {ninjas} = props
    const ninjaList = ninjas.map( ninja =>{
        if(ninja.age>25){
        return(
             <div className="ninjas" key={ninja.id}>
            <p>Name: {ninja.name}</p>
            <p>Age: {ninja.age}</p>
            <p>Belt: {ninja.belt}</p>
        </div>     
        )
    }
    else 
    return null
    })

    const ninjaList2 = ninjas.map( ninja =>{
        return (ninja.age>25) ? (
            <div className="ninjas" key={ninja.id}>
            <p>Name: {ninja.name}</p>
            <p>Age: {ninja.age}</p>
            <p>Belt: {ninja.belt}</p>
        </div>
     ) : null
        
    
    
    })
    return(
        <div className="ninjas">
           {ninjaList}
        </div>
    )
}



export default Ninjas