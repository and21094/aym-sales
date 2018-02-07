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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  prices = [
    {id: 1, name: 'Precio normal'},
    {id: 2, name: 'Precio al por mayor'}
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


