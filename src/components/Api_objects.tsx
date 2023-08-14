export function Maplante2 () {

    const plante = fetch('http://localhost:52550/api/article/get/3').then((res) => res.json());



return (plante)
}

export function ListePlante () {

const plante = fetch('http://localhost:52550/api/article/get/').then((res) => res.json());



return (plante)
}


async function Maplante(id) {

const response = await fetch(`http://localhost:52550/api/article/get/${id}`).then((res) => res.json());
// Renvoyez les données récupérées
return response;
}

export default Maplante;