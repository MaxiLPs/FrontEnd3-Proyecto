import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Login', link: '/login' },
  ]

  return (
    <div>
      <header>
        <img src='/images/Logo FE3.png' alt='logo' />
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <form>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
          <button type='submit'>Login</button>
        </form>
      </main>
    </div>
    )
  
}

export default App
