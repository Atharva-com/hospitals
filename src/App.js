import './App.css';
import React , { useState } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client";
import Form from './components/Form';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Steps from './components/Steps';
import Issue from './components/Issue';
import Faq from './components/Faq';
import Footer from './components/Footer';
import HospList from './components/HospList';
import About from './components/About';
import ReportForm from './components/ReportForm';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState('10')
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar setProgress={setProgress} title="Care.in" about="About" />
      <LoadingBar
        color='#f11946'
        progress= {progress}
        onLoaderFinished={() => progress(10)}
      />
      <Form setProgress={setProgress}/>
      <Steps setProgress={setProgress}/>
      <Issue setProgress={setProgress}/>
      <Faq setProgress={setProgress} style={{position: 'relative', top: '20rem',height: '100vh'}}/>
      <Footer setProgress={setProgress} style={{ width: '100%', position: 'relative', top: '20rem', marginBottom: '2rem' }}/>
      </>,
      
    },
    {
      path: "/Login",
      element: <><Navbar title="Care.in" about="About" />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Login setProgress={setProgress}/>
      </>,
    },
    {
      path: "/HospList",
      element: <><Navbar title="Care.in" about="About" />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <HospList setProgress={setProgress}/>
      </>,
    },
    {
      path: "/About",
      element: <><Navbar title="Care.in" about="About" />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <About setProgress={setProgress}/>
        <Footer setProgress={setProgress} style={{ width: '100%', position: 'relative', top: '40rem', marginBottom: '2rem' }}/>
      </>,
    },
    {
      path: "/Faq",
      element: <><Navbar title="Care.in" about="About" />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Faq style={{position: 'relative', top: '5rem',height: '70vh'}} setProgress={setProgress}/>
        <Footer setProgress={setProgress} style={{ width: '100%', position: 'relative', top: '10rem', marginBottom: '2rem' }}/>
      </>,
    },
    {
      path: "/ReportForm",
      element: <><Navbar title="Care.in" about="About" />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <ReportForm setProgress={setProgress}/>
        <Footer setProgress={setProgress} style={{ width: '100%', position: 'relative', top: '10rem', marginBottom: '2rem'}}/>
      </>,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  
}



export default App;
