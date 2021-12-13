import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup

  
  
  

  constructor(private fb:FormBuilder,private router:Router) {
    
    this.userForm = this.fb.group({
      
      email: new FormControl('',[Validators.required,Validators.email]),
     password: new FormControl('',[Validators.required,Validators.minLength(2)]),
      
    })

   

    
  }

  onClick(){
    if(this.userForm.valid){
      this.router.navigate(['/home'])
      alert("Bienvenido")
    }else{
      alert("Por favor complete los datos correctamente")
    }
    
    }

  ngOnInit(): void {  
  }

  
  

}