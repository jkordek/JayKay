import App from './components/App';
import Main from './components/pages/Main';
import Auth from './components/pages/Auth';
import UserLoading from './components/pages/UserLoading';
import CreateStaff from './components/pages/CreateStaff';
import News from './components/common/panels/News/News';
import Calendar from './components/common/panels/Calendar/Calendar';
import FacilityData from './components/common/panels/FacilityData/FacilityData';
import AddFacility from './components/common/panels/FacilityData/AddFacility';
import Documents from './components/common/panels/Documents/Documents';
import NewsItem from './components/common/panels/News/NewsItem';
import NewsForm from './components/common/panels/News/NewsForm';
import Finances from './components/common/panels/Finances/Finances';
import AddRowMonthly from './components/common/panels/Finances/plans/AddRowMonthly';
import Monthly from './components/common/panels/Finances/plans/Monthly';
import Annualy from './components/common/panels/Finances/plans/Annualy';
import Plans from './components/common/panels/Finances/plans/Plans';
import MonthlyLevel from './components/common/panels/Finances/plans/MonthlyLevel';
import AnnualyLevel from './components/common/panels/Finances/plans/AnnualyLevel';
import Analize from './components/common/panels/Finances/plans/Analize';
import Users from './components/common/panels/Users/Users';
import AddUser from './components/common/panels/Users/AddUser';
import UserItem from './components/common/panels/Users/UserItem';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Auth,
      },
      {
        path: '/UserLoading',
        exact: true,
        component: UserLoading,
      },
      {
        path: '/CreateStaff',
        exact: true,
        component: CreateStaff,
      },
      {
        path: '/News',
        exact: true,
        component: News,
      },
      {
        path: '/CreateNews',
        exact: true,
        component: NewsForm,
      },
      {
        path: '/FacilityData',
        exact: true,
        component: FacilityData,
      },
      {
        path: '/AddFacility',
        exact: true,
        component: AddFacility,
      },
      {
        path: '/Documents',
        exact: true,
        component: Documents,
      },
      {
        path: '/News/NewsItem',
        exact: true,
        component: NewsItem,
      },
      {
        path: '/Finances',
        exact: true,
        component: Finances,
      },
      {
        path: '/Monthly',
        exact: true,
        component: Monthly,
      },
      {
        path: '/Annualy',
        exact: true,
        component: Annualy,
      },
      {
        path: '/Plans',
        exact: true,
        component: Plans,
      },
      {
        path: '/MonthlyLevel',
        exact: true,
        component: MonthlyLevel,
      },
      {
        path: '/AnnualyLevel',
        exact: true,
        component: AnnualyLevel,
      },
      {
        path: '/Analize',
        exact: true,
        component: Analize,
      },
      {
        path: '/AddService',
        exact: true,
        component: AddRowMonthly,
      },
      {
        path: '/Users',
        exact: true,
        component: Users,
      },
      {
        path: '/Users/AddUser',
        exact: true,
        component: AddUser,
      },
      {
        path: '/panels/Users/UserItem',
        exact: true,
        component: UserItem,
      }
    ],
  }
];

export default routes;
