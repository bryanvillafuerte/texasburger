import './styles/App.scss';
import Layout from './components/Layout'
import HeaderBanner from './components/HeaderBanner'
import BurgerSection from './components/BurgerSection'
import BurgerSubSection from './components/BurgerSubSection'


function App() {
  return (
    <Layout>
      <HeaderBanner />

      <BurgerSection />
      <BurgerSubSection />
      
    </Layout>
  );
}

export default App;
