const btn = document.getElementById("buttonId");
const text = document.getElementById("textData");
const clearBtn = document.getElementById("clearId");

btn.addEventListener('click', () => {
    const inputVal = document.querySelector("#inputValue").value;

    if (inputVal == "") {
        alert("Enter a Valid url");
    } else {
        const isValidURL = (url) => {
            try {
                new URL(url);
                text.innerHTML = "Valid";
            } catch (error) {
                text.innerHTML = "Invalid";
            }
        }

        isValidURL(inputVal);
    }
});


clearBtn.addEventListener('click', () => {
    text.innerHTML = "";
    document.getElementById("inputValue").value = "";

});
