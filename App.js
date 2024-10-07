import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom/client';
const App = ()=>{
    return(
        <div>
          <h1>hello react</h1>
        </div>
    )
}
const root = reactDom.createRoot(document.getElementById('root'))
root.render(<App/>)