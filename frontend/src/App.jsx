import {Routes , Route} from 'react-router';
import routes from './routes';


const App = () => {
  return (
    <div>
      <Routes>
        {
          routes.map((item , index)=> <Route key={index} path={item.path} element={item.element} />)
        }
      </Routes>
    </div>
  )
}

export default App
