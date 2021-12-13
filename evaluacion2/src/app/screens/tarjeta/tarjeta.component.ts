import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule} from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  userForm: FormGroup
  constructor(private fb:FormBuilder,private router:Router) {
    
    
    this.userForm = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(2)]),
      numero: new FormControl('',[Validators.required,Validators.maxLength(16)]),
     cvv: new FormControl('',[Validators.required,Validators.minLength(2)]),
     
      
    })
   }

  ngOnInit(): void {
  }

  onClick(){
    if(this.userForm.valid){
      this.router.navigate(['/carrito'])
      alert("Datos correctos, será redirigido al proceso de compra...")
    }else{
      alert("Datos de tarjeta incorrectos")
    }
    
      
      
   
    
    }
}
