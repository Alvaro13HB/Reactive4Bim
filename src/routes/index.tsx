import { Routes, Route } from 'react-router-dom'
import { PageHome, PageLayout, PageEffects, PageInstruments, PageCadastrar, PageLogin, PageAdm, PageAandC } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route path="" element={<PageHome />} />
                <Route path="/cadastro" element={<PageCadastrar />} />
                <Route path="/login" element={<PageLogin />} />
                <Route path="/adm" element={<ProtectedRoute />}>
                    <Route path="" element={<PageAdm />} />
                </Route>
                <Route path="/effects" element={<PageEffects />} />
                <Route path="/instruments" element={<PageInstruments />} />
                <Route path="/amps-and-cabinets" element={<PageAandC />} />
            </Route>
        </Routes>
    )
}