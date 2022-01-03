import React from 'react';
import AddGame from './components/game/games_add';
import GamesManagement from './components/games_management';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <GamesManagement />
    },
    {
        path: '/admin/add_game',
        exact: false,
        main: () => <AddGame />
    },
];

export default routes;