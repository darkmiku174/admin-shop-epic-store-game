import React from 'react';
import GamesManagement from './components/games_management';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <GamesManagement />
    }
];

export default routes;