

import { MemoryRouter, Routes, Route } from "react-router"
import { mount } from "enzyme"
import { HeroScreen } from "../../../components/hero/HeroScreen"


const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('Pruebas en <HeroScreen/>', () => {
    
    test('no debe de mostrar hero screen si no hay un héroe en el URL ', () => {
        
        const wrapper = mount (

            <MemoryRouter initialEntries={['/heroe']}>
                <Routes>
                    <Route path='/heroe' element={<HeroScreen/>}/>
                    <Route path='/' element={<h1>No hero page</h1>}/>
                </Routes>
            </MemoryRouter>

        )

        expect( wrapper.find('h1').text().trim() ).toBe('No hero page')

    })
    

})
