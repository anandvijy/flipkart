// import React, { Component } from 'react' 

// import Nav from './Nav'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav></Nav>
//       </div>
//     )
//   }
// }
// import React from 'react'
// import Nav from './Nav'

// const App = () => {
//   let name = "Hello I am this and that";
//   console.log(name);
//   return (
//     <>
//     <div>App</div>
//     <div>Run</div>
//     <Nav name='data'></Nav>
//     </>
//   )
// }

// export default App
// import React from 'react'
// import Box1 from './Box1'

// const App = () => {
//   return (

//     <>
//     <div>

//       <Box1></Box1>
//       <Box1></Box1>
//       <Box1></Box1>
//       <Box1></Box1>
//     </div>
//     </>

//   )
// }

// export default App




// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     }
//   }
//   render() {

//     return (
//       <div>
//         <h1 onClick={this.state.count} >count</h1>
//       </div>
//     )
//   }
// }

import React, { useState } from 'react'
import Data from './Data';


const App = () => {
  let [ count, setCount ] = useState(0);
  let handleChange = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Data count={count} bttn={handleChange}></Data>
    </div>

  )
}


export default App

