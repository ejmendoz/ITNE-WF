export class UI {


    addProduct(product){
       let productList =  document.getElementById('product-list');
       let element = document.createElement('div');
       element.innerHTML = `
        <div class="card mb-3">
            <div class="card-body">
                <strong id= "${product.name}">Product Name</strong>: ${product.name}
                <strong>Product Description</strong>: ${product.description}
                <!--<a class="btn btn-danger" id="delElement">Delete</a>--> 
                <a class="btn btn-danger" name= "delElement" >Delete</a>
            </div>
        </div>
       `;
       productList.appendChild(element);
       this.resetForm();
    }

    
    deleteProduct(element){
        
        if(element.name === "delElement"){
            element.parentElement.parentElement.parentElement.remove();
        }
        
    }
    

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Showing in the DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#list-app');
        container.insertBefore(div, app);
        setTimeout(function (){
            document.querySelector('.alert').remove();
        }, 1500);
    }

    resetForm(){
        document.getElementById('form-product').reset();
    }

    
}

