document.addEventListener("DOMContentLoaded", function (event) {
  function validateData() {
    const fornecedor = document.getElementById("inpfornecedor");
    const obra = document.getElementById("inplocalObra");
    const cnpj = document.getElementById("inpcnpj1");
    const dataEntrega = document.getElementById("inpcnpj");
    const dataPagamento = document.getElementById("inpdataDePagamento");
    const valor = document.getElementById("inpvalor");
    const numeroDaCompra = document.getElementById("inprequisicaodecompra");
    const empresa = document.getElementById("inpempresa");
    const descricaoCompra = document.getElementById("inpdescricaoCompra");

    const dataList = [
      fornecedor,
      obra,
      cnpj,
      dataEntrega,
      dataPagamento,
      valor,
      numeroDaCompra,
      empresa,
      descricaoCompra,
    ];
    //   const validateEmpty = dataList.some((i) => i.value === "");
    //   console.log(validateEmpty);

    //   if (validateEmpty) {
    //     return;
    //   } else {
    const _data = {
      fornecedor: fornecedor.value,
      obra: obra.value,
      cnpj: cnpj.value,
      dataEntrega: dataEntrega.value,
      dataPagamento: dataPagamento.value,
      valor: valor.value,
      numeroDaCompra: numeroDaCompra.value,
      empresa: empresa.value,
      descricaoCompra: descricaoCompra.value,
    };

    console.log(_data);

    // Do something with _data
    fetch("http://localhost:3000/approval-message", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    return console.log(_data);
  }

  validateData();
});
