import { Routes } from '@angular/router';
import { Home } from './home/home';
import {Teacher} from './teacher/teacher';
import {Teacherdetails} from './teacherdetails/teacherdetails';
import {Student} from './student/student';
import {Studentdetails} from './studentdetails/studentdetails';
import {AddNewStudent} from './add-new-student/add-new-student';
import {ShowAllStudents} from './show-all-students/show-all-students';
import {Signup} from './signup/signup';
import {Login} from './login/login';
import {Welcome} from './welcome/welcome';

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
  },
  {
    path: 'teacherdetails/:id',
    component: Teacherdetails,
    title: 'Teacher details by id page',
  },
  {
    path: 'student',
    component: Student,
    title: 'Student Page',
  },
  {
    path: 'studentdetails/:id',
    component: Studentdetails,
    title: 'Student Details Page',

  },{
  path: 'addNewStudent',
    component: AddNewStudent,
    title: 'Add New Student page',
  },
  {
    path: 'showAllStudents',
    component: ShowAllStudents,
    title: 'Show All Students page',
  },
  {
    path: 'addNewStudent/:id',
    component: AddNewStudent,
  },
  {
    path: 'signup',
    component: Signup,
    title: 'Signup Page',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login Page',
  },
  {
    path: 'welcome',
    component: Welcome,
    title: 'Welcome Page',
  }
];

export default routeConfig;
