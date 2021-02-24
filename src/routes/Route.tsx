import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps
} from 'react-router-dom';

import { useAuth } from 'hooks/AuthContext';
import { parseToHsl } from 'polished';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate, component: Component, ...rest }: RouteProps): JSX.Element => {
  const { user } = useAuth();

  function isSigned(): boolean {
    return !!user;
  }

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === isSigned()) {
          return <Component />;
        }

        const pathname = isPrivate ? '/' : '/dashboard';

        return <Redirect to={{ pathname, state: { from: location } }} />;
      }}
    />
  );
};

Route.defaultProps = {
  isPrivate: false
};

export default Route;
