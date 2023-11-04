export class View {
    constructor(elemento){
        this._elemento = elemento
    }//carcaterística identica

    template(model){
        throw new Error('O método template deve ser implementado nesta classe!')
        //aqui foi colocado uma mensagem de erro!
        //AAAA é pq aqui os filhos tem templates diferentes!
        //caso o template nao seja implementado, aparecerá esse erro!
    }//carcateristica semelhante com diferença no template 

    update(model){
        this._elemento.innerHTML = this.template(model)
    }//característica quase identica
}

//Por isso o uso de uma classe pai(superclasse), nesse caso a nossa View irá repassar suas
//características as suas filhas 'mensagemview' e 'pessoaview'