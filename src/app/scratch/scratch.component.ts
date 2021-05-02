import { Component, OnInit } from '@angular/core';
import {  OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-scratch',
  templateUrl: './scratch.component.html',
  styleUrls: ['./scratch.component.css']
})
export class ScratchComponent  {

  title = 'FirebaseDemo';
  // courses: any[];

  courses$;
  course$;
  author$;
  todos;
  todos$: AngularFireList<any>;
  // subscription : Subscription;

  constructor(public db: AngularFireDatabase) {
    db.list('/course')
      .valueChanges()
      .subscribe((inp) => {
        this.courses$ = inp;
        console.log(this.courses$);
      });

     db.object('/course')
      .valueChanges()
      .subscribe((inp) => {
        this.todos = inp;
        console.log(this.todos);

        const res = []
      Object.keys(inp).forEach((course) => {
          res.push({id: course, value: inp[course]})
      })
      console.log(res);
      });

      

    db.object('/course/1')
      .valueChanges()
      .subscribe((inp) => {
        this.course$ = inp;
        console.log(this.course$);
      });

    db.object('/authors/1')
      .valueChanges()
      .subscribe((inp) => {
        this.author$ = inp;
        console.log(this.author$);
      });

    // this.courses$ = db.list('/course');
    // this.course$ = db.object('/course/1');
    console.log(this.courses$);
    console.log(this.course$);

    //   db.list('/course').valueChanges().subscribe(inp=>{
    //     this.courses = inp
    //     console.log(this.courses);

    //   });
    // }
    // ngOnDestroy(){
    //   this.subscription.unsubscribe();
    
  }
  addCourse(value: string) {
    console.log(value[`value`]);
    
    // this.db.list('/course').set('4',value);
    this.db.list('course').push(value[`value`])	;
    // this.db.ref('/userProfile').push(userProfile)

  }
  delete(){
    this.db.list('course').remove('-MZOnE11LNd3yIh1AZIw');
  }
  getID(i){
    console.log(i);
    
  }
  OnUpdate(inp){
    console.log(inp);
    
    this.db.list('course').set('2','course2')
  }
  OnDelete(inp){
    console.log(inp);
    
    this.db.list('course').remove('-MZOr8_MUhoo8A1_9Ee6')
  }
}
