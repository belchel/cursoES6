class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        /*
            Cria uma copia da referencia do array para impedir 
            alterações no array sem ser pelos devidos metodos criados 
        */
        return [].concat(this._negociacoes);
    }
}