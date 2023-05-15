$(document).ready(function () {
  console.log(window.location.href);
  var materi = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
  getMateri(materi);
  console.log("INI FILE MODUL JS EXTEND");
});

function getMateri(paernt) {
  $.ajax({
    url: "/api/materi/" + paernt,
    dataType: "json",
    success: function (result) {
      setMateri(result.data);
    },
  });
}

function getChild(child) {
  return new Promise((resolve, reject) => {
    var html = "";
    $.ajax({
      url: "/api/materi/1?child=" + child,
      dataType: "json",
      success: function (result) {
        result.data.map((item) => {
          judul = item.name.replaceAll("_", " ");
          var arr = judul.split(" ");
          for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          }
          var judul = arr.join(" ");

          if (item.type == 1) {
            var svg = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-biru text-gray-400 group-hover:text-biru dark:group-hover:text-gray-400 shrink-0">
              <title>Lesson</title>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
            </svg>
            `;
          } else {
            var svg = `
            <svg xmlns="http://www.w3.org/2000/svg" role="img" width="24" viewBox="0 0 24 24" class="fill-current">
              <title>BookStack</title>
              <path d="M.3013 17.6146c-.1299-.3387-.5228-1.5119-.1337-2.4314l9.8273 5.6738a.329.329 0 0 0 .3299 0L24 12.9616v2.3542l-13.8401 7.9906-9.8586-5.6918zM.1911 8.9628c-.2882.8769.0149 2.0581.1236 2.4261l9.8452 5.6841L24 9.0823V6.7275L10.3248 14.623a.329.329 0 0 1-.3299 0L.1911 8.9628zm13.1698-1.9361c-.1819.1113-.4394.0015-.4852-.2064l-.2805-1.1336-2.1254-.1752a.33.33 0 0 1-.1378-.6145l5.5782-3.2207-1.7021-.9826L.6979 8.4935l9.462 5.463 13.5104-7.8004-4.401-2.5407-5.9084 3.4113zm-.1821-1.7286.2321.938 5.1984-3.0014-2.0395-1.1775-4.994 2.8834 1.3099.108a.3302.3302 0 0 1 .2931.2495zM24 9.845l-13.6752 7.8954a.329.329 0 0 1-.3299 0L.1678 12.0667c-.3891.919.003 2.0914.1332 2.4311l9.8589 5.692L24 12.1993V9.845z" />
            </svg>
            `;
          }

          html += `
          <a href="${child}/${item.slug}" class="flex flex-wrap w-full my-2 py-2 px-4 hover:bg-slate-200 rounded-lg text-biru">
            ${svg}
            <p class="text-biru mx-4">${judul}</p>
          </a>
        `;
        });
        resolve(html);
      },
    });
  });
}

async function setMateri(data) {
  judul = data.parent.name.replaceAll("_", " ").toUpperCase();
  $("#judul").html("MODUL " + judul);

  await Promise.all(
    data.child.map(async (element) => {
      judulReplace = element.name.replaceAll("_", " ");

      var arr = judulReplace.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

      var parentJudul = arr.join(" ");

      let html = "";
      html += `
      <div id="${parentJudul}" class="w-full mb-10 py-5 rounded-2xl bg-white shadow hover:shadow-lg transition duration-200">
        <div class="flex flex-wrap text-center mx-4">
          <a href="#${parentJudul}" class="flex flex-wrap w-full md:w-2/3 text-biru">
            <h2 class="font-semibold text-xl text-biru py-1">${parentJudul}</h2>
          </a>
        </div>
        <span class="w-full h-[1px] my-4 block mx-auto bg-kuning"></span>
        <div class="flex flex-wrap text-center px-4">
      `;
      if (element.type == 0) {
        const datChild = await getChild(element.slug);
        html += datChild;
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
