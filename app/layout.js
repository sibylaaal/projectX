import Footer from './componenets/footer'
import Navbar from './componenets/header'
import './globals.css'
import { Inter } from 'next/font/google'
import store from './componenets/redux/store/store'
import ProviderRedux from './provider/provider'
import { Children } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Docura',
  description: 'Docura application',
}

export default function RootLayout({ children }) {
  return (
<html lang="en">
<body >    

<ProviderRedux data={children}/>
<footer>
</footer>
</body>
</html>
  )
}
