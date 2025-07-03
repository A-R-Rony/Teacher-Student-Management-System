import { Routes } from '@angular/router';
import { Home } from './home/home';
import {Teacher} from './teacher/teacher';
import {Teacherdetails} from './teacherdetails/teacherdetails';
import {Student} from './student/student';
import {Studentdetails} from './studentdetails/studentdetails';
import {AddNewStudent} from './add-new-student/add-new-student';
import {ShowAllStudents} from './show-all-students/show-all-students';
import {Welcome} from './welcome/welcome';
import {AuthGuard} from '@auth0/auth0-angular';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'teacher',
    component: Teacher,
    title: 'Teacher page',
    canActivate: [AuthGuard],
  },
  {
    path: 'teacherdetails/:id',
    component: Teacherdetails,
    title: 'Teacher details by id page',
    canActivate: [AuthGuard],
  },
  {
    path: 'student',
    component: Student,
    title: 'Student Page',
    canActivate: [AuthGuard],
  },
  {
    path: 'studentdetails/:id',
    component: Studentdetails,
    title: 'Student Details Page',
    canActivate: [AuthGuard],

  },{
  path: 'addNewStudent',
    component: AddNewStudent,
    title: 'Add New Student page',
    canActivate: [AuthGuard],
  },
  {
    path: 'showAllStudents',
    component: ShowAllStudents,
    title: 'Show All Students page',
    canActivate: [AuthGuard],
  },
  {
    path: 'addNewStudent/:id',
    component: AddNewStudent,
    title: 'Add New Student Page',
  },

  {
    path: 'welcome',
    component: Welcome,
    title: 'Welcome Page',
    canActivate: [AuthGuard],
  }
];

export default routeConfig;
