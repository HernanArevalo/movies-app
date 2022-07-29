import { Route, Routes, Navigate } from 'react-router-dom'
import { MoviePage, SearchPage } from '../pages'



export const MoviesRoutes = () => {
    return (
        <>
            <div className="container">
                <Routes>

                    <Route path="search" element={<SearchPage />} />
                    <Route path="movie" element={<MoviePage />} />

                    <Route path="/" element={<Navigate to='/movie' />} />

                </Routes>
            </div>
        </>  
    )
}