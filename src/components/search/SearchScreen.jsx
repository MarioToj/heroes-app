import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useForm } from '../../Hoooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCards } from '../hero/HeroCards';



 
const queryString = require('query-string'); 
export const SearchScreen = () => {
 
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
 
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    const heroesFilter = useMemo( () => getHeroesByName(q), [q] )

    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
          navigate(`?q=${ searchText }`)
    }

    return (
        <>
            <h1>Búsqueda</h1>
            <hr />

            <div className="row">

                <div className="col-5">

                    <h4>Buscar</h4>
                    <hr />

                    <form
                    onSubmit={ handleSearch }>

                        <input type="text"
                        placeholder="Buscar Héroe" 
                        className="form-control"
                        name= "searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }/>

                        <button
                        className="btn btn-outline-primary mt-1"
                        type="submit"
                        onClick={ handleSearch }>
                            Buscar...
                        </button>

                    </form>


                </div>

                <div className="col-7">

                    <h4>Resultados</h4>
                    <hr />

                    {

                        (q === '')
                            ? <div className="alert alert-info"> Buscar un héroe </div>
                            : ( heroesFilter.length === 0  )
                            && <div className="alert alert-danger"> No hay resultados: { q } </div>

                    }

                    {

                        heroesFilter.map(hero => (
                            <HeroCards 
                            key={ hero.id }
                            { ...hero } />

                        ))

                    }
                
                </div>

            </div>

        </>
    )
}
