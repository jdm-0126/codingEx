export class Usermodule {
    public id: number;
    public name: string;
    public password:string;
    public email:string;
    public token:string;
 
    constructor(id:number,name: string,password:string,email:string,token:string) {
      this.id = id;
      this.name = name;
      this.password = password;
      this.email = email;
      this.token= token;
    }
}