import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  userForm: FormGroup
  constructor(private fb:FormBuilder,private router:Router) {
    
    
    this.userForm = this.fb.group({
      calle: new FormControl('',[Validators.required,Validators.minLength(2)]),
      numero: new FormControl('',[Validators.required,Validators.minLength(2)]),
     ciudad: new FormControl('',[Validators.required,Validators.minLength(2)]),
     codigo: new FormControl('',[Validators.required,Validators.minLength(2)]),
     
      
    })
   }

  ngOnInit(): void {
  }

  onClick(){
    if(this.userForm.valid){
      alert("Ingrese tarjeta de credito")
      this.router.navigate(['/tarjeta'])
    }else{
      alert("Ingrese correctamente los datos")
    }
    
      
   
    
    }
}
