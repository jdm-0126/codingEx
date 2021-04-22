export interface Productmodule{
    label_id: number;
    label: string;
    route: boolean;
    product_id?: ICategory['label_id'];

    // constructor(label_id:number,label: string,route:boolean) {
    //   this.label_id = label_id;
    //   this.label = label;
    //   this.route = route;
    // }
}

export interface ICategory extends Productmodule {
  label_id: number;
  label: string;
  route: boolean;
  product_id: Productmodule["label_id"];

  // constructor(label_id:number,label: string,route:boolean, product_id: number) {
  //   this.label_id = label_id;
  //   this.label = label;
  //   this.route = route;
  //   this.product_id = product_id;
  // }
}

export interface IBrand extends ICategory{
  label_id: number;
  label: string;
  route: boolean;
  category_id: ICategory["label_id"];

  // constructor(label_id:number,label: string,route:boolean, category_id: number) {
  //   this.label_id = label_id;
  //   this.label = label;
  //   this.route = route;
  //   this.category_id = category_id;
  // }
}

export interface IItem extends IBrand{
  label_id: number;
  label: string;
  route: boolean;
  brand_id: IBrand['label_id'];

  // constructor(label_id:number,label: string,route:boolean, brand_id: number) {
  //   this.label_id = label_id;
  //   this.label = label;
  //   this.route = route;
  //   this.brand_id = brand_id;
  // }
}
