import { AppBar, Button, Box, Typography, Toolbar, Container } from "@mui/material" // Importa componentes de la librería Material-UI para diseñar la interfaz
import { Link, useNavigate } from "react-router-dom" // Importa componentes para navegación de React Router

export default function NavBar() {
  // Hook de React Router para navegación programática
  const navigatev = useNavigate();

  return (
    <div>
      {/* Box permite abarcar el ancho disponible de la pantalla */}
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar es la barra de navegación, con posición estática y color transparente */}
        <AppBar position="static" color="transparent">
          {/* Container alinea el contenido de la barra */}
          <Container>
            {/* Toolbar organiza los elementos dentro de la barra */}
            <Toolbar>
              {/* Typography para el título, con flexGrow para ocupar el espacio disponible */}
              <Typography variante="h6" sx={{ flexGrow: 1 }}>
                {/* Link de React Router para redireccionar a la página principal */}
                <Link to="/" style={{textDecoration: "none"}}> Pern Stack</Link>
              </Typography>
              {/* Button que redirige a la página de creación de tareas al hacer clic */}
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigatev("/tasks/new")}
              >
                New Task
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
