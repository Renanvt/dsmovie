import MovieStars from "components/MovieStars";
import Pagination from "components/Pagination";

function Listing() {
    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>
        <>
            <Pagination />
            <MovieStars />
            
        </>
      );
}

export default Listing;