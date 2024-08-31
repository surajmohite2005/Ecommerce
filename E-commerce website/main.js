// JavaScript for handling product recommendations
document.addEventListener('DOMContentLoaded', () => {
    fetch('recommendations.php')
        .then(response => response.json())
        .then(data => {
            const recommendationsDiv = document.getElementById('recommendations');
            data.forEach(item => {
                const recommendationItem = document.createElement('div');
                recommendationItem.classList.add('recommendation-item');
                
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.name;
                
                const textDiv = document.createElement('div');
                const name = document.createElement('h3');
                name.textContent = item.name;
                
                const price = document.createElement('p');
                price.textContent = `$${item.price}`;
                
                textDiv.appendChild(name);
                textDiv.appendChild(price);
                
                recommendationItem.appendChild(image);
                recommendationItem.appendChild(textDiv);
                
                recommendationsDiv.appendChild(recommendationItem);
            });
        })
        .catch(error => console.error('Error fetching recommendations:', error));
});
