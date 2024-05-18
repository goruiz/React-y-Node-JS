import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Container } from '@mui/material';
import Menu from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} /> {/* LLama al componente TaskList y mmuestra su contenido */}
          <Route path="/tasks/new" element={<TaskForm />} />
          {/* falta la ruta de editar */}
        </Routes>
      </Container>

    </BrowserRouter>
  )
}
