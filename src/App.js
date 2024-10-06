
// import { useState } from 'react';
// import data from './data'
// import Tour from './components/Tour';

// function App() {

//   const [state,setState]=useState(data)

//   // setTimeout(()=>{
//   //   setState(data)
//   // },3000)

//   if(state.length===0){
//     return <h1>Loding...</h1>
//   }
// // console.log(setState)

//   return (
//     <div >
//       <Tour state={state}/>
//     </div>
//   );
// }

// export default App;




import { useState } from 'react';
import './App.css';
import data from './data';
import Tour from './components/Tour'

function App() {
  const [state, setState] = useState(data)

  if (state.length === 0) {
    return (
      <div className='nothing_left'>
        <p style={{fontSize:'2rem',fontWeight:'bolder',fontFamily:'cursive'}}>Nothing Left 😶</p>
        <button onClick={() => { setState(data) }} style={{height:'2rem',width:'6rem',backgroundColor:'greenyellow',border:'1px solid black',cursor:'pointer'}}>Refresh</button>
      </div>
    )
  }



  const remove = (id) => {

    const filted = state.filter((items) => items.id !== id)
    setState(filted)


  }

  return (
    <div>
      <Tour state={state} remove={remove} />

    </div>
  );
}

export default App;
