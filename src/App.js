import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Appointment from "./Pages/Appointment/Appointment";
import Footer from "./Pages/Shared/Footer/Footer";
import About from "./Pages/About/About/About";
import Department from "./Pages/Department/Department/Department";
import Contact from "./Pages/Contact/Contact";
import Details from "./Pages/Home/Details/Details";
import Register from "./Pages/Login/Register/Register";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <PrivateRoute exact path="/details/:detailsId">
                            <Details />
                        </PrivateRoute>
                        <PrivateRoute exact path="/department">
                            <Department />
                        </PrivateRoute>
                        <PrivateRoute exact path="/appointment">
                            <Appointment />
                        </PrivateRoute>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
