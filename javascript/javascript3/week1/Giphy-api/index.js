const gifApiKey =
  "https://api.giphy.com/v1/gifs/search?api_key=8NNymFfoEEjJamqoXEH6D8h9XIryi2cp&offset=0&rating=G&lang=en";
const wordInput = document.getElementById("input-word");
const numberInput = document.getElementById("number-gif");
wordInput.focus();
const ulTag = document.getElementById("list-images");
const btnTag = document.getElementById("get-gif");
const pTag = document.getElementById("error");

const getWord = (tag) => {
  return tag.value.replace(/^\s+|\s+$/g, "");
};

const resetData = () => {
  ulTag.innerHTML = "";
};
const renderData = (result) => {
  resetData();
  for (gif of result.data) {
    const liImg = document.createElement("li");
    ulTag.appendChild(liImg);

    Object.keys(gif.images).forEach((item) => {
      if (item === "original_mp4") {
        liImg.innerHTML = `<video autoplay loop>
        <source src="${gif.images[item].mp4}" type="video/mp4">
        </video>`;
      }
      return result;
    });
  }
};

const renderError = () => {
  pTag.textContent = "Error, gif not found";
};

const request = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(renderData)
    .catch(renderError);
};

const onClickHandler = () => {
  const word = getWord(wordInput);
  if (!word) {
    renderError();
  }
  if (numberInput.value) {
    const urlLimit = `${gifApiKey}&q=&limit=${numberInput.value}&q=${word}`;
    request(urlLimit);
  } else {
    const url = `${gifApiKey}&q=&limit=25&q=${word}`;
    request(url);
  }
};
btnTag.addEventListener("click", onClickHandler);

function onKeyUpEnter() {
  if (event.keyCode === 13) {
    onClickHandler();
  }
}
numberInput.addEventListener("keyup", onKeyUpEnter);
wordInput.addEventListener("keyup", onKeyUpEnter);
