export function ListePlante () {

const plante = fetch('http://localhost:52550/api/article/get/').then((res) => res.json());



return (plante)
}


export function Maplante(id) {

const response = fetch(`http://localhost:52550/api/article/get/${id}`).then((res) => res.json());

return response;
}


