import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  userForm: FormGroup
  
  constructor(private fb:FormBuilder, private router:Router  ){
    
    
    

    this.userForm = this.fb.group({
      nombre: new FormControl('',[Validators.required,Validators.minLength(2)]),
      rut: new FormControl('',[Validators.required,Validators.minLength(9)])
      
     
    });

  
}
ngOnInit(): void {
}

onClick(){
  alert("Para comprar rellene los datos de su tarjeta!")
    this.router.navigate(['/tarjeta'])
    
 
  
  }
}