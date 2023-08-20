$(document).ready(function () {
  console.log(window.location.pathname);
  url = window.location.pathname;
  var tags = url.split("/").at(-1);
  // var parent = url.split("/").at(-2);
  // console.log(file);
  console.log(parent);
  getSoal(tags);
  console.log("INI FILE MODUL JS EXTEND");
});

function getSoal(tags) {
  $.ajax({
    url: "/api/kuis/" + tags,
    dataType: "json",
    success: function (result) {
      setSoal(result.parse);
    },
  });
}

async function setSoal(data) {
  console.log(data);

  await Promise.all(
    data.map(async (element) => {
      console.log(element);

      const escapedQuestion = escapeHTML(element.question);

      let html = "";
      html += `
      <div id="${element.id}" class="w-full mb-10 py-5 rounded-2xl bg-white shadow hover:shadow-lg transition duration-200">
        <div class="flex flex-wrap text-center mx-4">
          <a href="#${element.id}" class="flex flex-wrap w-full md:w-full text-biru">
            <h2 class="font-semibold text-md text-biru py-1">${escapedQuestion}</h2>
          </a>
        </div>
        <span class="w-full h-[1px] my-4 block mx-auto bg-kuning"></span>
        <div class="flex flex-wrap text-center px-4">
      `;
      for (const key in element.answers) {
        const answer = element.answers[key];
        if (answer !== null) {
          const escapedKey = escapeHTML(answer);
          html += `<div class="flex flex-wrap w-full my-1 py-1 px-4 hover:bg-slate-200 rounded-lg text-biru">
            <input type="checkbox" class="rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="${element.id}_${key}" name="vehicle1" value="${key}"/> 
            <label for="${element.id}_${key}" class="text-biru mx-4"> ${escapedKey}</label>
          </div>`;
        }
      }
      html += `
        </div>
      </div>
      `;
      return html;
    })
  ).then((result) => {
    let showData = result?.filter((item) => typeof item !== "undefined")?.join("") || "";

    // Show data nya bakal disini
    $("#materi").html(showData);
    console.log("TEST DATA: ", {
      result: showData,
    });
  });
}

function escapeHTML(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
