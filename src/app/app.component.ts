import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Teacher } from './shared/teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Portal';
  item: FirebaseObjectObservable<any>;
  teacher: FirebaseObjectObservable<any>;

  teachers: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.item = af.database.object('/items');
    this.teachers = af.database.list('/teachers');
    this.af.auth.subscribe(user => console.log(user));
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }

  saveTeacher(newName: string, newAge: number) {
    let teacher =  new Teacher();
    teacher.age = newAge;
    teacher.name = newName;
    console.log(teacher);
    this.teachers.push(teacher);
  }


  update(newSize: string) {
    this.item.update({ size: newSize });
  }

  delete() {
    this.item.remove();
  }

  public login() {
    console.log('login')
    this.af.auth.login();
  }

  logout() {
    console.log('logout')
    this.af.auth.logout();
  }
}
