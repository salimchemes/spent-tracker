export function showToaster(message, isSuccess = true) {
  const toaster = document.getElementById("toaster");
  if (toaster) {
    toaster.textContent = message;

    // toaster.style.backgroundColor = isSuccess ? "#4caf50" : "red";
    toaster.classList.add("show");
    toaster.classList.add(isSuccess ? "success" : "error");
    setTimeout(() => {
      toaster.classList.remove("show");
    }, 2000);
  }
}
