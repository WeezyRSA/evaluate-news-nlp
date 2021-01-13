const fetch = require("node-fetch");

const postArticle = async (url = "", data = {}) => {
  const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  });
  try {
      const resData = await response.json();
      return resData;
  } catch (error) {
      console.log('error', error);
  }
};

const handleSubmit = function(e) {
  e.preventDefault();
  const url = document.getElementById('url').value;
  if (url == ""){
    alert("Please enter a url.");
  }
  else{
    postArticle('http://localhost:8081/meanapi', {url: url}).then(function(data) {
        console.log(data);
        document.getElementById('confidence').innerHTML = data.confidence;
        document.getElementById('agreement').innerHTML = data.agreement;
        document.getElementById('irony').innerHTML = data.irony;
        document.getElementById('subjectivity').innerHTML = data.subjectivity;
        document.getElementById('score_tag').innerHTML = data.score_tag;
        
      }
    )
  } 
};

export { handleSubmit, postArticle}
