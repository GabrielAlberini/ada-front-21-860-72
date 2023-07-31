const $body = document.querySelector("body")
const $button = document.querySelector("#button")

$button.addEventListener("click", () => {
  if(!$body.classList.contains("dark")) {
    $body.classList.add("dark")
  } else {
    $body.classList.remove("dark")
    $body.removeAttribute("class")
  }
})
