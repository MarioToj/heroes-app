
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroScreen = () => {

    const { heroeId } = useParams();

    const navigate = useNavigate();

    const handleReturn = () => {
            navigate(-1)
        
    }

    const hero = getHeroesById(heroeId)

    const { 
        id,
        superhero,
        publisher,
        alter_ego, 
        first_appearance,
        characters
 } = hero

    if (!hero) {
        return <Navigate to='/' />
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img src={ `/assets/${ id }.jpg` } 
                alt={ superhero }
                className="img-thumbnail"
                 />
            </div>

            <div className="col-8">

                <h3>{ superhero }</h3>

                <ul className="list-group list-group">
                    <li className="list-group-item"><b>Alter Ego</b> { alter_ego } </li>
                    <li className="list-group-item"><b>Publisher</b> { publisher } </li>
                    <li className="list-group-item"><b>Fisrts Aperarance</b> { first_appearance } </li>

                </ul>

                <h5>Characters</h5>
                <span>{ characters }</span>

                <button className="btn btn-outline-info"
                onClick={ handleReturn }>Regresar</button>

            </div>

        </div>
    )
}
