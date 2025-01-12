import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
