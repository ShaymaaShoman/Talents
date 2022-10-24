import React from 'react'
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import './Home.css'
const Home = () => {
  return (
    <>
    <NavBar/>
    <h2 className='center'>Verification</h2>
    <div className='row-wrapper'>
    <section className='request'>
    <p>To use our services, We need to verify your <br/>
account</p>


<button className="ContinueBtn" type="submit">Continue</button>
</section>
  </div>
    <Footer/>
  </>
  )
}

export default Home;
// <div className='Header'><Header/>
// <Header/>
// <Header/>
// <Header/></div>