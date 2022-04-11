const togglePassword = document.querySelector("#eyePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", (e) => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  const classOld = password.getAttribute("type") === "password" ? "fa-eye-slash" : "fa-eye";
  const classNew = password.getAttribute("type") === "password" ?  "fa-eye" : "fa-eye-slash";

  password.setAttribute("type", type);
  // togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.remove(classOld);
  togglePassword.classList.add(classNew);
});

// <i class="fa-solid fa-eye-slash"></i>