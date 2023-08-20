console.log("INI FILE MATERI JS EXTEND");

// $.ajax({
//   url: "/materi/get/4",
//   dataType: "json",
//   success: function (result) {
//     console.log("DATA: ", result);
//     result.data.forEach((item) => {
//       $("#materi").append(`
//       <span>
//       ${item.name}
//       </span>
//       </br>
//       `);
//     });
//   },
// });

$.ajax({
  url: "/materi/markdown",
  dataType: "json",
  success: function (result) {
    // var reader = new commonmark.Parser();
    // var writer = new commonmark.HtmlRenderer();
    // var parsed = reader.parse(result.raw); // parsed is a 'Node' tree
    // transform parsed if you like...
    // var test = writer.render(parsed); // result is a String

    console.log("test", result.parse);
    // document.getElementById("markdowntest").innerHTML = marked.parse(result.raw);
    // document.getElementById("markdowntest").innerHTML = result.parse;

    // $("#markdown").html(result.parse);
  },
});
