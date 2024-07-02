
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import User from './pages/user/User';
import Competitions from './pages/competition/Competitions';
import Referees from './pages/admin-user/referee/Referees';
import Supervisors from './pages/admin-user/supervisor/Supervisors';
import AddEditReferee from './pages/admin-user/referee/AddEditReferee';
import TableReferee from './pages/admin-user/referee/TableReferee';
import AddEditSupervisor from './pages/admin-user/supervisor/AddEditSupervisor';
import TableSupervisor from './pages/admin-user/supervisor/TableSupervisor';
import TableCompetitions from './pages/competition/TableCompetitions';
import ManageCompetition from './pages/competition/ManageCompetition';
import AddEditCompetition from './pages/competition/AddEditCompetition';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CompetitionGroup from './pages/competition/group/CompetitionGroup';
import CompetitionElimination from './pages/competition/group/CompetitionElimination';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboad",
    element: <User />,
    children:[
      {
        path: "",
        element: <Competitions />,
        children:[
          {
            path: "",
            element: <TableCompetitions />
          },
          {
            path: "manage-competitions/:id",
            element: <ManageCompetition />
          },
          {
            path: "add-competition",
            element: <AddEditCompetition />
          },
          {
            path: "edit-competition/:id",
            element: <AddEditCompetition />
          },
          {
            path: "manage-competitions/:id/groups",
            element: <CompetitionGroup/>
          },
          {
            path: "manage-competitions/:id/elimination",
            element: <CompetitionElimination />
          },
        ]
      },
      {
        path: "referees",
        element: <Referees />,
        children:[
          {
            path: "",
            element: <TableReferee />
          },
          {
            path: "add",
            element: <AddEditReferee />
          },
          {
            path: "edit",
            element: <AddEditReferee />
          },
        ]
      },
      {
        path: "supervisors",
        element: <Supervisors />,
        children:[
          {
            path: "",
            element: <TableSupervisor  />
          },
          {
            path: "add",
            element: <AddEditSupervisor />
          },
          {
            path: "edit",
            element: <AddEditSupervisor />
          },
        ]
      }
    ]
  },
]);

function App() {

  return (
    <>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
      </LocalizationProvider>
    </>
  )
}

export default App
