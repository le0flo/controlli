import './App.css'
import { Guide } from './components/Guide'
import { Link } from './components/Link'
import { News } from './components/News'
import { Title } from './components/Title'

export function App() {
  return (
    <>
      <Title />
      <Link />
      <Guide />
      <News />
    </>
  )
}
