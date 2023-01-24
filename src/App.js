import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <Link to="/catalog">
          {' '}
          <h1>Library Catalog</h1>{' '}
        </Link>
        <Switch>
          <Route exact path="/catalog">
            <BookList />
          </Route>
          <Route path="/books/:id">
            <BookDetail />
          </Route>
          <Route path="*">
            <Redirect to="/catalog" />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
