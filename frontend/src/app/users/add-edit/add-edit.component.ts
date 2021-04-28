import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  form!: FormGroup;
  id: any;
  isAddMode!: boolean;
  submitted = false;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  createForm() {
    const passwordValidators = [Validators.minLength(6)];
    if(this.isAddMode){
      passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', passwordValidators],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.createForm();
  };

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.dataService.registerUser(this.form.value).subscribe(res => {
        this.data = res;
        // console.log(res);

        this.submitted = false;
        this.form.reset();

        this.router.navigate(['/users']);
      })
    } else {
      this.dataService.update(this.id, this.form.value).subscribe(res => {
        this.data = res;
        // console.log(res);

        this.submitted = false;
        this.form.reset();

        this.router.navigate(['/users']);
      })
    }
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    this.router.navigate(['/users']);
  }
}
