class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

     /*
        A sintaxe de propagação (Spread)= ... permite que um objeto iterável,
        como um array ou string, seja expandida em locais onde zero ou mais 
        argumentos (para chamadas de função) ou elementos (para literais de array)
        sejam esperados ou uma expressão de objeto seja expandida em locais 
        onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.
    */
    static textoParaData(texto) {
        /*O ˆ indica começando com e o $ terminando com.*/
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }

    static dataParaTexto(data) {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }
  }