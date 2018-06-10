// Codigo JS orientada a Objeto

// clase del producto
class Producto{
    constructor (name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// clase de la interface
class UI{
    addProduct(newProduct){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML = `
            <div class"card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>:${newProduct.name}
                    <strong> Price</strong>:${newProduct.price}
                    <strong> Year Fabrication</strong>:${newProduct.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element)
        //this.resetForm();
    }

    resetForm(){
        document.getElementById('form_product').reset();
    }

    deleteProduct(ele){
        if(ele.name === 'delete')
            ele.parentElement.remove();
            this.showMessage('Producto eliminado satisfactoriamente','success')

    }

    showMessage(message, classCss){
        const div = document.createElement('div');
        div.className = `alert alert-${classCss} mt-4`;
        div.appendChild(document.createTextNode(message));
        //show in DOM
        const container = document.querySelector('.container')
        const app = document.querySelector('#app');
        container.insertBefore(div,app)
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000)
    }
}

//eventos del DOM
document.getElementById('form_product')
    .addEventListener('submit',function(e){
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const year = document.getElementById('year').value 

        const product = new Producto(name, price, year);
        
        const ui = new UI()

        if(name === '' || price === '' || year === ''){
            ui.showMessage('Debe de ingresar informacion en los campos','danger')
        }else{
            ui.addProduct(product)
            ui.resetForm();
            ui.showMessage('Producto agregado satisfactoriamente','success');
        }

        e.preventDefault()
    });

document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})