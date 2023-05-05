// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// Create a new Supabase client instance with your API URL and API key
const supabase = createClient('https://<your-project-id>.supabase.co', '<your-anon-key>');

// Define a function to generate a Bootstrap card based on a row of data
function generateCard(data) {
  // Create the card element
  const card = document.createElement('div');
  card.classList.add('col-md-4', 'mb-4');

  // Create the card contents
  const image = document.createElement('img');
  image.classList.add('card-img-top');
  image.src = data.image_url;
  image.alt = data.name;

  const body = document.createElement('div');
  body.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = data.name;

  const description = document.createElement('p');
  description.classList.add('card-text');
  description.textContent = data.description;

  const link = document.createElement('a');
  link.classList.add('btn', 'btn-primary');
  link.href = data.link_url;
  link.textContent = 'Go somewhere';

  // Add the card contents to the card element
  body.appendChild(title);
  body.appendChild(description);
  body.appendChild(link);

  card.appendChild(image);
  card.appendChild(body);

  // Return the card element
  return card;
}

// Define a function to render the generated cards to the page
function renderCards(cards) {
  // Get the container element for the cards
  const container = document.getElementById('card-container');

  // Remove any existing cards from the container
  container.innerHTML = '';

  // Add the generated cards to the container
  for (const card of cards) {
    container.appendChild(card);
  }
}

// Define a function to get data from Supabase and generate cards
async function getData() {
  try {
    // Query your Supabase database using the "supabase" client
    const { data, error } = await supabase.from('<your-table-name>').select('*');

    if (error) {
      throw error;
    }

    // Generate a card for each row of data
    const cards = data.map(generateCard);

    // Render the generated cards to the page
    renderCards(cards);
  } catch (error) {
    console.error(error);
  }
}

// Call the "getData" function when the page has finished loading
window.addEventListener('load', getData);
