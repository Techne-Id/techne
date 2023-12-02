"use strict";

class BardController {
  async getByPrompt(req, res, next) {
    const prompt = req?.params?.prompt;

    const apiUrl = "http://127.0.0.1:5000/"; // Ganti dengan URL API Flask Anda

    const requestBody = {
      prompt: prompt,
      //   prompt: "Presiden amerika pertama",
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        res.status(200).json({ response: data.response }); // Menggunakan 'response' dari JSON Flask sebagai respons
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "An error occurred" });
      });
  }
}

module.exports = new BardController();
