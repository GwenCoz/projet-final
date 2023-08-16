export function ListePlante () {

const plante = fetch('http://localhost:52550/api/article/get/').then((res) => res.json());



return (plante)
}


export async function Maplante(id) {

const response = await fetch(`http://localhost:52550/api/article/get/${id}`).then((res) => res.json());

return response;
}


