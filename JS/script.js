(function () {
  // add list section
  let styleAdd = document.getElementById("add-wrapper");
  let list = document.querySelector("#list-internal-container-wrapper");
  let rightList = document.querySelector(
    "#list-internal-right-container-wrapper"
  );
  let textElement = document.querySelector(".text-wrapper");
  let leftPush = document.getElementsByClassName("text-right-wrapper");
  let leftListItem = document.querySelector("#left-list");
  let deletElement = document.querySelector(".delet-wrapper");
  styleAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let inputTab = document.querySelector(".input-wrapper");
    const li = document.createElement("li");
    const text = document.createElement("span");
    const temp = document.createElement("span");
    const edit = document.createElement("span");
    const right = document.createElement("span");
    const left = document.createElement("span");

    text.textContent = inputTab.value;
    console.log(inputTab);
    text.classList.add("text-wrapper");

    li.appendChild(text);
    let num = inputTab.value;

    if (num.length > 1) {
      //   temp.textContent = "delete";
      edit.className = "edit-wrapper";
      right.className = "left-wrapper";
      temp.className = "delete-wrapper";
      left.className = "text-right-wrapper";

      li.appendChild(edit);
      li.appendChild(temp);
      li.appendChild(right);
      list.appendChild(li);
      console.log(num.length);
    }
    inputTab.value = " ";
  });

  // remove list section on the pending section

  list.addEventListener("click", (e) => {
    if (e.target.className === "delete-wrapper") {
      const li = e.target.parentElement;
      list.removeChild(li.parentElement);
    }
  });
  list.addEventListener("click", (e) => {
    if (e.target.className == "edit-wrapper") {
      const li = e.target.parentElement;
      li.parentElement.contentEditable = true;
    }
  });
  list.addEventListener("click", (e) => {
    if (e.target.className == "left-wrapper") {
      const li = e.target.parentElement;
      //   rightList.appendChild(left);
      rightList.appendChild(li.parentElement);
      list.removeChild(li.parentElement);
    }
  });

  // completed list section on the pending section
  rightList.addEventListener("click", (e) => {
    if (e.target.className === "delete-wrapper") {
      const li = e.target.parentElement;
      rightList.removeChild(li.parentElement);
    }
  });
  rightList.addEventListener("click", (e) => {
    if (e.target.className == "edit-wrapper") {
      const li = e.target.parentElement;
      li.parentElement.contentEditable = true;
    }
  });
  rightList.addEventListener("click", (e) => {
    if (e.target.className === "text-right-wrapper") {
      const li = e.target.parentElement;
      list.appendChild(li);
      rightList.removeChild(li);
    }
  });
})();
