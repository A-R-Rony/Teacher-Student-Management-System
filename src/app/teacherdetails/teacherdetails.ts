import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {FormGroup} from '@angular/forms'
import {teacherModel} from '../model/teacherClass';
import {TeacherService} from '../teacher.service';
import {considerSettingUpAutocompletion} from '@angular/cli/src/utilities/completion';

@Component({
  selector: 'app-teacherdetails',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './teacherdetails.html',
  styleUrl: './teacherdetails.css'
})
export class Teacherdetails {
   route: ActivatedRoute = inject(ActivatedRoute);
   teacherService: TeacherService = inject(TeacherService);
   teacherDetails?: teacherModel;

   teacherId = -1;
  constructor() {
    this.teacherId = Number(this.route.snapshot.params['id']);
     console.log("id", this.teacherId);
     console.log(this.teacherService.getTeacherById(this.teacherId));
     this.teacherDetails = this.teacherService.getTeacherById(this.teacherId);
     console.log(this.teacherDetails);
  }

}
