window.onload = () => {
  // const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
  const token = document.cookie;
  // Mengambil nilai token dari cookie dengan nama 'token'
  console.log("Token", token);

  $("#logoutButton").click(function (e) {
    e.preventDefault();

    $.ajax({
      url: "/api/auth/logout",
      method: "POST", // Sesuaikan dengan metode yang diharapkan
      success: function (response) {
        // Handle successful logout response here
        console.log("Logout successful");
        window.location.href = "/login"; // Redirect ke halaman login atau halaman lain yang diinginkan
      },
      error: function (xhr, status, error) {
        // Handle logout error response here
        console.error("Logout failed");
      },
    });
  });
};

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
}
