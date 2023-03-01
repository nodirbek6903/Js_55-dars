"use strict";

const uzs = document.querySelector("#uzs");
const usd = document.querySelector("#usd");

uzs.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();

  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      usd.value = (+uzs.value / data.current.usd).toFixed(2);
    } else {
      usd.value = "Something went wrong";
    }
  });

  //   status 200-ok ,404-not found,
  // statusTExt
  //response
  //readyState
});
