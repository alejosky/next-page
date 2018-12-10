import Header from './header'
import Footer from './footer'

const Layout = (props) => (
  <div className="layout">
    <Header author="Alejandro" frontAlt={props.frontAlt} />
    <Footer />
    {props.children}
  </div>
)

export default Layout