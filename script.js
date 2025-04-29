const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books", {})
    .then(responsiveArr => {
      if (responsiveArr.ok) {
        return responsiveArr.json();
      }
    })
    .then(booksArray => {
      console.log(booksArray);
      const row = document.getElementById("bookGrid");

      booksArray.forEach(book => {
        const col = document.createElement("div");
        col.classList.add("col-sm-6", "col-md-4", "col-xl-3", "card", "text-truncate");

        const img = document.createElement("img");
        // img.style.height = "500px";
        img.style.aspectRatio = "2/3";
        img.src = book.img;
        img.classList.add("card-img-top", "object-fit-cover");
        img.alt = book.asin;

        const div = document.createElement("div");
        div.classList.add("card-body", "d-flex", "flex-column", "justify-content-between", "align-items-start");

        const title = document.createElement("h5");
        title.innerText = book.title;
        title.classList.add("card-title");

        const price = document.createElement("p");
        price.innerText = book.price + " $";
        price.classList.add("card-text");

        const button = document.createElement("a");
        button.classList.add("btn", "btn-dark", "py-0", "px-3");
        button.innerText = "Discard";

        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(button);
        col.appendChild(img);
        col.appendChild(div);

        row.appendChild(col);

        button.addEventListener("click", function (e) {
          col.classList.add("d-none");
        });
      });
    })
    .catch(error => console.log(error));
};

window.onload = () => {
  fetchBooks();
};
