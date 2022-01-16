import MovieScore from "components/MovieScore";
import Pagination from "components/Pagination";

function Listing() {
    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>
        <>
            <Pagination />
            <MovieScore />
            
        </>
      );
}

export default Listing;