export class Entitys{
  Key = Number(localStorage.getItem("llave"));
  ruta:any = this.Key!= 0?'404':'login';
  version:string = "V 1.0"
}
