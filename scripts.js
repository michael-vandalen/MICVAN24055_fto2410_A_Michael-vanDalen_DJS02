const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  result.innerText = Math.floor(dividend / divider); // Math.floor to insure no decimal numbers

  if (dividend === "" || divider === "") {
    // If inputs are empty
    result.innerText =
      "Division not performed. Both values are required inputs. Try again";
    return;
  }

  try {
    // If divider is equal to 0
    if (Number(divider) === 0) {
      throw new Error(
        "Division not performed. Invalid number provided. Try again"
      );
    }
  } catch (error) {
    console.error(error);
    result.innerText = error.message;
  }

  try {
    // If either input is NaN
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Something critical went wrong. Please reload the page.");
    }
  } catch (error) {
    console.log(error);

    document.body.innerHTML = `<h1 style="color: red; text-align: center;">
    Something critical went wrong. Please reload the page.</h1>`;
  }
});
