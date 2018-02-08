import App from './components/App';
import Main from './components/pages/Main';
import News from './components/common/panels/News/News';
import FacilityData from './components/common/panels/FacilityData/FacilityData';
import AddFacility from './components/common/panels/FacilityData/AddFacility';
import Documents from './components/common/panels/Documents/Documents';

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
      },
      {
        path: '/panels/FacilityData/FacilityData',
        exact: true,
        component: FacilityData,
      },
      {
        path: '/panels/FacilityData/AddFacility',
        exact: true,
        component: AddFacility,
      },
      {
        path: '/panels/Documents/Documents',
        exact: true,
        component: Documents,
      },
    ],
  }
];

export default routes;
