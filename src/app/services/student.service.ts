import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Student } from '../models/Student';


@Injectable()
export class StudentService {
  studentsRef: AngularFireList<any>;
  students: Observable<any[]>;
  student: Observable<any>;


  constructor(private db: AngularFireDatabase) {
    this.studentsRef = this.db.list('student');
    this.students = this.studentsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
      }));
    });
   }

   getStudents() {
     return this.students;
   }

   newStudent(student: Student) {
     return this.studentsRef.push(student).then(d => {
       return d;
     });
   }

   getStudent(key: string) {
    this.student = this.db.object('/student/' + key).valueChanges();
    return this.student;
   }
}
