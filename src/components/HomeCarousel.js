import Carousel from 'react-bootstrap/Carousel';

function CarouselDemo () {  
    
        return (  
            <div style={{"padding":"10px"}}>
            <div style={{"maxWidth":"1250px","margin":"auto","padding":"10px","backgroundColor":"rgba(250, 235, 215,0.5)", "borderRadius":"10px","border": "rgba(250, 235, 215, 0.75) 2px solid"}}>  

                <Carousel interval={1200} keyboard={false} pauseonhover="true">  
                    <Carousel.Item style={{'height':"400px"}}  >  
                        <img style={{"objectFit": "cover", "width": "100%","height": "400px"}} src={"./Images/Caroussel-1.jpg"} alt = "Fleur de saison"  />  
                        <Carousel.Caption/>  
                    </Carousel.Item  >  

                    <Carousel.Item style={{'height':"400px"}} > 
                        <img style={{"objectFit": "cover", "width": "100%","height": "400px"}} src={"./Images/Caroussel-2.jpg"} alt = "Fleur de saison"  />  
                        <Carousel.Caption/>  
                    </Carousel.Item>  

                    <Carousel.Item style={{'height':"400px"}} >  
                        <img style={{"objectFit": "cover", "width": "100%","height": "400px"}} src={"./Images/Caroussel-3.jpg"} alt = "Fleur de saison"   />  
                        <Carousel.Caption/>  
                    </Carousel.Item>  
                </Carousel>  

            </div>
            </div> 
        )  
    
}  

export default CarouselDemo;  