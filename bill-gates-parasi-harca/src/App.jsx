import './App.css'
import Banner from './components/Banner'
import TransactionList from './components/TransactionList'
import Money from './components/Money'
import Content from './components/Content'
import { useState, createContext } from 'react'

export const AppContext = createContext(null);

function App() {

  const [money, setMoney] = useState(100000000000);

  return (
    <AppContext.Provider value={{money, setMoney}}>
    <Banner />
    <Money />
    <Content/>
    <TransactionList />
    </AppContext.Provider>
  )
}

export default App