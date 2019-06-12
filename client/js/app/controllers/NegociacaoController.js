class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        /*
            A sintaxe de propagação (Spread)= ... permite que um objeto iterável,
            como um array ou string, seja expandida em locais onde zero ou mais 
            argumentos (para chamadas de função) ou elementos (para literais de array)
             sejam esperados ou uma expressão de objeto seja expandida em locais 
             onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.
        */
        let data = new Date(...this._inputData
            .value.split('-')
            .map((item, indice) =>  item - indice % 2 ));
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}