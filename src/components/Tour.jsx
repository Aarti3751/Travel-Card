// import Card from "./Card";


// const Tour=({state})=>{

//     return(
//         <div className="main">
//             <h1>Plan  with Batch 35</h1>
//             <div>


//          {
//             state.map((items)=>{
//                 // const {id,name,info,image,price}=items
//                 // console.log(name) //destucture in js

//                 return(
//                     <Card key={items.id} {...items} />
//                 )
//             })
//          }
//          </div>
//         </div>
//     )
// }
// export default Tour;





import Card from "./Card";

const Tour = ({ state, remove }) => {
    // console.log(remove);

    return (
        <div style={{textAlign:'center',color:'purple'}}>
            <h1 style={{fontFamily:'serif',border:'3px dotted black'}}>Plan with Ak 🧳✈</h1>
            <div className="main">

                {
                    state.map((items) => {
                        return (
                            <Card key={items.id} {...items} remove={remove} />  // sec way destructure {...items}
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Tour