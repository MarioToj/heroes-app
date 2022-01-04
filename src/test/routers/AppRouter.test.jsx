
import { AppRouter } from "../../routes/AppRouter";
import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router";


describe('Pruebas en <AppRouter />', () => {
    
    const contexValue = {

        user: {

            logged: false,
            name: 'Pepe'

        }

    }

    test('debe de mostrar el login si no está autenticado ', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter>
                <AppRouter/>
                </MemoryRouter>

            </AuthContext.Provider>
        )

        console.log( wrapper.html() );

    })
    

})
