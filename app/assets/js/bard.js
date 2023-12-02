$(document).ready(function () {
  url = window.location.pathname;
  var prompt = url.split("/").at(-1);
  console.log("Prompt", prompt);
  getSoal(prompt);
});

function getSoal(prompt) {
  $.ajax({
    url: "/xxx/" + prompt,
    dataType: "json",
    success: function (result) {
      console.log(result.response);
      //   setSoal(result.parse);
    },
  });
}
