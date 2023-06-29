// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/answers';

const questionInput = document.getElementById('question-input');
const submitBtn = document.getElementById('submit-btn');
const answerContainer = document.getElementById('answer');

submitBtn.addEventListener('click', () => {
  const question = questionInput.value.trim();

  if (question !== '') {
    // Prepare the request data
    const requestData = {
      question: question,
      model: 'davinci-codex', // The OpenAI model to use
      examplesContext: '', // Additional context if required
      maxTokens: 50, // Adjust the number of tokens for the answer length
      stop: ['\n'] // Specify tokens at which the answer should stop generating
    };

    // Make the API request
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      const answer = data.answers[0].text;
      answerContainer.textContent = answer;
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }
});
