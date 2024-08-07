import {
  mdiAccountCheck,
  mdiAccountCircle,
  mdiAccountClock,
  mdiAccountGroup,
  mdiAccountStar,
  mdiAccountMultipleOutline,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
  mdiCreditCardSettingsOutline,
  mdiCarEstate,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/paycard',
    icon: mdiCreditCardSettingsOutline,
    label: 'Paycard',
  },

  {
    href: '/vehicles',
    icon: mdiCarEstate,
    label: 'Vehicles',
  },
  {
    label: 'Employees',
    icon: mdiAccountMultipleOutline,
    menu: [
      {
        href: '/employees/',
        label: 'Overview',
        icon: mdiAccountGroup,
      },
      {
        href: '/employees/shifts',
        label: 'Shifts',
        icon: mdiAccountClock,
      },
      {
        href: '/employees/schedules',
        label: 'Schedules',
        icon: mdiAccountCheck,
      },
      {
        href: '/employees/assessments',
        label: 'Assessments',
        icon: mdiAccountStar,
      },
    ],
  },
  {
    href: '/customers',
    label: 'Customers',
    icon: mdiTable,
  },
  {
    href: '/tables',
    label: 'Tables',
    icon: mdiTable,
  },
  {
    href: '/forms',
    label: 'Forms',
    icon: mdiSquareEditOutline,
  },
  {
    href: '/ui',
    label: 'UI',
    icon: mdiTelevisionGuide,
  },
  {
    href: '/responsive',
    label: 'Responsive',
    icon: mdiResponsive,
  },
  {
    href: '/',
    label: 'Styles',
    icon: mdiPalette,
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  {
    href: '/login',
    label: 'Login',
    icon: mdiLock,
  },
  {
    href: '/error',
    label: 'Error',
    icon: mdiAlertCircle,
  },
  {
    label: 'Dropdown',
    icon: mdiViewList,
    menu: [
      {
        label: 'Item One',
      },
      {
        label: 'Item Two',
      },
    ],
  },
  {
    href: 'https://github.com/justboil/admin-one-react-tailwind',
    label: 'GitHub',
    icon: mdiGithub,
    target: '_blank',
  },
  {
    href: 'https://github.com/justboil/admin-one-vue-tailwind',
    label: 'Vue version',
    icon: mdiVuejs,
    target: '_blank',
  },
]

export default menuAside
