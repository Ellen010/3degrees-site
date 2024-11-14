import Navbar from './components/Navbar';
import Canon from './components/Canon';
import Highlights from './components/Highlights';
// import Features from './components/Features';
// import HowItWorks from './components/HowItWorks';
// import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

 function App  () {

  return (
      <main className= 'bg-black'>
           <Navbar/>
           <Canon/>
           <Highlights/>
           {/*
           <Features />
           <HowItWorks />
           <Footer /> */}
      </main>
  )
}

export default Sentry.withProfiler(App);