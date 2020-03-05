export class Product {
    /*
    constructor(){
        this.name = "";
        this.description= "";
        this.price = 10.0;
        this.date = new Date();
    }*/
    
    constructor(name, description){
        this.apikey= "apidelobjecto";
        this.name = name;
        this.price = 10.0;
        this.description = description;
        this.date = new Date();
    }

    changeProperties(name, description){
        this.name = name;
        this.description = description;
    }
    
}