import React from 'react';
import { Route, IndexRoute } from 'react-router';

import NotFoundPage from './Components/NotFound';
import LoginPage from './Components/Login/LoginPage';
import HomePage from './Components/Home/HomePage';
import empty from './Components/layouts/empty';
import WatchVideo from './Components/Home/VideoPlayer';

export default (
	<Route>
		<Route path="/" component={empty}>
			<IndexRoute component={LoginPage} />
			<Route path="/Home" component={HomePage} />
			<Route path="/watch/:videoId" component={WatchVideo} />

		</Route>
		<Route path="*" component={NotFoundPage} />
	</Route>
);