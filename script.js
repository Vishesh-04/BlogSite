function generateBlogCard() {
    var image = document.getElementById('image').value;
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    
    var blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    
    var img = document.createElement('img');
    img.src = image;
    blogCard.appendChild(img);
    
    var heading = document.createElement('h2');
    heading.textContent = name;
    blogCard.appendChild(heading);
    
    var para = document.createElement('p');
    para.textContent = description;
    blogCard.appendChild(para);
    
    document.getElementById('output').appendChild(blogCard);
    
    // Reset input fields
    document.getElementById('image').value = '';
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
  }