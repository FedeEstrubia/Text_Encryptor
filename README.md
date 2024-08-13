# Encriptador de Textos

Este es un proyecto que realice en mi paso por el programa "Oracle Next Education" de Alura. 

Se trata de un Encriptador/Desencriptador de Textos. 


# Usabilidad

Usted puede ingresar un texto y elegir Encriptarlo, luego compartir ese texto Encriptado con un tercero y esa persona podrá ingresar el texto Encriptado en la aplicación para poder Desencriptarlo y así descubrir el mensaje que estaba detras de esa encriptación.


# Funcionalidades

<h3>Creé 5 Variantes de colores para que el usuario pueda elegir cuál le agrada más.</h3>

<img src="./public/readmeContent/VariantesColores.png" alt="Variantes de Colores" /><br>
<img src="./public/readmeContent/LightBlue.png" alt="Variante Azul Claro" width="195"/>
<img src="./public/readmeContent/DarkBlue.png" alt="Variante Azul Oscuro" width="195"/>
<img src="./public/readmeContent/LightViolet.png" alt="Variante Violeta Claro" width="195"/>
<img src="./public/readmeContent/DarkViolet.png" alt="Variante Violeta Oscuro" width="195"/>
<img src="./public/readmeContent/LightOrange.png" alt="Variante Naranja Claro" width="195"/>

Esta elección se guarda en un LocalStorage así cuando el usuario vuelve a entrar a la aplicación se inicializa con los colores Elegidos en la sesión anterior.


<h3>Encriptación</h3>

Esta es la pantalla inicial de la aplicación, en la cuál al lado Derecho se mustra un texto con instrucciones.

<img src="./public/readmeContent/DarkBlue.png" alt="Inicio Aplicación" width="900" /><br>

El usuario Ingresa un Texto para ser Encriptado, y el texto e instrucciones del lado derecho Cambian.

<img src="./public/readmeContent/TextoIngresado.png" alt="Texto Ingresado" width="900" /><br>

Al presionar el Botón "CREAR ENIGMA" cambia nuevamente el texto del lado derecho, y proporciona el texto Encriptado.

<img src="./public/readmeContent/EncriptacionRealizada.png" alt="Encriptacion Realizada" width="900" /><br>

El usuario puede copiar el mensaje encriptado presionando el Botón "Copiar Enigma".

<img src="./public/readmeContent/CopiarMensaje.png" alt="Copiar Mensaje" width="400" /><br>

<h3>Desencriptación</h3>

De la misma manera el usuario puede ingresar un Texto Encriptado para descubrir el mensaje que cubre.

<img src="./public/readmeContent/DesencriptacionRealizada.png" alt="Desencriptación Realizada" width="900" /><br>


<h3>Tambien hice un Contador que funciona con LocalStorage y va decrementando a medida que el usuario realiza Encriptaciones o Desencriptaciones</h3>

<img src="./public/readmeContent/100-Encriptaciones.png" alt="Variante Naranja Claro" width="400"/>
<img src="./public/readmeContent/99-Encriptaciones.png" alt="Variante Naranja Claro" width="600"/>


# Puede utilizar la Aplicación en el siguiente enlace:
https://text-encryptor-fedeestrubia.netlify.app/

# Tecnologías Utilizadas

- Vite (Empaquetador de Archivos y Servidor de Desarrollo)
- React (Biblioteca Javascript)
- TailwindCSS (Framework CSS)
- Netlify (Alojamiento del Proyecto)
- GitHub (Repositorio del Proyecto)
- VSCode (Editor de Codigo)















- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
