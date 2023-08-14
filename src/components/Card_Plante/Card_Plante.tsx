import { Plante } from "./Plante";
import { Outlet, Link } from "react-router-dom";
import "./Card_Plante.css"
import Affichage_article from "./Affichage_article";


function Card_Plante(p: Plante) {

    return (
        <>
            <div id="Card_Fond">
                <div id="Card_Image_Div">
                    <img id="Card_Image" src={p.imgpath} />
                </div>
                <div className="card-body">
                    <p id="Card_Name">{p.Nom}</p>
                    <a href={`page_article/${p.id}`}>{p.Nom}</a>
                    {/* <Link to={`/page_article2/${p.Nom}`} state={p}>{p.Nom}</Link> */}

                </div>

            </div>

        </>
    )
}

export default Card_Plante;