import { MemoryRouter, Routes, Route } from "react-router"
import { mount } from "enzyme"
import { AuthContext } from "../../../auth/authContext"
import { Navbar } from "../../../components/navbar/NavBar"
import { types } from "../../../types/types"

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <NavBar/>', () => {
    
    const contexValue = {
        dispatch: jest.fn(),
        user:{
            name: 'Mario',
            logged: true

        }

    }

    const wrapper = mount(

        <AuthContext.Provider value={ contexValue } >

            <MemoryRouter initialEntries={['/']} >
                <Routes>
                    <Route path='/' element={<Navbar/>}/>
                    
                </Routes>
            </MemoryRouter>

        </AuthContext.Provider>

    )

    test('debe de mostrar correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Mario')

    })
    
    test('debe de de llamar el logout, llamar el navigate y el dispacth con los argumentos', () => {
        
        wrapper.find('button').prop('onClick')()

        expect( contexValue.dispatch ).toHaveBeenCalledWith({'type': types.logout})
        expect( mockNavigate ).toHaveBeenCalledWith("/login", {"replace": true})

    })
    

})
