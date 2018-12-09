import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

import { Navbar, NavBarBrand } from 'reactstrap';

export default function App() {
  return (
    // <div style={s.root}>
    //   <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
    //   <Interactive
    //     as="a"
    //     href="https://github.com/rafrex/spa-github-pages"
    //     style={s.repoLink}
    //     {...s.link}
    //   >https://github.com/rafrex/spa-github-pages</Interactive>

    //   <nav style={s.breadcrumbs}>
    //     <Breadcrumbs />
    //   </nav>

    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/example" component={ExampleComponent} />
    //     <Route component={PageNotFound} />
    //   </Switch>

    //   <div style={s.creditLine}>
    //     <Interactive
    //       as="a"
    //       href="http://www.rafaelpedicini.com"
    //       interactiveChild
    //       focus={{}}
    //       touchActive={{}}
    //       touchActiveTapOnly
    //     >
    //       Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
    //     </Interactive>
    //   </div>
    // </div>
    <div>

    <div class="jumbotron">
        <h1 class="display-4">Amazing React, Bootstrap and Webpack</h1>
        <p class="lead">Created with love</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out
            within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>

  </div>
  );
}
