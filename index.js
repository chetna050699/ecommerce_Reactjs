import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//dev-0mcvzbavr6nln4eq.us.auth0.com
//CG0nIN7iRK7Pe5DnpZgvg7aQHVJIOo7e
ReactDOM.render(
  <Auth0Provider
    domain={'dev-0mcvzbavr6nln4eq.us.auth0.com'}
    clientId={'CG0nIN7iRK7Pe5DnpZgvg7aQHVJIOo7e'}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById('root')
)
