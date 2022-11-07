import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import './App.scss'
import Home from '../components/Home/Home'

//Config Router
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'*',
    element: <span>Not Found</span>
  }
])

//Config Apollo
const client = new ApolloClient({
  // link: new HttpLink({
  // }),
  uri:'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

function App() {

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} / >
    </ApolloProvider>
  )
}

export default App
