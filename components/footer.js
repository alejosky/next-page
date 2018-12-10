import ExternalLink from '../components/link.js'

const currentYear = (new Date()).getFullYear();

const Footer = (props) => (
    <footer style={{textAlign: 'center', position: 'relative'}}>
        <h2>Some of my work</h2>

        <ExternalLink url="admorris.com" title="admorris"/>
        <ExternalLink url="loden-kern.at" title="Lodenkern"/>
        <ExternalLink url="theresienoptik.at" title="Theresienoptik"/>
        <ExternalLink url="1000fliegen.at" title="1000fliegen"/>
        <ExternalLink url="tresoro.at" title="Tresoro"/>
        <ExternalLink url="wlan.tirol" title="Wlan Tirol"/>
        <ExternalLink url="lamprechter.com" title="Lamprechter"/>

        <p className="muted bottom"><small>Made with &#9825; in Innsbruck &copy; {currentYear}. <a class="link" href="mailto:alejo.ch.oso@gmail.com">Email me.</a></small></p>
    </footer>
)

export default Footer