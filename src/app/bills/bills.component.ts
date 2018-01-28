import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['code', 'description', 'unitPrice', 'quantity', 'percent', 'discount', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



prices = [
    {id: 1, name: 'Precio normal'},
    {id: 2, name: 'Precio al por mayor'}
  ];

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
  {code: 1, description: 'leche', unitPrice: 550, quantity: 1, percent: '0%', discount: 0, total: 550},
];

}
