import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css';

//O componente FormCard é responsável por renderizar o formulário
type Props = {
    movieId: string;
}

function FormCard( { movieId } : Props) {
    
    //Objeto que Serve como redirecionamento de rota
    const navigate = useNavigate();

    //Busca do backend o filme a partir do ID
    const [movie, setMovie] = useState<Movie>();

    useEffect(() =>{
        //Faz uma requisição específica do id informado
        axios.get(`${BASE_URL}/movies/${movieId}`).then(response =>{
            //Pega o corpo da resposta e seta no estadio movie
            setMovie(response.data);
        });
    }, [movieId]);

    // ? = Se o objeto existir, pegue o valor, se não existir, não pega nada

    //Capturar os dados do formulário
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        // Parar o evenio padrão
        event.preventDefault(); //impedi que o formulário seja enviado
        const email = (event.target as any)
        .email.value; // any -> qualquer tipo, pois é um objeto de javascript
        const score = (event.target as any)
        .score.value;

        //Se não validar o email
        if(!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        //Fazer a requisição de put
        axios(config).then(response => {
            //console.log(response.data);
            navigate("/");
        })
    
    }
    
    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default FormCard;