import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivetRoutes = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    const location = useLocation();

    if (loadding) {
        return <progress className="progress w-2/4 mx-auto mt-96"></progress>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivetRoutes;