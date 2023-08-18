import React from 'react'
// eslint-disable-next-line no-unused-vars
import CounterContainer from '../containers/CounterContainer'
// eslint-disable-next-line no-unused-vars
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Routers from './router'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: left;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Switch>
          {
            Routers.map((item) => (
                <Route path={item.path} component={item.component} key={item.path} />
              ))
          }
        </Switch>
      </Container>
    </Router>
  )
}

export default Routes
