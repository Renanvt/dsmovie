import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { MoviePage } from "types/movie";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber ] = useState(0);

    useEffect(() => { //Executa a função somente na hora que carregar o componente, não executando mais de uma vez. Estou colocando a função dentro de um hook, amarrando a execução dentro do ciclo de vida do componente
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number); 
            //imprime na tela o page number

            
    //O resultado dessa requisição é uma promisse
    //.get é uma operação assíncrona
    //Quando chegar a resposta, então (.then)
        });
    }, []);
    /*O primeiro argumento do useEffect recebe uma função para ser executada, o segundo argumento é uma lista de objetos a ser observados. Sempre que alterar algo nos objetos, executa a função novamente */
    // FORMA ERRADA
   


    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>

        // className="row" organiza os componentes em linha e "col" em coluna

        //Por padrão o col total é 12

        //div className="col-sm-6"
        /*Esse div irá ocupar 6 colunas das 12 colunas do grid system do bootstrap ou seja cada card irá ocupar metade do meu container do bootstrap */

        /*Bootstrap Breakpoints */

        /*A partir da largura lg que é 992px, cada card vai ocupar 4 das 12 colunas, resultando em 3 cards por linha*/
        <>
        <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;