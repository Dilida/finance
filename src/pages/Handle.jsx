import Header from '../components/Header'
import Meta from '../components/Meta'

const Handle = () => {
  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Handle
