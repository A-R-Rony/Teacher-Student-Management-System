import {Injectable} from '@angular/core';
import {teacherModel} from './model/teacherClass';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacherAddList: teacherModel[] = [];

  constructor()
  {
    const oldList = localStorage.getItem('teacherList');
    if(oldList)
    {
      this.teacherAddList = JSON.parse(oldList);
    }
  }

  private saveLocalStorage(){
    localStorage.setItem('teacherList', JSON.stringify(this.teacherAddList));
  }

  addTeacher(teacher: teacherModel) {
    this.teacherAddList.push(teacher);
    this.saveLocalStorage();
  }

  deleteTeacherById(id: number) {
    const index = this.teacherAddList.findIndex(t => t.teacherId === id);
    if(index != -1) {
      this.teacherAddList.splice(index, 1);
      this.saveLocalStorage();
    }
  }
  updateTeacherById(currentEditId: Number, updatedTeacher: teacherModel) {
    const index = this.teacherAddList.findIndex(t => t.teacherId === currentEditId);
    if(index != -1) {
      this.teacherAddList[index] = updatedTeacher;
      this.saveLocalStorage();
    }
  }

  getTeacherById(id: number) {
    console.log(this.teacherAddList);
    return this.teacherAddList.find((teacher:teacherModel) => teacher.teacherId === id);
  }
  getAllTeachers():teacherModel[] {
    return this.teacherAddList;
  }

}
