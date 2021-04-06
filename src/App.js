import './styles/App.scss';
import Layout from './components/Layout'
import HeaderBanner from './components/HeaderBanner'
import BurgerSection from './components/BurgerSection'

function App() {
  return (
    <Layout>
      <HeaderBanner />

      <BurgerSection />
    </Layout>
  );
}

export default App;
