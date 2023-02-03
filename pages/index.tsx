import Head from 'next/head'
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header'
import useMediaQuery from '../hooks/useMediaQuery';

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        console.log("scrolling...")
        setIsTopOfPage(false)
      };
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-deep-blue text-white z-0">
      <Head>
        <title>the Amelia Douglas Institute</title>
      </Head>

      {/* Header */}
      <Header isTopOfPage={isTopOfPage} />
      
      {/* Hero */}
      <section id="hero" className='snap-center min-h-screen'>
        
      </section>
      
      {/* Content */}
      <section id="content" className="min-h-screen">

      </section>

      {/* Footer */}
      <Footer />



    </div>
  )
}
