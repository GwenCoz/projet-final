import Body from "../Body";
import CarouselDemo from "./HomeCarousel";


function Home(){

    return (
        <div>
             <h2 id="titre_home">Bienvenue chez MGR, magasin de plantes eco-responsable</h2>
          
               
                
           
            <CarouselDemo/>
            <p> Venez découvrir nos sélections de plantes à offrir ou à s'offrir. La livrasion s'effectue partout en France en quelque heures. Visitez nos magasins et discuter avec nos experts pour vous accompagner dans vos choix. 
                    Notre magasin nous propose une variété d'Alocasia: Alocasia Azlanii, Alocasia Gragon Scale, Alocasia Frydek, Alocasia Silver Dragon. Nos plantes ont été cultivées par des producteurs Européens selon des normes écologiques. </p>
            <Body/>
        </div>
       
);

}

export default Home;

