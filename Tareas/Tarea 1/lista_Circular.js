class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;

    }
}

class listaDoble{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodo(dato);

        if(this.primero == null){ //la lista esta vacia
            this.primero = nuevo;
            nuevo.siguiente = this.primero
        }else{
            let aux = this.primero;
            while(aux.siguiente != this.primero){
                aux = aux.siguiente;
            };
            aux.siguiente = nuevo;
            nuevo.siguiente = this.primero

        }
    }

    mostrar(){
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
        while(aux.siguiente != null){
            if(aux.siguiente == this.primero){
                console.log(aux.dato,"-> ", aux.siguiente.dato);
                return
            }
            else{
                console.log(aux.dato,"-> ", aux.siguiente.dato);
                aux = aux.siguiente;
            }

        }
    }
}

let lista = new listaDoble();

lista.insertar(10);
lista.insertar(15);
lista.insertar(45);


lista.mostrar();