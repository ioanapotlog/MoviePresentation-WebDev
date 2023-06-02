window.onload = function() {
    loadComments();
        
    const form = document.getElementById('reviewForm');
    
    const submitButton = form.querySelector('button[type="submit"]');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const stars = document.getElementById('stars').value;
        const review = document.getElementById('review').value;

        /* Validarea datelor dintr-un formular folosind expresii regulate: test() */
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name.trim())) {
            alert('Please enter a valid name (only letters and spaces are allowed).');
            return;
        }

        const starsRegex = /^[1-5]$/;
        if (!starsRegex.test(stars)) {
            alert('Please enter a valid number of stars (1-5).');
            return;
        }

        if (review.trim() === '') {
            alert("Please enter your review.");
            return;
        }

        console.log('Name:', name);
        console.log('Stars:', stars);
        console.log('Review:', review);

        const comment = {name, stars, review, date: new Date()};
        addComment(comment);

        let comments = localStorage.getItem("comments");
        if (comments) {
            comments = JSON.parse(comments);
            comments.push(comment);
        }
        else {
            comments = new Array(comment);
        }
        localStorage.setItem("comments", JSON.stringify(comments)); 

        form.reset();
    });
    
    function loadComments() {
        let comments = localStorage.getItem("comments");
        if (comments) {
            comments = JSON.parse(comments);
            for (const c of comments) {
                addComment(c);
            }
        }
    }

    function addComment(comment) {
        const newElement = document.createElement("div");
        newElement.classList.add("comment");
        
        const h2 = document.createElement("h2");
        h2.innerText = comment.name;
        newElement.appendChild(h2);
        
        const spanDate = document.createElement("span");
        spanDate.innerText = `Date: ${comment.date.toLocaleString()}`;
        spanDate.classList.add("date");
        newElement.appendChild(spanDate);
        
        const spanStars = document.createElement("span");
        const numStars = parseInt(comment.stars);
        spanStars.classList.add("stars");
        newElement.appendChild(spanStars);

        /* Folosirea svg */

        function createStars(numStars) {
            const starSVG = '<svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.867 53.867" xml:space="preserve">' +
              '<polygon style="fill:#EFCE4A;" points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>' +
              '</svg>';
          
            let stars = '';
            for (let i = 0; i < numStars; i++) {
              stars += starSVG;
            }
            return stars;
          }
        spanStars.innerHTML = `Stars: ${createStars(numStars)}`;

        const p = document.createElement("p");
        p.innerText = comment.review;
        newElement.appendChild(p);

        const article = document.getElementById('comments');
        article.appendChild(newElement);
    }

}
