export function ListePlante () {

const plante = fetch('http://localhost:52550/api/article/get/').then((res) => res.json());



return (plante)
}


export function GetPlante(id) {

const response = fetch(`http://localhost:52550/api/article/get/${id}`).then((res) => res.json());

return response;
}

export function GetUtilisateur(email) {

    const response = fetch(`http://localhost:52550/api/client/Getbymail?email=${email}`).then((res) => res.json());
    
    return response;
    }

