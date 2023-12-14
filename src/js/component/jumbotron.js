import React from "react";

// 2. Crear el componente JSX
function Jumbotron (){
    return(
        <div className="jumbotron m-3 px-3 bg-secondary bg-opacity-25 text-start rounded py-5">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adiposcong elir, Ipsa, Ipsam, elgendi, in quo sunt possimus non incidunt odit vero alquid siimilique queerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
        </div>
    );
}

export default Jumbotron 


// style={{paddingTop: "50px", paddingBottom: "50px"}}