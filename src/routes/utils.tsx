import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

interface PrivateRouteParams extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
}

export function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteParams) {
  const { keycloak } = useKeycloak()

  return (
    <Route
      {...rest}
      render={(props) =>
        keycloak?.authenticated ? (
            <Component {...props} />
        ) : (
            keycloak.login()
        )
      }
    />
  )
}
