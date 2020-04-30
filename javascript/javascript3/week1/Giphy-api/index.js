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

const resetData = (result) => {
  ulTag.innerHTML = "";
  return result;
};
const renderData = (result) => {
  
  for (gif of result.data) {
    const liImg = document.createElement("li");
    ulTag.appendChild(liImg);

    liImg.innerHTML = `<video autoplay loop>
    <source src="${gif.images["original_mp4"].mp4}" type="video/mp4">
    </video>`;
  }
  return result;
};

const renderError = () => {
  pTag.textContent = "Error, gif not found";
};

const clearError = () => {
  pTag.textContent = "";
};

const request = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(resetData)
    .then(renderData)
    .then(clearError)
    .catch(renderError);
};

const onClickHandler = () => {
  const word = getWord(wordInput);
  if (!word) {
    renderError();
    return;
  }

  let count = 25;
  if (numberInput.value) {
    count = numberInput.value;
  }
  request(`${gifApiKey}&limit=${count}&q=${word}`);
};
btnTag.addEventListener("click", onClickHandler);

const onKeyUpEnter = () => {
  if (event.keyCode === 13) {
    onClickHandler();
  }
};
numberInput.addEventListener("keyup", onKeyUpEnter);
wordInput.addEventListener("keyup", onKeyUpEnter);
