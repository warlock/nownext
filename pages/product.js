import Link from 'next/link'

const Product = ({ name }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>index</a>
        </Link>
      </div>
      <div>
        <p>product {name}</p>
      </div>
    </div>
  )
}

Product.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default Product
