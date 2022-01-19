import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    //Pega o parâmetro da requisição
    const params = useParams();

    return (
        //Repassa o parâmetro pro FormCard
       <FormCard movieId={`${params.movieId}`} />
    );
}

export default Form;