
const card = document.querySelector(".climbCard")
const cardLink = document.querySelector(".cardLink")

card.addEventListener("click", handleClick)

function handleClick(event) {

  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    cardLink.click();
  }
}

