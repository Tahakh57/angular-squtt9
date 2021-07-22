export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Laundry 1',
    price: 3,
    description: 'Start your wash today'
  },
  {
    id: 2,
    name: 'Dryer 1',
    price: 2,
    description: 'Start your dryer today'
  },
  {
    id: 3,
    name: 'Laundry 2',
    price: 2,
    description: 'Start your wash today'
  },
  {
    id: 4,
    name: 'Dryer 2',
    price: 3,
    description: 'Start your dryer today'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
