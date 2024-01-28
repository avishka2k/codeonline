import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Chart'));
const AllBlogs = lazy(() => import('../pages/VM/VMDetails'));
const VMCreate = lazy(() => import('../pages/VM/VMCreate'));
const VMDetails = lazy(() => import('../pages/VM/VMDetails'));
const Category = lazy(() => import('../pages/Category/Category'));
const Profile = lazy(() => import('../pages/Profile'));
const Blank = lazy(() => import('../pages/Blank'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/blogs/all-blogs',
    title: 'Forms Elements',
    component: AllBlogs,
  },
  {
    path: '/virtualmachine/vm-create',
    title: 'Create',
    component: VMCreate,
  },
  {
    path: '/virtualmachine/vm-details',
    title: 'Details',
    component: VMDetails,
  },
  {
    path: '/category',
    title: 'Category',
    component: Category,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/blank',
    title: 'Blank',
    component: Blank,
  },
];

const routes = [...coreRoutes];
export default routes;
