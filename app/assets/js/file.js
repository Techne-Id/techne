$(document).ready(function () {
  console.log(window.location.pathname);
  url = window.location.pathname;
  var file = url.split("/").at(-1);
  var parent = url.split("/").at(-2);
  console.log(file);
  console.log(parent);
  getMateri(parent, file);
  console.log("INI FILE MODUL JS EXTEND");
});

function getMateri(parent, file) {
  $.ajax({
    url: "/api/markdown/" + parent + "/" + file,
    dataType: "json",
    success: function (result) {
      console.log(result);
      // var reader = new commonmark.Parser();
      // var writer = new commonmark.HtmlRenderer();
      // var parsed = reader.parse(result.raw); // parsed is a 'Node' tree
      // transform parsed if you like...
      // var test = writer.render(parsed); // result is a String

      // console.log("test", result.parse);
      // document.getElementById("markdowntest").innerHTML = marked.parse(result.raw);
      // document.getElementById("markdowntest").innerHTML = result.parse;

      $("#file").html(result.parse);
      $("#judul").html(result.data.name);
    },
  });
}
