import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';


const getSentimentForText = async (baseUrl, apiKey, txt) => {
  const settings = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json"
    }
  };
  const res = await fetch(baseUrl + apiKey + '&of=json&txt='+ txt + '&model=Restaurants&lang=en', settings);
    try { 
      const data = await res.json();
      console.log(data);
      return data;
    }
    catch(e) {
      console.log('error: ' + e);
    }
};

const processText = function(e) {
  getApiKey().then(function(data) {
    const txt = document.getElementById('txt').value;
    const sentiment = getSentimentForText(baseUrl, data.application_key, txt)
    document.getElementById('results').textContent = sentiment;
  })
};



const getApiKey = async () => {
  const request = await fetch('http://localhost:8081/key');
  
  try {
    const apiKey = await request.json();
    return apiKey;
  }
  catch(e) {
    console.log('error: ' + e);
  }
};
document.getElementById('post').addEventListener('click', processText);

