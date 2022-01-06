import React from 'react';
import AddGame from './components/game/games_add';
import GamesManagement from './components/games_management';
import DetailGame from './components/game/game_detail';
import CollectionManagement from './components/collection_management';
import AddCollection from './components/collection/colllection_add';
import DetailCollection from './components/collection/collection_detail';
import UserManagement from './components/user_management';
import VoucherManagement from './components/vocher_management';
import OrderManagement from './components/order_management';
import CartManagement from './components/cart_management';
import DetailVocher from './components/vocher/vocher_detail';
import AddVocher from './components/vocher/vocher_add';

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
    {
        path: '/admin/game/:id',
        exact: false,
        main: ({ match }) => <DetailGame match={match} />
    },
    {
        path: '/collection_management',
        exact: false,
        main: () => <CollectionManagement />
    },
    {
        path: '/admin/add_collection',
        exact: false,
        main: () => <AddCollection />
    },
    {
        path: '/admin/collection/:id',
        exact: false,
        main: ({ match }) => <DetailCollection match={match} />
    },
    {
        path: '/user_management',
        exact: false,
        main: () => <UserManagement />
    },
    {
        path: '/vocher_management',
        exact: false,
        main: () => <VoucherManagement />
    },
    {
        path: '/admin/vocher/:id',
        exact: false,
        main: ({ match }) => <DetailVocher match={match} />
    },
    {
        path: '/admin/add_vocher',
        exact: false,
        main: () => <AddVocher />
    },
    {
        path: '/order_management',
        exact: false,
        main: () => <OrderManagement />
    },
    {
        path: '/cart_management',
        exact: false,
        main: () => <CartManagement />
    },
];

export default routes;