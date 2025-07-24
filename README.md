Web turística originariamente creada en NextJS 14 y finalizada en NextJS 15 que implementa:

- Diseño responsive, estableciendo diferentes breakpoints y ajustando el CSS en todo momento
- Optimización del componente <Image /> de NextJS haciendo uso de lqip-modern para optimizar el tiempo de carga de las imágenes y reducir el LCP (Largest Contentful Paint)
- Librería de traducciones next-intl para manejar los diferentes idiomas de la web (castellano, inglés o cualquier idioma adicional que se quisiera añadir en un futuro) de manera sencilla y eficiente
- Uso de Leaflet para mostrar la ubicación de los monumentos en el mapa y mejorar así la experiencia de usuario.
- Creación y separación de componentes para mantener así un código limpio y modularizado.
- Creación y utilización de diferentes Hooks para conseguir un comportamiento óptimo y deseable de los distintos componentes
- Creación de middleware para redirigir al usuario en función de su idioma por defecto y limitar el acceso en caso de detectar muchas peticiones al mismo tiempo.
- Páginas not-found que mantienen el "look & feel" de la página, manteniendo el <Navbar /> y el <Footer /> con su idioma correspondiente
- Búsqueda de optimizar la web para obtener una buena puntuación de la herramienta de Google: Lighthouse. Llegando a obtener puntuaciones de 95+ sobre 100 en todos y cada uno de los aspectos que mide dicha herramienta

Si se quiere ver una demo, se puede acceder al siguiente enlace:
https://traveling-app-steel.vercel.app

![imagen](https://github.com/user-attachments/assets/e4ff2402-9b00-467e-9982-baae381e2d21)
