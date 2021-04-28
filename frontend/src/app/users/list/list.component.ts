import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:any;
  data:any;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  getUsers(){
    this.dataService.getUsers().subscribe(res => {
      console.log("!!!!!", res)
      this.users = res;
    })
  }
  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(id: any){
    this.dataService.delete(id).subscribe(res => {
      console.log('Delete response', res);
      this.getUsers();
    })

  }

  editUser(id:any){
    console.log(id);
    this.router.navigate([`/edit/${id}`]);
  }

  addUser(){
    console.log('SLUuuuti');
    this.router.navigate([`/add`]);
  }

}
