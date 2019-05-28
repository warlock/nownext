import Link from 'next/link'

export default () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>index</a>
        </Link>
      </div>
      <div>
        <p>This is the about page</p>
      </div>
    </div>
  )
}
