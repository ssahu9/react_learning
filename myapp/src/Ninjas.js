import React from 'react';


// class Ninjas extends Component {
// const Ninjas= (props)=>{
    const Ninjas= ({ninjas, deleteNinja})=>{
    // const {ninjas} = props
    const ninjaList = ninjas.map( ninja =>{
        if(ninja.age>25){
        return(
             <div className="ninjas" key={ninja.id}>
            <p>Name: {ninja.name}</p>
            <p>Age: {ninja.age}</p>
            <p>Belt: {ninja.belt}</p>
            {/* by default below delete function is getting invoked, to solve this use arrow function   */}
            {/* <button onClick ={deleteNinja(ninja.id)}> Delete</button> */}
            <button onClick ={() =>{deleteNinja(ninja.id)}}> Delete</button>
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