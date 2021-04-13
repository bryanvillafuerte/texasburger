import './styles/App.scss';
import Layout from './components/Layout'
import HeaderBanner from './components/HeaderBanner'
import BurgerSection from './components/BurgerSection'
import HeroSection from './components/HeroSection'
import SubscribeSection from './components/SubscribeSection'

function App() {
  return (
    <Layout>
      <HeaderBanner />

      <BurgerSection />
      
      <HeroSection />

      <SubscribeSection />
    </Layout>
  );
}

export default App;
