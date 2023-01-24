import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
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
