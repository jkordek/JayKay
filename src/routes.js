import App from './components/App';
import Main from './components/pages/Main';
import News from './components/common/panels/News/News';
import FacilityData from './components/common/panels/FacilityData/FacilityData';
import AddFacility from './components/common/panels/FacilityData/AddFacility';
import Documents from './components/common/panels/Documents/Documents';
import NewsItem from './components/common/panels/News/NewsItem';
import NewsForm from './components/common/panels/News/NewsForm';
import Finances from './components/common/panels/Finances/Finances';
import Monthly from './components/common/panels/Finances/plans/Monthly';
import Users from './components/common/panels/Users/Users';
import AddUser from './components/common/panels/Users/AddUser';

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
        path: '/panels/News/NewsForm',
        exact: true,
        component: NewsForm,
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
      {
        path: '/panels/News/NewsItem',
        exact: true,
        component: NewsItem,
      },
      {
        path: '/panels/Finances/Finances',
        exact: true,
        component: Finances,
      },
      {
        path: '/panels/Finances/plans/Monthly',
        exact: true,
        component: Monthly,
      },
      {
        path: '/panels/Users/Users',
        exact: true,
        component: Users,
      },
      {
        path: '/panels/Users/AddUser',
        exact: true,
        component: AddUser,
      }
    ],
  }
];

export default routes;
