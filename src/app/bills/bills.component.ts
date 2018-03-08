import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  showDialog: boolean = false

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openModal(modal) {
    this.showDialog = !this.showDialog
    modal.hideOverflow();
  }

  prices = [
    {id: 1, name: 'Precio normal'},
    {id: 2, name: 'Precio al por mayor'}
  ];

  vouchers = [
    {id: 1, name: 'Factura'},
    {id: 2, name: 'Ticket'}
  ];

  displayedColumns = ['code', 'description', 'unitPrice', 'quantity', 'percent', 'discount', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}

export interface Element {
  code: number;
  description: string;
  unitPrice: number;
  quantity: number;
  percent: string;
  discount: number;
  total: number;
}

const ELEMENT_DATA: Element[] = [
  {code: 1, description: 'Leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 2, description: 'Arroz', unitPrice: 800, quantity: 1, percent: '0%', discount: 0, total: 800},
  {code: 3, description: 'Frijoles', unitPrice: 650, quantity: 1, percent: '0%', discount: 0, total: 650},
  {code: 4, description: 'Galletas', unitPrice: 350, quantity: 1, percent: '0%', discount: 0, total: 350},
  {code: 6, description: 'Jabon', unitPrice: 650, quantity: 1, percent: '0%', discount: 0, total: 650},
  {code: 7, description: 'Coca Cola', unitPrice: 1200, quantity: 1, percent: '0%', discount: 0, total: 1200},
  {code: 8, description: 'Pan', unitPrice: 500, quantity: 1, percent: '0%', discount: 0, total: 500},
  {code: 9, description: 'Huevos', unitPrice: 100, quantity: 6, percent: '0%', discount: 0, total: 600},
  {code: 10, description: 'confites', unitPrice: 20, quantity: 10, percent: '0%', discount: 0, total: 200},
];


