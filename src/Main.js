import React from 'react';
import './Main.css';

const Main = () => {

    return (
      <div class="jumbotron text-center bg-warning">
        <h1 class="display-4">Main Component</h1>
        <p class="lead">This is a simple site created by using React JS.</p>
        <hr class="my-4"/>
        <p>It uses Functions for Components instead of Classes</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#">Learn React</a>
        </p>
      </div>
    );
}

export default Main;