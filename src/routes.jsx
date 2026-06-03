import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Genetics from './pages/Genetics/Genetics'
import Questions from './pages/Questions/Questions'
import Medical from './pages/Medical/Medical'
import Medication from './pages/Medication/Medication'
import DrugInteractions from './pages/DrugInteractions/DrugInteractions'
import Tips from './pages/Tips/Tips'
import Awareness from './pages/Awareness/Awareness'
import References from './pages/References/References'
import Contact from './pages/Contact/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'genetics', element: <Genetics /> },
      { path: 'questions', element: <Questions /> },
      { path: 'medical', element: <Medical /> },
      { path: 'medication', element: <Medication /> },
      { path: 'drug-interactions', element: <DrugInteractions /> },
      { path: 'tips', element: <Tips /> },
      { path: 'awareness', element: <Awareness /> },
      { path: 'references', element: <References /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <Navigate to="/contact" replace /> },
    ],
  },
])
