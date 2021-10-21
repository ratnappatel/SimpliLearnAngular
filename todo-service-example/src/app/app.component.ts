import { Component,OnInit } from '@angular/core';
import { Todo } from './Todo';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  todos:any

  constructor(private service:TodoService)
  {

  }
  ngOnInit(): void {
    this.service.getTodos().subscribe(
      (data)=>{
        console.log(data);
        this.todos=data;
      }
    );
  }

}
