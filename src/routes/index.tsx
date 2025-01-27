import { Routes, Route } from 'react-router-dom'
import { PageHome, PageLayout, PageEffects, PageInstruments } from '../pages'

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route path="" element={<PageHome />} />
                <Route path="/effects" element={<PageEffects />} />
                <Route path="/instruments" element={<PageInstruments />} />
            </Route>
        </Routes>
    )
}