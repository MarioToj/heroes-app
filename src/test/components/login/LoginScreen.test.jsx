
import { MemoryRouter, Routes, Route } from "react-router"
import { mount } from "enzyme"
import { AuthContext } from "../../../auth/authContext"
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../types/types"

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <LoginScreen/>', () => {
    
    const contexValue = {
        dispatch: jest.fn(),
        user:{

            logged: false

        }

    }

    const wrapper = mount(

        <AuthContext.Provider value={ contexValue } >

            <MemoryRouter initialEntries={['/login']} >
                <Routes>
                    <Route path='/login' element={<LoginScreen/>}/>
                    
                </Routes>
            </MemoryRouter>

        </AuthContext.Provider>

    )

        test('debe de hacer match con el snapshot ', () => {
            
            expect( wrapper ).toMatchSnapshot()

        })

        test('debe de realizar el dispatch ', () => {
            
            const handleClick = wrapper.find('button').prop('onClick')
            handleClick()

            expect( contexValue.dispatch ).toHaveBeenCalledWith({
                type: types.login,
                payload: { name: "Mario" }
            }) 

            expect( mockNavigate ).toHaveBeenCalledWith( '/marvel', { replace: true } ) 

        })
        

})