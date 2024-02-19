import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import ButtonPage from './Pages/ButtonPage'
import TimePage from './Pages/TimePage'
import FormPage from './Pages/FormPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/time" element={<TimePage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path="*" element={<h1>Извините, такой страницы не существует=(</h1>} />
      </Routes>
    </>
  )
}

export default App
