import Link from 'next/link'

const ExternalLink = (props) => (
    <Link href={'http://' + props.url}>
      <a className="link" target="_blank">  &#x2022; {props.title}</a>
    </Link>
)

export default ExternalLink