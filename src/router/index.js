
// Importamos componentes de rutas.
import HomeView from '../views/HomeView.vue';

// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

// Definimos componentes de rutas.
// Cada ruta debe mapear a un componente.
// Usamos Arrow Functions en los imports porque
// son funciones accedidas de forma asincrona.
const routes = [
  // Manejo de redirecciones.
  // se puede usar la ruta (path) o el nombre.
  // { path: '/home', redirect: '/' },
  { path: '/home', redirect: { name: 'home' } },
  // La diferencia principal entre los alias y 
  // las redirecciones, es que los alias quedan
  // en la ruta, es decir es otra ruta que solo cambia
  // su endpoint, pero muestra el mismo componente.
  //
  // Se puede usar un String si es necesario
  // solo un componente, y un Array si se usan varios.
  { 
    path: '/', 
    name: 'home', 
    component: HomeView, 
    alias: ['/inicio', '/home2'],
    meta: {
      requiresAuth: false, // Esta ruta no requiere autorización.
    },
  },
  { 
    path: '/session',
    // name: 'session', // si se nombra es necesario nombrar los hijos, recordar que se uso para las redirecciones.
    component: () => import('../views/SessionView.vue'),
    children: [
      {
        // Porque no se pasan parametros.
        // Y es la misma ruta principal.
        path: '',
        components: {
          // Componente por defecto.
          default: () => import('../views/LoginView.vue'),
          // Componente nombrado como register.
          register: () => import('../views/RegisterView.vue'),
        },
      },
    ] 
  },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  // Se pueden anidar rutas facilmente
  // con la palabra reservada children.
  // Notesé que se usa un componente distinto
  // para la ruta anidada.
  { 
    path: '/chats', 
    component: () => import('../views/ChatsView.vue'),
    meta: {
      requiresAuth: true, // Esta ruta requiere autorización.
      roles: ['admin'], // Solo admite el rol de 'admin'
    },
    children: [
      { 
        path: ':chatId', 
        component: () => import('../views/ChatView.vue'),
        // Habilitamos el uso de props.
        // props: true,
        //
        // Definimos un prop dinamico, que toma la ruta
        // y retorna el prop chatId
        props: (route) => {
          return {
            chatId: route.params.chatId
          }
        }
      }
    ]
  },
  // Podemo añadir dinamismo mediante parametros.
  // En este caso sería el path-parameter 'chatId'
  // { path: '/chats/:chatId', component: import('../views/ChatsView.vue') },
]

// Con createRouter,
// Creamos una instancia de ruta 
// y pasamos las opciones.
const router = createRouter({
  // history: createWebHistory(), // Crea un historial HTML5. Historial más común para aplicaciones de una sola página.
  //
  // Utiliza un carácter hash (#) antes de la URL real
  // que se pasa internamente.
  // Debido a que esta sección de la URL nunca se envía
  // al servidor, no requiere ningún tratamiento especial 
  // a nivel del servidor. 
  // Sin embargo, tiene un impacto negativo en el SEO. 
  // Si eso le preocupa, use el modo de historial de HTML5.
  //
  // Si el servidor falla, las rutas emuladas al ser ingresadas directamente
  // no van a poder acceder a la información, con el hash,
  // si pueden ser accedidas, esta es una de las facilidades
  // que brinda.
  history: createWebHashHistory(),
  routes,
})

// https://router.vuejs.org/guide/advanced/navigation-guards.html
// Las guardas de navegación se pueden usar para redirecciones programadas.
// validaciones, etc.
//
// Global antes de que se llame a los guardias
// en orden de creación, siempre que se active una navegación. 
// Las guardas se pueden resolver de forma asincrónica 
// y la navegación se considera pendiente antes de que 
// se hayan resuelto todos los ganchos.
router.beforeEach((to, from ) => {
  console.log(to, from)

  // Inspeccionamos los metadatos y 
  // realizamos acciones al respecto.
  // En este caso escribir en consola y una redirección.
  if (to.meta?.requiresAuth && to.meta?.roles && to.meta?.roles.includes('admin')) {
    console.log(to.path, 'requires auth')
    // return { name: 'session'} // Comentada para no interferir con el resto del curso.
  }

  // Redirige de la ruta 'home' a 'about'
  // if (to.path === '/') return '/about'
  // if (to.path === '/') return { name: 'about' }  // Comentada para no interferir con el resto del curso.

  return true
})

export default router;