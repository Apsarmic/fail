import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public selectedCourse: BehaviorSubject<any>= new BehaviorSubject<any>({});
  showH2tag="true";

  courses=[{

    id:1,
    course:"Java Full stack Training",
    img_url:"assets/natre.jpg",
    faculty:"Justin",
    facultyLoves:"100",
    lastAccessed:"2 days ago",
    show:true,
    specialtag:"a"
    },
    {
     id:2,
    course:"UI UX using Angular",
    img_url:"assets/natre.jpg",
    faculty:"adam",
    facultyLoves:"100",
    lastAccessed:"2 days ago",
    show:false,
    isadam:"adam",
    specialtag:"b"
    },
    {
      id:3,
    course:"UI UX using Angular",
    faculty:"Mike",
    facultyLoves:"100",
    img_url:"assets/lights.jpg",
    lastAccessed:"2 days ago",
    show:true,
    specialtag:"c"
    },
    {
      id:4,
    course:"Ionic Training",
    faculty:"Josh",
    facultyLoves:"100",
    img_url:"assets/natre.jpg",
    lastAccessed:"2 days ago",
    show:false,
    specialtag:"d"
    }
    ]


  constructor() { }
  public coursesArray: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  getCourses(){
    return this.courses
  }
  addCourses(course:any){
    this.courses.push(course);
  }
  initSelectedCourse(course:any){
    this.selectedCourse.next(course);
  }
}


