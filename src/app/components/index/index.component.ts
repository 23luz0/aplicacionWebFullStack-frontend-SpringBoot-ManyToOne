import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoService.getProductos()
        .subscribe(response => this.productos = response);

  }

}
