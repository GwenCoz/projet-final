import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

  

export class CarouselDemo extends Component {  
    render() {  

        return (  

            <div>  

                <div className='container-fluid' >  
                    <div className="row title" style={{ marginBottom: "20px" }} >  
                        <div className="col-sm-12 btn btn-warning">  

                            Livraison des fleurs partout en France

                        </div>
                    </div>
                </div>  

                <div className='container-fluid' >  
                    <Carousel interval={1200} keyboard={false}>  
                        <Carousel.Item style={{'height':"400px"}}  >  
                            <img className="d-block w-100" src={"/Images/Caroussel-1.jpg"} /> 
                            <Carousel.Caption/>  
                        </Carousel.Item  >  

                        <Carousel.Item style={{'height':"400px"}}> 
                            <img className="d-block w-100"  src={"/Images/Caroussel-2.jpg"}  />  
                            <Carousel.Caption/>  
                        </Carousel.Item>  

                        <Carousel.Item style={{'height':"300px"}}>  
                            <img className="d-block w-100" src={"/Images/Caroussel-3.jpg"}    />  
                            <Carousel.Caption/>  
                        </Carousel.Item>  
                    </Carousel>  
                </div>  

            </div>  
        )  
    }  
}  

export default CarouselDemo;  