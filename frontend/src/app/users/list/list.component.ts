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
      this.users = res;
    })
  }
  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(id: any){
    this.dataService.delete(id).subscribe(res => {
      this.getUsers();
    })

  }

  editUser(id:any){
    this.router.navigate([`/edit/${id}`]);
  }

  addUser(){
    this.router.navigate([`/add`]);
  }

}
