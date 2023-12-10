$(document).ready(function () {
  $("#registerForm").submit(function (e) {
    e.preventDefault();

    console.log("YAYA");
    const first_name = $("#first_name").val();
    const last_name = $("#last_name").val();
    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();

    $.ajax({
      url: "/api/auth/register",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ first_name, last_name, username, email, password }),
      success: function (response) {
        // Handle successful login response here
        console.log("Register successful");
        window.location.href = "/login"; // Redirect to dashboard or any desired page
      },
      error: function (xhr, status, error) {
        // Handle login error response here
        console.error("Register failed");
      },
    });
  });
});
