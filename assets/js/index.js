// add strong tag to text on li with ':' at the end of it except "Optional fillings:"
const listItems = document.getElementsByTagName("li");

for (const i in listItems) {
  const listItem = listItems[i];
  const regex = ".+?:";

  if (listItem.innerText !== undefined) {
    const textWantToChange = listItem.innerText.match(regex);

    if (
      textWantToChange !== null &&
      textWantToChange[0] !== "Optional fillings:"
    ) {
      const oldText = listItem.innerText;
      const newText = oldText.replace(
        textWantToChange,
        `<strong>${textWantToChange[0]}</strong>`
      );

      listItem.innerHTML = newText;
    }
  }
}
