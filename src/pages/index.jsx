import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/header';
import { Subscription } from '../components/subscription';
import { WhyUs } from '../components/why-us';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    < Header />
    < Subscription />
    < WhyUs />
    < Footer />
  </div>
);
