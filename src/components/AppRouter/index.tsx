import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, RouteNames } from '../../routes';

const AppRouter: FC = () => {
    return (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            ))}
            <Route path='*' element={<Navigate to={RouteNames.WEATHER} />} />
        </Routes>
    );
};

export default AppRouter;
