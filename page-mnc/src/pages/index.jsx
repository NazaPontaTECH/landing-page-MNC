import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Mission from "../components/Mission"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

export default function PageMNC() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Mission />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
