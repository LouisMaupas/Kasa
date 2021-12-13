import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header'
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
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/lodging*" component={Lodging} />
                    <Route path="*" component={notFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;