const supabaseUrl = 'https://yrefzqsczilbqtlpqmfy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyZWZ6cXNjemlsYnF0bHBxbWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDY1OTAsImV4cCI6MTk5ODg4MjU5MH0._G4GiXf_K4sVcZA6Mbyiri6wOuUysz0fGYklIqV6hAw';
const supabase = createClient(supabaseUrl, supabaseKey);

const { createClient } = require('@supabase/supabase-js')


const herbsSubscription = supabase
  .from('herbs')
  .on('INSERT', (payload) => {
    // Update UI with new data
    console.log(payload.new);
  })
  .subscribe();

function renderHerbCards(herbs) {
  const container = document.getElementById('herb-cards');
  container.innerHTML = '';

  herbs.forEach((herb) => {
    const card = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${herb.name}</h5>
          <p class="card-text">${herb.description}</p>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', card);
  });
}

supabase
  .from('herbs')
  .select('*')
  .then((response) => {
    const herbs = response.data;
    renderHerbCards(herbs);
  })
  .catch((error) => console.log(error));
