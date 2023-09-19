function fetchDogData() {
    fetch('dogs.json')
        .then(response => response.json())
        .then(data => {
            const dogTable = document.getElementById('dogTable');
            dogTable.innerHTML = ''; // Clear existing data
            
            data.forEach(dog => {
                const row = document.createElement('tr');
                const breedCell = document.createElement('td');
                breedCell.textContent = dog.Breed;
                const colorCell = document.createElement('td');
                colorCell.textContent = dog.Color;
                const countryCell = document.createElement('td');
                countryCell.textContent = dog.Country;
                
                row.appendChild(breedCell);
                row.appendChild(colorCell);
                row.appendChild(countryCell);
                dogTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Add click event listener to the fetch button
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchDogData);