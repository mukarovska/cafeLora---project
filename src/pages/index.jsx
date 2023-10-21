import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drinksObj = data.result;

document.querySelector('#root').innerHTML = render(
  <div className="page" id="home">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinksObj} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

//NAVIGACE OTEVÍRÁNÍ A ZAVÍRÁNÍ
document.querySelector('.nav-btn').addEventListener('click', (event) => {
  const rolloutNavElement = document.querySelector('.rollout-nav');
  rolloutNavElement.classList.toggle('nav-closed');
  rolloutNavElement.addEventListener('click', (event) => {
    rolloutNavElement.classList.add('nav-closed');
  });
});
