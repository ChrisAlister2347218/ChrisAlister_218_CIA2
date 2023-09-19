document.addEventListener("DOMContentLoaded", function () {
    const dogApi = "https://dog.ceo/api/breeds/image/random";
    const dogButton = document.getElementById("dog");
    const clearDogsButton = document.getElementById("clearDogs");
    const dogContainer = document.getElementById("dog-container");

    clearDogsButton.addEventListener("click", () => {
        dogContainer.innerHTML = "";
    });

    dogButton.addEventListener("click", async () => {
        await fetch(dogApi)
            .then((res) => res.json())
            .then((data) => {
                const imageUrl = data.message;

                const newDogImage = document.createElement("img");
                newDogImage.className = "dog-image";
                newDogImage.src = imageUrl;
                newDogImage.alt = "Random Dog";

                dogContainer.innerHTML = ""; 
                dogContainer.appendChild(newDogImage);
            })
            .catch((err) => {
                console.log(err);
            });
    });
});
