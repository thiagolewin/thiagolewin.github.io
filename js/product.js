function getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  console.log("a")
  const container = document.querySelector(".container")
  if(getParameterByName("foto") === undefined) {
    container.children[0].src = "img/cafe.jpg"
  } else {
    container.children[0].src = "img/cafe.jpg"
  }
  container.children[1].textContent = getParameterByName("name")
  container.children[2].textContent = getParameterByName("descripcion")