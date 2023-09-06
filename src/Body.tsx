import Button from 'react-bootstrap/Button';
import React from 'react';

function Body(){
    return (
        <div style={{"display":"flex", "flexWrap": "nowrap", "justifyContent": "center", "alignContent": "stretch", margin:"10px 0"}}>
        <div  style={{margin:"0 40px",width:"400px",height:"400px",position: "relative", display:"flex", "justifyContent":"center"}}>
    
            <div style={{position: "relative", overflow: "hidden", borderRadius:"10px"}}>
                <img style={{objectFit: "cover", width: "100%",height: "400px"}} src="/Images/Plantes/Calathea_White_Fusion.jpg"/>
            </div>
            <p style={{padding:" 5px 3px",borderRadius:"10px",backgroundColor:"#ffffffd0" ,position:"absolute",bottom:"60px",width:"90%",fontSize:"1.02em"}}> Découvrez notre gamme de <strong> plantes intérieurs</strong> adaptées à tous les types d'intérieur et tous les budgets </p>
            <button id="btn_submit" style={{position:"absolute",bottom:"20px"}}> Plantes d'intérieur</button> 
        </div>

        <div  style={{margin:"0 40px", width:"400px",height:"400px",position: "relative", display:"flex", "justifyContent":"center"}}>
    
            <div style={{position: "relative", overflow: "hidden", borderRadius:"10px"}}>
                <img style={{objectFit: "cover", width: "100%",height: "400px"}} src="/Images/Plantes/Lilas.jpg"/>
            </div>
            <p style={{padding:" 5px 3px",borderRadius:"10px",backgroundColor:"#ffffffd0" ,position:"absolute",bottom:"60px",width:"90%",fontSize:"1.02em"}}> Découvrez notre selection de <strong> plantes extérieures</strong> pour embellir votre jardin et profiter de l'été. </p>
            <button id="btn_submit" style={{position:"absolute",bottom:"20px"}}> Plantes d'extérieur</button> 
        </div>
        </div>   
      
    );
}
export default Body;