import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import notFound from './pages/NotFound'
import About from './pages/About'
import Lodging from './pages/Lodging'
// style sheet
import './App.scss'

function App() {
    return(
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/lodging*" component={Lodging} />
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={notFound} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;