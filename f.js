document.getElementById('uploadBtn').addEventListener('click', function() {
  const fileInput = document.getElementById('photoUpload');
  const file = fileInput.files[0];

  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const photoGallery = document.getElementById('photoGallery');
          const photoItem = document.createElement('div');
          photoItem.classList.add('photo-item');

          photoItem.innerHTML = `
              <img src="${e.target.result}" alt="Uploaded Photo">
              <button class="likeBtn">Like (<span class="likeCount">0</span>)</button>
              <button class="followBtn">Follow</button>
              <button class="deleteBtn">Delete</button>
          `;

          photoGallery.appendChild(photoItem);

          // Add event listeners for like, follow, and delete buttons
          photoItem.querySelector('.likeBtn').addEventListener('click', function() {
              const likeCount = photoItem.querySelector('.likeCount');
              likeCount.textContent = parseInt(likeCount.textContent) + 1;
          });

          photoItem.querySelector('.followBtn').addEventListener('click', function() {
              alert('You followed this user!');
          });

          photoItem.querySelector('.deleteBtn').addEventListener('click', function() {
              photoGallery.removeChild(photoItem);
          });
      };

      reader.readAsDataURL(file);
      fileInput.value = ''; // Reset the file input
  } else {
      alert('Please select a file to upload.');
  }
});

