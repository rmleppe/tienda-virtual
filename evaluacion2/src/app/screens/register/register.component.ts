import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup
  constructor(private fb:FormBuilder,private router:Router) {
    
    
    this.userForm = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(2)]),
      email: new FormControl('',[Validators.required,Validators.email]),
     password: new FormControl('',[Validators.required,Validators.minLength(2)]),
      
    })
   }

  ngOnInit(): void {
  }

  onClick(){
    if(this.userForm.valid){
      this.router.navigate(['/login'])
      alert("Registro exitoso")
    }else{
      alert("Por favor complete los datos correctamente")
    }
    
    }

}
