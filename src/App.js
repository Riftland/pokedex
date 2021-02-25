import { Switch, Route, Redirect } from 'react-router-dom'
import Search from './pages/search/Search'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/search">
          <Search />
        </Route>

        <Redirect to="/search" />
      </Switch>
    </div>
  )
}

export default App
