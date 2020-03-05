import { UI } from "./UI";

export class LE{
    
    constructor (){
        this.ui = new UI();
    }

    saveLocalElements (nameArray, element){
        

        if (localStorage.getItem(nameArray) === null){
            let elementsLS = [];
            elementsLS.push(element);
            localStorage.setItem(nameArray, JSON.stringify(elementsLS));           
        }else{
            let elementsLS = JSON.parse(localStorage.getItem(nameArray));
            elementsLS.push(element);
            localStorage.setItem(nameArray, JSON.stringify(elementsLS));
        }
        
    }

    delLocalElement(nameArray, name){
        let elementsLS = JSON.parse(localStorage.getItem(nameArray));
        for(let i = 0; i< elementsLS.length; i++){
            if(elementsLS[i].name === name){
                elementsLS.splice(i,1);
                //ui.showMessage('Product Deleted Successfully', 'info');
                console.log(elementsLS.length);
            }
            
            localStorage.setItem('productsLS', JSON.stringify(elementsLS));
        }

    }
}