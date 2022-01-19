import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { MoviePage } from "types/movie";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    //Estado pra guardar no componente a página que foi carregada

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true, //informa se é a ultima página
        totalPages: 0,
        totalElements: 0,
        size: 12, //tamanho da página
        number: 0, //número da página que eu estou
        first: true, //È a primeira página ?
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => { //Executa a função somente na hora que carregar o componente, não executando mais de uma vez. Estou colocando a função dentro de um hook, amarrando a execução dentro do ciclo de vida do componente
        //Garantir que os dados vão retornar a busca sempre na mesma ordem, coloque o parâmetro de ordenação &sort=id
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage; //Pega o corpo da resposta como sendo um MoviePage
                setPage(data);
                //O resultado dessa requisição é uma promisse
                //.get é uma operação assíncrona
                //Quando chegar a resposta, então (.then)
            });
    }, [pageNumber]); //Quando mudar o pageNumber eu vou fazer a requisição novamente

    /*O primeiro argumento do useEffect recebe uma função para ser executada, o segundo argumento é uma lista de objetos a ser observados. Sempre que alterar algo nos objetos, executa a função novamente */

    //Função que muda a página
    //Sempre que eu chamar a função com o novo número de páginas, ele vai no useState e atualiza o valor dele
    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>

        // className="row" organiza os componentes em linha e "col" em coluna

        //Por padrão o col total é 12

        //div className="col-sm-6"
        /*Esse div irá ocupar 6 colunas das 12 colunas do grid system do bootstrap ou seja cada card irá ocupar metade do meu container do bootstrap */

        /*Bootstrap Breakpoints */

        /*A partir da largura lg que é 992px, cada card vai ocupar 4 das 12 colunas, resultando em 3 cards por linha*/
        <>
            <Pagination page={page} onChange={handlePageChange}/>
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;