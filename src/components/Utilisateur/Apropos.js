import React from 'react';

function Apropos () {
    return (
      <> 
            <h1> A propos</h1>
            <div>
                <div  style={{'display': 'flex',' flex-wrap': 'wrap', 'place-content': 'stretch space-evenly','justify-content': 'space-evenly','flex-direction':' column',
                'align-content': 'stretch','align-items': 'stretch'}}>
            </div>
            <div> 
            <img style={{"width": "50%","height": "400px"}} src={"./Images/fleur-apropos3.png"} />
            </div>
            <div > 
               <h3> UNE BOUTIQUE PLUS PROCHE DE SES CLIENTS</h3>
               <p>
                    La boutique MGR a été créée en Mai 2018 par Max, Gwen et Rodelin afin de fournir un service de qualité aux amateurs de plantes.
                    Cette idée vient surtout Gwen amoureuse de plantes qui a su nous transmettre cette passion.
                    A travers cette boutique, nous souhaitons apporter à chacun la possibilité d'embellir son chez et le transformer en un petit paradis.
               </p>
            </div> 

            <div>
            <div> 
            <img style={{"width": "50%","height": "400px"}} src={"./Images/Plantes-Apropos4.png"} />
            </div>
            </div>
        </div>

    </>
    )
}

export default Apropos;