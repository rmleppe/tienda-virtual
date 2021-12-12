import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  userForm: FormGroup
  constructor(private fb:FormBuilder,  ){
    
    
    

  this.userForm = this.fb.group({
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mensaje: new FormControl('', [Validators.required,Validators.minLength(10)])
   
  });

  

}
ngOnInit(): void {
}


Onclick(){
  alert("Gracias por ponerse en contacto con nosotros")
}
}
