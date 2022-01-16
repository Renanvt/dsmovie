import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {
    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>

        // className="row" organiza os componentes em linha e "col" em coluna

        //Por padrão o col total é 12

        //div className="col-sm-6"
        /*Esse div irá ocupar 6 colunas das 12 colunas do grid system do bootstrap ou seja cada card irá ocupar metade do meu container do bootstrap */

        /*Bootstrap Breakpoints */

        /*A partir da largura lg que é 992px, cada card vai ocupar 4 das 12 colunas, resultando em 3 cards por linha*/
        <>
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