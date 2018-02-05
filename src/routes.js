import App from './components/App';
import Main from './components/pages/Main';
import News from './components/common/panels/News/News';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Main,
      },
      {
        path: '/panels/News/News',
        exact: true,
        component: News,
      }
    ],
  }
];

export default routes;
