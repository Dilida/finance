import { Helmet } from 'react-helmet'

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>金融監督管理委員會檢查局 e化金檢知網-{title}</title>
    </Helmet>
  )
}

export default Meta
