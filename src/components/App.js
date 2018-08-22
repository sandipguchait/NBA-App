import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

//components
import Home from "./home";
import Footer from "./footer";
import Header from "./header";
import Teams from './teams';
import Team from './team';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component ={Home}/>
                <Route exact path="/teams" component={Teams}/>
                <Route exact path="/team/:id" component={Team}/>
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }
}
export default App;