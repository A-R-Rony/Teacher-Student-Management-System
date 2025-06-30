import {Component, inject} from '@angular/core';
import {StudentService} from '../student.service';
import {studentModel} from '../model/studentClass';
import {ActivatedRoute} from '@angular/router';
import {teacherModel} from '../model/teacherClass';

@Component({
  selector: 'app-studentdetails',
  imports: [],
  templateUrl: './studentdetails.html',
  styleUrl: './studentdetails.css'
})
export class Studentdetails {
    studentService = inject(StudentService);
    route: ActivatedRoute = inject(ActivatedRoute);

  studentDetails?: studentModel;
    studentId = -1;
    constructor( ) {
      this.studentId = Number(this.route.snapshot.params['id']);
      this.studentDetails = this.studentService.getStudentById(this.studentId);
    }
}
