import './styles/App.scss';
import Layout from './components/layout/Layout'
import HeaderBanner from './components/headerBanner/HeaderBanner'
import BurgerSection from './components/burgersection/BurgerSection'

function App() {
  return (
    <Layout>
      <HeaderBanner />

      <BurgerSection />
    </Layout>
  );
}

export default App;
