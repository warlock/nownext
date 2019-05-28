import App, { Container } from 'next/app'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import { SessionControl } from '../context/context'

class MyApp extends App {
  state = {
    guest: true,
    sessionLogin: token => {
      sessionStorage.setItem('ntk', token)
      this.setState({ guest: false })
    },
    sessionLogout: () => {
      sessionStorage.removeItem('ntk')
      this.setState({ guest: true })
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <SessionControl.Provider value={this.state}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </SessionControl.Provider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
