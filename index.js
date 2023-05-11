const supabaseUrl = '<YOUR_SUPABASE_URL>';
const supabaseKey = '<YOUR_SUPABASE_API_KEY>';
const supabase = createClient(supabaseUrl, supabaseKey);

supabase
  .from('herbs')
  .select('*')
  .then((response) => {
    const herbs = response.data;
    // call function to render herb cards with data
  })
  .catch((error) => console.log(error));
  function renderHerbCards(herbs) {
    const container = document.getElementById('herb-cards');
    container.innerHTML = '';
  
    herbs.forEach((herb) => {
      const card = `
        <div class="card">
          <img src="${herb.image_url}" class="card-img-top" alt="${herb.name}">
          <div class="card-body">
            <h5 class="card-title">${herb.name}</h5>
          </div>
        </div>
      `;
  
      container.innerHTML += card;
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
