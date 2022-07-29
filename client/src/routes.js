import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './webPages/LandingPage';
import Login from './webPages/Login';
import Registration from './webPages/Registration';
import Search from './webPages/Search';
import SearchUsers from './webPages/SearchUsers';
import SearchTeachers from './webPages/SearchTeachers';
import SearchCursos from './webPages/SearchCursos';


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Navigate to='/home' replace />} />
				<Route path='/home' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/search' element={<Search />} />
				<Route path='/search/users' element={<SearchUsers />} />
				<Route path='/search/teachers' element={<SearchTeachers />} />
				<Route path='/search/cursos' element={<SearchCursos />} />

				{/*  <Route path='/search' element={<Search />} /> */}
			</Routes>
		</BrowserRouter>
	)
}

export default Router;