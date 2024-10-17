// src/Routes.tsx
import React from 'react';
import { BrowserRouter, Route, Routes as AppRoutes} from 'react-router-dom';

import { Login as LoginPage } from '../pages/Login';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes>
               
                    <Route path="/login"  element={<LoginPage />} />
    
            </AppRoutes>
        </BrowserRouter>
    );
};

export { Routes };
