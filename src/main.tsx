import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	Films,
	Home,
	NotFoundPage,
	People,
	Planets,
	Species,
	Starships,
	Vehicles,
} from '@/pages';
import { Layout } from '@features/ui/layout';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='category'>
					<Route path='people' element={<People />} />
					<Route path='planets' element={<Planets />}></Route>
					<Route path='films' element={<Films />}></Route>
					<Route path='species' element={<Species />}></Route>
					<Route path='vehicles' element={<Vehicles />}></Route>
					<Route path='starships' element={<Starships />}></Route>
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);
