class Producto {

    //Metodos
    constructor(codigo,descripcion,imagen,precio){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
    }
    getCodigo(){
        return this.codigo;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getImagen(){
        return this.imagen;
    }
    getPrecio(){
        return this.precio;
    }
    setCodgio(codigo) {
        this.codigo = codigo;
    }
    setDescripcion(descripcion){
       this.descripcion = descripcion; 
    }
    setImagen(imagen) {
        this.imagen = imagen;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    }
    let productos = [];
    let codigo = document.getElementById("codigo");
    let descripcion = document.getElementById("descripcion");
    let precio = document.getElementById("precio");
    let imagen = document.getElementById("imagen");
    let BotonAgregarInventario = document.getElementById("BotonAgregarInventario");
    let BotonAgregar = document.getElementById("BotonAgregar");
    let BotonEditar = document.getElementById("BotonEditar");
    const formulario = document.getElementById("formulario"); // verificar
    BotonEditar.disable = true;
    
    BotonAgregarInventario.addEventListener("click",function(e) {
        b = true;
        e.preventDefault();
        agregarInventario();
    })

    BotonAgregar.addEventListener("click",function(e) {
        b = true;
        e.preventDefault();
        if(codigo.value == "" || codigo.value == 0 || descripcion.value =="" || precio.value==""  || imagen.value==""){
    
    
        alert("El codigo no puede ser 0, por favor completar todos los campos")
    }else{
        for(let i=0; i<productos.length;i++){
            if(productos[i].getCodigo()==codigo.value){
                alert("Ya existe un artículo con ese codigo");
                b = false;
                return;
            }
        }
        if(b){
            agregar();
        }else{
            return;
        }
    }
    })
    function agregar(){
        let ObjetoProducto = new Producto(codigo.value,descripcion.value,imagen.value,precio.value);
        productos.push(ObjetoProducto);
        for(let i=0;i<productos.length;i++){
            console.log(productos[i]);
        }
        limpiar();
        mostrar();
    }
    function agregarInventario(){
        let ObjetoProducto1 = new Producto(1,"Papa","C:/Users/chimi/OneDrive/Documents/Evaluacion_JaimeEsqueda/papa.jpg",10.55);
        let ObjetoProducto2 = new Producto(2,"Manzana","C:/Users/chimi/OneDrive/Documents/Evaluacion_JaimeEsqueda/Manzana.jpg",12.1);
        let ObjetoProducto3 = new Producto(3,"Melon","C:/Users/chimi/OneDrive/Documents/Evaluacion_JaimeEsqueda/melon.jpg",52.3);
        let ObjetoProducto4 = new Producto(4,"Cebolla","C:/Users/chimi/OneDrive/Documents/Evaluacion_JaimeEsqueda/cebolla.jpg",17);
        let ObjetoProducto5 = new Producto(5,"Calabaza","C:/Users/chimi/OneDrive/Documents/Evaluacion_JaimeEsqueda/calabaza.jpg",20);
        productos.push(ObjetoProducto1);
        productos.push(ObjetoProducto2);
        productos.push(ObjetoProducto3);
        productos.push(ObjetoProducto4);
        productos.push(ObjetoProducto5);
        limpiar();
        mostrar();
    }
    function limpiar(){
        codigo.value="";
        descripcion.value="";
        imagen.value="";
        precio.value="";
    }
    function mostrar(){
        let tabla=document.getElementById("TablaProductos");
        tabla.innerHTML="";
        for(let i=0;i<productos.length;i++){
            tabla.innerHTML +=
            `
            <tr>
                <td>${productos[i].getCodigo()}</td>
                <td>${productos[i].getDescripcion()}</td>
                <td>${productos[i].getPrecio()}</td>
                <td><button onclick="eliminar(${i})" class="boton">Eliminar</button></td>
                <td><button onclick="editar(${i})" class="boton">Editar</button></td>
            </tr>
            `
        }
    }
    function eliminar(i){
        var resultado = window.confirm('Estas seguro que deseas eliminarlo?');
        if(resultado === true) {
            window.alert('Producto eliminado correctamente');
            productos.splice(i,1);
            mostrar();
        }else{
            window.alert('Ok');
        }
    }
    function editar(i){
        codigo.value = productos[i].getCodigo();
        descripcion.value = productos[i].getDescripcion();
        precio.value = productos[i].getPrecio();
        imagen.value = productos[i].getImagen();
        codigo.disabled = true;
        BotonAgregar.disabled = true;
        BotonEditar.disabled=false;
    }
    BotonEditar.addEventListener("click", function(e) {
        e.preventDefault();
        for(let i =0; i<productos.length;i++){
            if(productos[i].getCodigo()==codigo.value){
                productos[i].setDescripcion(descripcion.value);
                productos[i].setImagen(imagen.value);
                productos[i].setPrecio(precio.value);
                mostrar();
                limpiar();
                codigo.disabled=false;
                BotonAgregar.disabled=false;
                BotonEditar.disabled=true;
            }
        }

    })
    
    let BotonTienda = document.getElementById("BotonTienda");
    BotonTienda.addEventListener("click", function(e) {
        e.preventDefault();
        let tienda=document.getElementById("MenuProductos");
        for(let i=0;i<productos.length;i++){
            tienda.innerHTML +=`
            <div class="flexbox-container2" style="width:18rem;">
                <img src="${productos[i].getImagen()}"></img>
                    <div class="flexbox-container">
                        <h3 class="flexbox-container">${productos[i].getDescripcion()}</h5>
                        <p class="flexbox-container">${productos[i].getPrecio()}</p>
                        <a href="#" class="flexbox-container" >Agregar al carrito</a>
                    </div>
            </div>
            `
        }
    })