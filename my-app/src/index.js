import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const jsx = <span>hello chutiye</span>


// class AppComponent extends React.Component{
//   constructor(props){
//     super(props);
//     //defining state
//     this.state = {
//       count: -1,
//       name: "Saumya"
//     }
//   }
//   render(){
//     return(
//       <React.Fragment>
//        <div>
//         <h1>hello let's count the numbers</h1>
//         <span>{this.state.count}</span><br />
//         <button onClick={()=>{
//           console.log('+button is clicked')
//           this.setState({count: this.state.count +1})
//         }}>Add+</button>
//         <p>{this.state.name}</p>
//        </div>
//       </React.Fragment>
//     );
//   }
// }

function AppComponent(props){
  return(
    <h1>hello world!!</h1>
  )
}

const htmlRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlRoot);
reactRoot.render(<AppComponent />);






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
