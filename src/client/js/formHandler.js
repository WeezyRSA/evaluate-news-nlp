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

const handleSubmit = function(e) {
   e.preventDefault();
   const txt = document.getElementById('txt').value;
   getApiKey().then(function(data) {
    const sentiment = getSentimentForText(baseUrl, data.application_key, txt)
    document.getElementById('results').textContent = sentiment;
  })
};

// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

export { handleSubmit }
