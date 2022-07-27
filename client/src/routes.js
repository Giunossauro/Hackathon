import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './webPages/LandingPage';
import Registration from './webPages/Registration';
import Profile from './webPages/Profile';
import ProfileUsers from './webPages/ProfileUsers';
import ProfileTeachers from './webPages/ProfileTeachers';
import ProfileModules from './webPages/ProfileModules';
import Search from './webPages/Search.js';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Navigate to='/home' replace />} />
				<Route path='/home' element={<LandingPage />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/profile' element={<Profile />}>
                    <Route path='/profile/users' element={<ProfileUsers />} />
                    <Route path='/profile/teachers' element={<ProfileTeachers />} />
                    <Route path='/profile/modules' element={<ProfileModules />} />
                </Route>
                <Route path='/search' element={<Search />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router;