const displayArray = document.querySelector(".array-display");
const displayUnique = document.querySelector(".display-removed-duplicate");
const btnRemove = document.querySelector(".btn-remove-dup");

const array = [1, 2, 3, 4, 2, 1];
const numberSet = new Set();

displayArray.textContent = `Initial Array: ${array}`;

function removeDuplicates() {
  array.map((element) => {
    numberSet.add(element);
  });
  numberSet.forEach((element) => {
    displayUnique.textContent += ` ${element},`;
  });
}

btnRemove.addEventListener("click", () => {
  if (numberSet.size === 0) {
    removeDuplicates();
  } else {
    const error = document.querySelector(".error");
    error.textContent = "Duplicates are already removed";
  }
});
