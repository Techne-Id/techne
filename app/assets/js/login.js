$(document).ready(function () {
  $(".loginButton").on("click", function () {
    console.log("YAYA");
    var authUrl = $(this).data("auth");
    window.location.href = "api/auth" + authUrl;
  });

  $("#loginForm").submit(function (e) {
    e.preventDefault();

    const identifier = $("#identifier").val();
    const password = $("#password").val();

    console.log(identifier, password);
    $.ajax({
      url: "/api/auth/login",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ identifier, password }),
      success: function (response) {
        // Handle successful login response here
        window.location.href = "/"; // Redirect to dashboard or any desired page
      },
      error: function (xhr, status, error) {
        // Handle login error response here
        console.error("Login failed");
      },
    });
  });
});
