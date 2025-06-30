import { Injectable } from '@angular/core';
import {studentModel} from './model/studentClass';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentAddedList:studentModel[] = [];
  constructor() {
    const oldData = localStorage.getItem('studentList');
    if (oldData) {
      this.studentAddedList = JSON.parse(oldData);
    }
  }

  addNewStudent(student: studentModel) {
    this.studentAddedList.push(student);
    localStorage.setItem('studentList', JSON.stringify(this.studentAddedList));
  }

  getAllStudents(){
    return this.studentAddedList;
  }

  getStudentById(id: number) {
    return this.studentAddedList.find(s => s.studentId === id);
  }

  updateStudentById(id: number, updatedStudent: studentModel) {
    const index = this.studentAddedList.findIndex(s => s.studentId === id);
    if (index !== -1) {
      this.studentAddedList[index] = updatedStudent;
      localStorage.setItem('studentList', JSON.stringify(this.studentAddedList));
    }
  }
  deleteStudentById(id: number) {
    const index = this.studentAddedList.findIndex(s => s.studentId === id);
    if (index !== -1) {
      this.studentAddedList.splice(index, 1);
      localStorage.setItem('studentList', JSON.stringify(this.studentAddedList));
    }
  }

}
