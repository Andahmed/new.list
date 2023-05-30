let button = document.querySelector("button");
let container = document.getElementById("container");
let input = document.querySelector("input");

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash-o icon":
      eo.target.parentElement.parentElement.remove();

      break;

    case "icon-angry icon":
      eo.target.classList.add("dis");
      let heart = ` <span class="icon-heart"></span>   `;

      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.add("fenihe");
      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.remove("fenihe");
      eo.target.classList.add("dis");

      let addangry = ` <span class="icon-angry icon"></span> `;
      eo.target.parentElement.innerHTML += addangry;
      break;

    case "icon-star icon2":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;

    case "icon-star icon2 orange":
      eo.target.classList.remove("orange");

      break;

    default:
      break;
  }
});

button.addEventListener("click", (eo) => {
  eo.preventDefault();
  let tesk = `     <div class="teask">

  <span class="icon-star icon2"></span>

  <P lang="ar" class="text">  ${input.value}  </P>

  <div>
    <span class="icon-trash-o icon"></span>
    <span class="icon-angry icon"></span>
  </div>

</div>`;
  container.innerHTML += tesk;
  input.value = " ";
});
