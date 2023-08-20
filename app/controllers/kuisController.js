"use strict";

require("dotenv").config();

class KuisController {
  async getByTags(req, res, next) {
    const tags = req?.params?.tags;

    const apiKey = process.env.QUIZ_IO_API;
    const apiUrl = process.env.QUIZ_IO_URL;

    const queryParams = new URLSearchParams({
      apiKey: apiKey,
      limit: 100,
      tags: tags,
      category: "",
      difficulty: "easy",
    });

    const url = `${apiUrl}?${queryParams}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        res.status(200).json({ parse: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}

module.exports = new KuisController();
