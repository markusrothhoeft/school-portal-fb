import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Portal';
  item: FirebaseObjectObservable<any>;
  constructor(public af: AngularFire) {
    this.item = af.database.object('/items');
    this.af.auth.subscribe(user => console.log(user));
  }
  save(newName: string) {
    this.item.set({ name: newName });
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
