import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-ropa',
  templateUrl: './products-ropa.component.html',
  styleUrls: ['./products-ropa.component.css']
})
export class ProductsRopaComponent implements OnInit {
  

  ngOnInit(): void {
  }
  userForm: FormGroup
  listData:any;
  
  filterLista = '';
  constructor(private fb:FormBuilder, private router:Router ){
    
    
    this.listData = [];

  this.userForm = this.fb.group({
    nombre: new FormControl('',[Validators.required,Validators.minLength(2)]),
    precio: new FormControl('',[Validators.required,Validators.minLength(2)]),
    descripcion: new FormControl('', [Validators.required,Validators.maxLength(20)]),
    imagen: new FormControl('', [])
  })
}




addCarrito(){
  
    
    alert("Producto añadido al carrito")
 
  
  }

addItem(){
  if(this.userForm.valid){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
    alert("Producto ingresado")
    
    
  }else{
    alert("Por favor, ingrese correctamente los datos")
  }
  
}
reset(){
  this.userForm.reset();
  
  
}

removeItems(element:any){
  this.listData.forEach((value:any,dex:any) => {
    if(value == element){
      
      this.listData.splice(dex,1)
      alert("Producto eliminado")
    }

  });
}


//FUNCION PARA MPSTRAR IMAGEN EN CARD
url: any= '';

readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.url = (<FileReader>event.target).result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}



}


