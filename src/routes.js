import App from './components/App';
import Main from './components/pages/Main';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Main,
      }
    ],
  }
];

export default routes;
