document.addEventListener("DOMContentLoaded", function (event) {
  const submitButton = document.getElementById("BtnSend");

  function validateData() {
    const name = document.querySelector("#inpnome");
    const age = document.querySelector("#inpidade");

    if (name.value === "" || age.value === "") {
      return;
    } else {
      const _data = {
        title: name.value,
        userId: age.value,
      };

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
      return console.log(_data);
    }
  }

  submitButton.addEventListener("click", validateData);
});
