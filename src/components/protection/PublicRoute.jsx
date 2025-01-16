import { isAuthenticated } from "@/lib/helper";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated();
      setAuthStatus(isAuth);
    };

    checkAuth();
  }, []);

  if (authStatus === null) {
    return <div>Loading...</div>;
  }

  if (authStatus) {
    return <Navigate to="/customer" />;
  }

  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
