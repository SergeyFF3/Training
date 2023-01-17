import React, {Suspense, useMemo } from 'react';
import {Route, Routes } from 'react-router-dom';
import {routeConfig} from "../router/routeConfig/routeConfig";

const AppRoutes = () => {

 const routes = useMemo(() => {
     return Object.values(routeConfig).filter(route => {
         if (route.authOnly) {
             return false
         }
         return true
     })
 }, [])

    return (
        <Routes >
            {routes.map(route => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <Suspense fallback='Loading...'>
                                {route.element}
                            </Suspense>
                        }
                    />
                )
            })}
        </Routes>
    );
};

export default React.memo(AppRoutes);