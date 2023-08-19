document.addEventListener("DOMContentLoaded", function (event) {
  const submitButton = document.getElementById("BtnSend");

  function validateData() {
    const fornecedor = document.getElementById("inpfornecedor");
    const obra = document.getElementById("inplocalObra");
    const cnpj = document.getElementById("inpcnpj1");
    const dataEntrega = document.getElementById("inpcnpj");
    const dataPagamento = document.getElementById("inpdataDePagamento");
    const valor = document.getElementById("inpvalor");
    const numeroDaCompra = document.getElementById("inprequisicaodecompra");
    const empresa = document.getElementById("inpempresa");

    const dataList = [
      fornecedor,
      obra,
      cnpj,
      dataEntrega,
      dataPagamento,
      valor,
      numeroDaCompra,
      empresa,
    ];
    const validateEmpty = dataList.some((i) => i.value === "");
    console.log(validateEmpty)

    if (validateEmpty) {
      return;
    } else {
      const _data = {
        fornecedor: fornecedor.value,
        obra: obra.value,
        cnpj: cnpj.value,
        dataEntrega: dataEntrega.value,
        dataPagamento: dataPagamento.value,
        valor: valor.value,
        numeroDaCompra: numeroDaCompra.value,
        empresa: empresa.value,
      };

      // Do something with _data
      console.log(_data);
    }
  }

  submitButton.addEventListener("click", validateData);
});