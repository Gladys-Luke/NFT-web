import { Download, Features, SectionWrapper } from './components'
import assets from './assets'
import styles from './styles/Global';


const App = () => {
  return (
    <>
      <SectionWrapper 
        title='Your own store of Nifty NFTs. Start Selling and Growing.'
        description='Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million using Profnef Marketplace.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'

      />
      <SectionWrapper 
        title='Smart User Interface Marketplace'
        description='Experience buttery UI of Pronef NFT Marketplace. Smooth constant colors of a fluent UI design.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper 
        title='Deployment'
        description="ProNef is built using expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse

      />
      <SectionWrapper 
        title='Creative Way to Showcase the Store'
        description="The app contains two screens, the first screen lists all NFTs while the second screen shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />

      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>Designed by {' '}
        <span className='bold'>Samynaj</span>
        </p>
      </div>
    </>
  );
}

export default App;
