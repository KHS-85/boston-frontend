import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import AdminLayout from './components/admin/layout/AdminLayout';
import Layout from './components/layout/Layout';
import Login from './components/auth/Login'
import ProductAdmin from './components/admin/ProductAdmin';
import Home from './components/pages/Home';
import AboutAdmin from './components/admin/AboutAdmin';
import SliderAdmin from './components/admin/SliderAdmin';
import ProductCreate from './components/admin/ProductCreate';
import ProductEdit from './components/admin/ProductEdit';
import AboutEdit from './components/admin/AboutEdit';
import ProductDelete from './components/admin/ProductDelete';

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Switch>

          {/* Admin */}
          <Route path="/Admin">
            <AdminLayout>
            <Route exact path="/Admin" component={Home} />
            <Route exact path="/Admin/Products" component={ProductAdmin} />
            <Route exact path="/Admin/ProductCreate" component={ProductCreate} />
            <Route exact path="/Admin/ProductEdit/:id" component={ProductEdit} />
            <Route exact path="/Admin/AboutEdit/:id" component={AboutEdit} />
            <Route exact path="/Admin/ProductDelete/:id" component={ProductDelete} />
            <Route exact path="/Admin/About" component={AboutAdmin} />
            <Route exact path="/Admin/Slider" component={SliderAdmin} />

            </AdminLayout>
          </Route>

          {/* Login */}
          <Route path="/login">
            <Login/>
          </Route>

          {/* Public */}
          <Route path="/">
            <Layout>
              
              <Home />

            </Layout>
          </Route>

        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;