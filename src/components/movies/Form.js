import { useNavigate, useParams } from "react-router-dom";
import MovieForm from './MovieForm';

export default function Form() {

    const navigate = useNavigate();
    const { id } = useParams();

    if (id) {

        return <MovieForm method='PUT' id={id} navigate={navigate} />
    }
    else {
        
        return <MovieForm method='POST' navigate={navigate} />
    }
}