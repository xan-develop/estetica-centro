export interface Treatment {
   id: string;
   title: string;
   price: number;
   description?: string;
 }
 
 export interface CartItem extends Treatment {
   quantity: number;
 }