import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'mh';
  products:any=[];
  constructor(private appService:AppService){}
  ngOnInit(): void {
    this.getAllproducts()
  }
  getAllproducts(){
    this.appService.getAllProducts().subscribe((data)=>{
      this.products=data;
    })
  }
  deleteProduct(id:any){
   this.appService.deleteProduct(id).subscribe((data:any)=>{
   console.log(data)
   this.getAllproducts();
   })
  }
  createProduct(){
    const data={
      title:"hello",
      author:"mh"
    }
    this.appService.createProduct(data).subscribe((data:any)=>{
      console.log(data);
    })
    this.getAllproducts();
    }
    updateProduct(id:any){
      const data={
        title:"hay",
        author:"raju"
      }
      this.appService.updateProduct(data,id).subscribe((data:any)=>{
        console.log(data);
      })
      this.getAllproducts();
    }
   }
  