export class Recipe {
  public name: string;
  public imageUrl: string;
  public description: string;

  constructor(name:string, imageUrl:string, description:string){
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
