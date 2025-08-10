document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#toggle-comments');
  const comments = document.querySelector('.comments');

  comments.style.display = 'none';
  button.setAttribute('aria-expanded', 'false');

  button.addEventListener('click', () => {
    const isVisible = comments.style.display === 'block';

    comments.style.display = isVisible ? 'none' : 'block';
    button.setAttribute('aria-expanded', !isVisible);
    button.textContent = isVisible ? 'Show comments' : 'Hide comments';
  });
});


<!--
Name: Mehul yadav
File: index.html
Date: 30 July 2025
Description: This page shares fun and informative content about wild and urban bears, with accessibility features added to make it easy for everyone to explore and enjoy.
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Accessibility Assessment</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="style.css">
  <script src="main.js" defer></script>
</head>

<body>
  <a href="#main-content" class="visually-hidden focusable skip-link">Skip to main content</a>

  <header class="header">
    <h1>Welcome to our wildlife website</h1>
  </header>

  <nav class="nav" aria-label="Main navigation">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Our team</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
    <form class="search" role="search" aria-label="Site search">
      <label for="search-field" class="visually-hidden">Search:</label>
      <input type="search" id="search-field" name="q" placeholder="Search query">
      <input type="submit" value="Go!">
    </form>
  </nav>

  <main id="main-content">
    <article>
      <h2>The trouble with Bears</h2>
      <p><strong>By Evan Wild</strong></p>
      <p>
        Tall, lumbering, angry, dangerous. The real live bears of this world are proud, independent creatures, self-serving and always on the hunt for food. Nothing like the bears you see on TV, like Baloo from renowned documentary, The Jungle Book.
      </p>
      <p>
        So what are bears really like, and why does the world's media portray them with such a skewed vision? In this article we try to answer those questions, and give you a real insight into the life of the bear.
      </p>
    </article>

      <section>
      <h3>Types of bear</h3>
      <p>Bears come in two varieties — large and medium. You don't get small bears...</p>
      <p>Bears can also be classified in terms of their habitat...</p>
      <table summary="This table lists types of bears, their coat, size, habitat, lifespan, and diet.">
        <caption>Bear facts by type</caption>
        <thead>
          <tr>
            <th scope="col">Bear Type</th>
            <th scope="col">Coat</th>
            <th scope="col">Adult size</th>
            <th scope="col">Habitat</th>
            <th scope="col">Lifespan</th>
            <th scope="col">Diet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Wild</th><td>Brown or black</td><td>1.4 to 2.8 meters</td><td>Woods and forests</td><td>25 to 28 years</td><td>Fish, meat, plants</td>
          </tr>
          <tr>
            <th scope="row">Urban</th><td>North Face</td><td>18 to 22</td><td>Condos and coffee shops</td><td>20 to 32 years</td><td>Starbucks, sushi</td>
          </tr>
        </tbody>
      </table>
    </section>

     <section>
      <h3>Urban Bears</h3>
      <figure>
        <img src="media/urban-bear.jpg" alt="A bear spotted in an urban neighborhood">
        <figcaption>A bear wandering near city streets.</figcaption>
      </figure>
    </section>

    <section>
      <h3>Wild Bears</h3>
      <figure>
        <img src="media/wild-bear.jpg" alt="A bear in the wilderness">
        <figcaption>A bear in its natural habitat.</figcaption>
      </figure>
    </section>

      <section>
      <h3>Habitats and Eating habits</h3>
      <p>Wild bears eat a variety of meat, fish, fruit, nuts...</p>
      <p>Urban (gentrified) bears on the other hand have largely abandoned the old ways...</p>
    </section>

    <section>
      <h3>Mating rituals</h3>
      <p>Bears are romantic creatures by nature...</p>
      <audio controls>
        <source src="media/bear.mp3" type="audio/mpeg">
        <source src="media/bear.ogg" type="audio/ogg">
        Your browser does not support the audio element. <a href="media/bear-transcript.txt">Read transcript</a>
      </audio>
    </section>

    <section>
      <h3>Bear Sounds</h3>
      <p>Listen to what a bear sounds like:</p>
      <audio controls>
        <source src="media/bear.mp3" type="audio/mpeg">
        <source src="media/bear.ogg" type="audio/ogg">
        Your browser does not support the audio element. <a href="media/bear-transcript.txt">Read transcript</a>
      </audio>
    </section>

       <section>
      <h3>About the author</h3>
      <p>Evan Wild is an unemployed plumber from Doncaster...</p>
    </section>

    <section>
      <h3>Comments</h3>
      <button id="toggle-comments" aria-controls="comment-section" aria-expanded="false">
        Show comments
      </button>
      <div class="comments" id="comment-section">
        <p>Bear sightings are common in suburban areas. Share your experiences!</p>
        <form>
          <label for="name">Your name:</label>
          <input type="text" id="name" placeholder="Enter your name">

          <label for="comment">Your comment:</label>
          <textarea id="comment" placeholder="Enter your comment"></textarea>

          <button type="submit">Add comment</button>
        </form>
        <div class="user-comment">
          <h4>Bob Fossil</h4>
          <p>Oh I am so glad you taught me all about the big brown angry guys in the woods...</p>
        </div>
      </div>
    </section>

      <aside>
      <h2>Related</h2>
      <ul>
        <li><a href="#">The trouble with Bees</a></li>
        <li><a href="#">The trouble with Otters</a></li>
        <li><a href="#">The trouble with Penguins</a></li>
        <li><a href="#">The trouble with Octopi</a></li>
        <li><a href="#">The trouble with Lemurs</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>©Copyright 2050 by nobody. All rights reversed.</p>
  </footer>
  
</body>
</html>
