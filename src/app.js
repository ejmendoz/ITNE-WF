/*
import { showAlert } from "./message";

import "./public/img/ima.jpeg";
//Importando Bootstrap
import "./styles/main.scss";
import 'bootstrap';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";


library.add(faHome);
dom.watch();

document.getElementById('btn-alert').addEventListener('click', showAlert);

*/

const {UI} = require('./helpers/UI');
const {LE} = require('./helpers/LE');
const {Product} = require('./helpers/Product');
const ui = new UI();

//DOM
document.getElementById('upload').addEventListener('click', saveElement);

document.getElementById('product-list').addEventListener('click', deleteElement);

document.getElementById('form-product').addEventListener('submit', saveDB);

function saveElement(e){

    var element = {
        name,
        description
    }
    //Obtenemos los datos
    element.name = document.getElementById('product').value;
    element.description = document.getElementById('description').value;

    if((element.name && element.description) != "" ){
        //Pasamos los datos al localStorage
        let ls = new LE();
        ls.saveLocalElements('productsLS', element)
        ui.addProduct(element);
        ui.showMessage(`Product with name: ${element.name} has been added to the list`,'success');
        //this.elementsUI('productsLS');
    }else{
      ui.showMessage('No ha ingresado algun dato verifique por favor', 'danger');
    }
    
    e.preventDefault(); 
}

function saveDB(e){
    if(localStorage.getItem('productsLS') != (null ||  "[]")) {
        let elementsLS = JSON.parse(localStorage.getItem('productsLS'));
        for(let i = 0; i<elementsLS.length; i++){
            const product = new Product(elementsLS[i].name, elementsLS[i].description);
            //Adicionarlo a la DB
            console.log(product);
        }
        ui.showMessage('The products has been added to DB', 'info');
   }else{
        ui.resetForm();
        console.log('No hay elementos en el LS');
   }
    e.preventDefault();
}

function getLS(){
    let LS = JSON.parse(localStorage.getItem('productsLS'));
    let productsView = document.getElementById('product-list');

    productsView.innerHTML = '';
    if(localStorage.getItem('productsLS')!= null){
         
        for (let i = 0; i < LS.length; i++){
            let name = LS[i].name;
            let description = LS[i].description;
            productsView.innerHTML += `
            <div class="card">
                    <div class="card-body">
                        <strong>Product Name: </strong>${name},
                        <strong>Description:</strong>${description}
                        <a class="btn btn-danger" id="delete" onclick="deleteLS('${name}')">Delete</a>
                    </div>
                </div>
            `
        }
    }
    
}

function elementsUI(LS){
    if(localStorage.getItem(LS) != null) {
        let elementsLS = JSON.parse(localStorage.getItem(LS));
        for(let i = 0; i<elementsLS.length; i++){
            ui.addProduct(elementsLS[i]);
            //console.log(elementsLS[i]);
        }
   }else{
       console.log('No hay elementos en el LS');
   }
    
}

function deleteElement(element){
    //console.log(element.target);
    if(element.target.name === "delElement"){
        //console.log('Este es el elemento a borrar');
        
        const name = element.target.parentElement.children[0].id;
        console.log(name);
        let ls = new LE();
        ls.delLocalElement('productsLS', name);
        ui.deleteProduct(element.target);
        ui.showMessage('Product Deleted Successfully', 'info');
    }else{
        console.log('No hace nada');
    }
    //console.log(element.target.parentElement);
    //console.log(element);    
}
elementsUI('productsLS');

   







