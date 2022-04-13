import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import Detail from './screens/detail/Detail';
import moviesData from './assets/moviesData';
import artists from './assets/artists';
import genre from './assets/genre';
function App() {
  return (
    <div className="App">
        <Router>
			<Routes>
				<Route exact path="/"
					   element={
					       <Home moviesData={moviesData}
						   		 genres={genre}
								 artists={artists}
						   />
					   }
				/>
				<Route exact path="/detail" element={<Detail />} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
