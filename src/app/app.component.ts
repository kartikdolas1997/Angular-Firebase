import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirebaseDemo';

  // courses: any[];
  courseName;
  courses$;
  course$;
  author$;
  todos;
  todos$: AngularFireList<any>;
  fruits: unknown;
  // subscription : Subscription;

  constructor(public db: AngularFireDatabase) {
    db.object('/course')
      .valueChanges()
      .subscribe((inp) => {
        this.todos = inp;
        // console.log(this.todos);

        // const res = [];
        // Object.keys(inp).forEach((course) => {
        //   res.push({ id: course, value: inp[course] });
        // });
        // // console.log(res);
      });

    db.object('/fruits')
      .valueChanges()
      .subscribe((inp) => {
        this.fruits = inp;
        // console.log(this.fruits);

        // const res = [];
        // Object.keys(inp).forEach((course) => {
        //   res.push({ id: course, value: inp[course] });
        // });
        // // console.log(res);
      });
  }
  addCourse(value: string) {
    // console.log(value[`value`]);

    // this.db.list('/course').set('4',value);
    this.db.list('course').push(value[`value`]);
    // this.db.ref('/userProfile').push(userProfile)
  }
  delete() {
    this.db.list('course').remove('-MZOnE11LNd3yIh1AZIw');
  }
  // getID(i) {
  //   // console.log(i);
  // }
  OnUpdate(inp) {
    // console.log('onupdate', inp, this.courseName);

    this.db.list('course').set(inp.key, this.courseName);
  }
  OnDelete(inp) {
    // console.log(inp);

    this.db.list('course').remove(inp);
  }
  OnIncr(inp){
    // console.log(inp);
    this.db.list('fruits').set(inp.key, inp.value+1);

    
    
  }
  OnDecr(inp){
    // console.log(inp);
    this.db.list('fruits').set(inp.key, inp.value-1);
  }
}
