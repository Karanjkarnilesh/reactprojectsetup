import React, { Component } from 'react';
import ReactDom from 'react-dom/client';

export default class App extends Component {
  render() {
    return (<div>  
       <nav class="navbar justify-content-evenly 
            flex-nowrap flex-row"> 
            <div class="container-fluid text-success"> 
                <h4>Nilesh</h4> 
                <ul class="nav navbar-nav  
               justify-content-evenly  
               flex-nowrap flex-row"> 
                    <li class="nav-item mx-3"> 
                        <a class="nav-link" 
                           href="#"> 
                            Jobs 
                        </a> 
                    </li> 
                    <li class="nav-item mx-3"> 
                        <a class="nav-link" 
                           href="#"> 
                            Practice 
                        </a> 
                    </li> 
                    <li class="nav-item mx-3"> 
                        <a class="nav-link" 
                           href="#"> 
                            Logout
                        </a> 
                    </li> 
                </ul> 
            </div> 
        </nav> 
       </div>
    )
  }
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDom.creat(<App/>,document.getElementById('root'));
