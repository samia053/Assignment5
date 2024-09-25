function getInputFieldValuedById(id){
    const inputValue = document.getElementById(id).value;
    const InputNumber = parseFloat(inputValue);

    return InputNumber;
}

function getTextFieldValueById(id){
    const textValue =document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function  showSectionById(id){
    document.getElementById("donation").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    //show the section with the provided id

    document.getElementById(id).classList.remove("hidden");
}