const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

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
const getSentimentForText = async (baseUrl, apiKey, txt) => {
  const res = await fetch(baseUrl + apiKey + '&of=json&txt='+ txt + '&model=Restaurants&lang=en');
    try { 
      const data = await res.json();
      //console.log(data);
      return data;
    }
    catch(e) {
      console.log('error: ' + e);
    }
};

const handleSubmit = function(e) {
   e.preventDefault();
   const txt = document.getElementById('txt').value;
   getApiKey().then(function(data) {
    getSentimentForText(baseUrl, data.application_key, txt).then(function(sentiment){
      console.log(sentiment);
      document.getElementById('irony').innerHTML = sentiment.irony;
      document.getElementById('confidence').innerHTML = sentiment.confidence;
    })
  })
};

export { handleSubmit }
