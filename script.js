function show(params) {
  const elem = document.querySelector(`#${params}`);
  const ativo = document.querySelector(".ativo");
  const remover = document.querySelector(".visivel");

  if (ativo) {
    ativo.classList.remove("ativo");
  }

  if (remover) {
    remover.classList.remove("visivel");
    remover.classList.add("oculto");
  }
  elem.childNodes[3].classList.remove("oculto");
  elem.childNodes[3].classList.add("visivel");
  elem.childNodes[1].classList.add("ativo");
  console.log(elem);
}
