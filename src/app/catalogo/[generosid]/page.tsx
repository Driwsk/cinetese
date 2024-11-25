export default function CatalogoGenero({ params }: {
    params: {catalogoGenero: String};
}){
    return <h1>Detalhes sobre obras {params.catalogoGenero}</h1>
}