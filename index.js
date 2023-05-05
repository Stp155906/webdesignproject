// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// Create a new Supabase client instance with your API URL and API key
const supabase = createClient('https://<your-project-id>.supabase.co', '<your-anon-key>');

// Define a function to get data from Supabase
async function getData() {
  try {
    // Query your Supabase database using the "supabase" client
    const { data, error } = await supabase.from('<your-table-name>').select('*');

    if (error) {
      throw error;
    }

    // Log the retrieved data to the console
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Call the "getData" function when the page has finished loading
window.addEventListener('load', getData);
