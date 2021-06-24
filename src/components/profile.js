import React from "react";
import './profile.css';
import Education from './education';
import Introduction from './intro';
import Contact from './contact';
import Experience from './experience';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
      <Router>
    <div id="container">

                <header>
                    <div className="quoteoftheday">Profile</div>
                    <div className="name">Anu<span>sha.</span></div>
                </header>

                <article>

                    <div className="quote">
                        <h1><span>A Coders Life:</span> Problematic but Charismatic.</h1>
                    </div>

                    <div className="quoteby">
                        <h4>Anusha Saad</h4>
                    </div>

                </article>

                <footer>

                    <div className="skills">
                        <h6>Menu</h6>
                        <ul>
                            <li><Link to="/">Introduction</Link></li>
                            <li><Link to="education">Education</Link></li>
                            <li><Link to="/experience">Professional Experience</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
    
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <Introduction />
                        </Route>
                        <Route path="/education">
                            <Education />
                        </Route>
                        <Route path="/experience">
                            <Experience />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                </Switch>

                </footer>
            </div>
            </Router>
  );
}
