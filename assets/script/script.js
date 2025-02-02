//elements of form
const inputName = document.querySelector("#name");
const inputAvatar = document.querySelector("#avatar");
const inputComment = document.querySelector("#comment");
const button = document.querySelector("#form-button");

//elements of chat
const chatList = document.querySelector("#chat-list");

//Create function to check 'viagra' , 'XXX' and replace to ***
const checkSpam = (str) => {
  return str.replace(/viagra|XXX/gi, "***");
};

//Add elements
const addComment = () => {
  const avatarValue = inputAvatar.value;
  const nameValue = inputName.value.trim();
  const commentValue = checkSpam(inputComment.value);

  const chatAvatar = document.createElement("img");
  chatAvatar.src = avatarValue;
  chatAvatar.style = "margin-right: 10px;";
  chatList.append(chatAvatar);

  const chatName = document.createElement("span");
  chatName.innerText =
    nameValue[0].toUpperCase() + nameValue.slice(1).toLowerCase();
  chatList.append(chatName);

  const chatComment = document.createElement("p");
  chatComment.innerText = commentValue;
  chatComment.style = "flex-basis: 100%; margin-bottom: 15px;";
  chatList.append(chatComment);

  inputAvatar.value = "";
  inputName.value = "";
  inputComment.value = "";
};

//Add event to button
button.addEventListener("click", addComment);
