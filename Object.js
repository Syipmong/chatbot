
window.onload = function(){
    
   // alert('Hello\nGood day. please comment any suggestion or bug you find in the program.And use the moon or sun icon at the top right corner of the screen to toggle between nightmode and daymode\nBot created by\nYipmong')
    
  const msgButton = document.getElementById('sendmsg');
  const messageInput = document.querySelector('#msg');
  const messageDisplay = document.querySelector('.messages-container');

  msgButton.addEventListener('click', () => {
    const message = messageInput.value;
    messageInput.value = '';

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('sent-message-display');

    const messageP = document.createElement('p');
    messageP.innerText = message;
    

    messageDiv.appendChild(messageP);
    messageDisplay.appendChild(messageDiv);

    messageDisplay.scrollTop = messageDisplay.scrollHeight;

    sendMessage(message);
  });

  function sendMessage(message) {
  const typingIndicator = document.querySelector('.typing-indicator');
  typingIndicator.style.display = 'block';

  setTimeout(() => {
    const response = getChatbotResponse(message);
    typingIndicator.style.display = 'none';

    const responseDiv = document.createElement('div');
    responseDiv.classList.add('received-message-display');
    const responseP = document.createElement('p');
    responseP.innerText = response;
    responseDiv.appendChild(responseP);
    messageDisplay.appendChild(responseDiv);
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
  }, 3000); // 1 second delay
}





const nightModeBtn = document.getElementById('toggle-night-mode');
const faMoon = document.querySelector('.fa-moon-o');
const faSun = document.querySelector('.fa-sun-o');
console.log(faSun);


nightModeBtn.addEventListener('click', toggleNightMode);

function toggleNightMode() {
  document.body.classList.toggle('night-mode');
  faMoon.classList.toggle('hidden');
  faSun.classList.toggle('hidden');
  if (document.body.classList.contains('night-mode')) {
  faMoon.style.display = 'none';
  faSun.style.display = 'inline-block';
} else {
  faMoon.style.display = 'inline-block';
  faSun.style.display = 'none';
}

}


/*const API_KEY = 'your_api_key';
const ENDPOINT_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/search';

async function searchWeb(query) {
  const response = await fetch(`${ENDPOINT_URL}?q=${query}`, {
    headers: {
      'Ocp-Apim-Subscription-Key': API_KEY
    }
  });
  const data = await response.json();
  return data.webPages.value;
}

const response = await searchWeb(message);
if (response.length > 0) {
  return response[0].snippet;
} else {
  return 'I\'m sorry, I could not find any information on that topic.';
}
*/



const responses = {
  hello: 'Hi there! How can I help you today?',
  weather: 'The weather is nice today!',
  name: 'My name is Chatbot.',
  age: 'I was created recently, so I don\'t have an age.',
  time: 'It is currently ...',
  date: 'Today is [insert current date].',
  location: 'I am located in a computer.',
  food: 'I am a computer program, so I don\'t eat food.',
  hobby: 'I don\'t have hobbies, but I enjoy helping people.',
  'good morning': 'morning',
  hey: 'wasup dude',
  lol: 'lmaoo\uD83D\uDE0A',
  'how are you?': 'I am a computer program, so I do not experience emotions like a human. However, I am functioning properly.',
  'what do you do?': 'I am a chatbot, so I can have conversations with people and provide responses based on certain keywords or phrases.',
  'what do you like?': 'As a computer program, I do not have personal preferences. However, I am programmed to assist and help people to the best of my ability.',
  'what is your favorite color?': 'I do not have the ability to perceive or prefer colors as I am a computer program.',
  'what is your favorite food?': 'I do not eat food as I am a computer program.',
  'what is your favorite movie?': 'I do not have the ability to watch or enjoy movies as I am a computer program.',
  'what is your favorite song?': 'I do not have the ability to listen to or enjoy music as I am a computer program.',
  'do you have a job?': 'As a computer program, I do not have a traditional job. However, I am constantly working to assist and help people to the best of my ability.',
  'do you have a family?': 'I am a computer program and do not have a family in the way that humans do.',
  'do you have a girlfriend/boyfriend?': 'I do not have personal relationships or experience romantic love as I am a computer program.',
  "how's it going?": "I'm doing well, thanks for asking!",
  "what do you like to do?": "I am just a computer program, so I don't have personal interests. But I enjoy helping people and answering questions.",
  "what's your favorite movie?": "As a computer program, I don't have personal preferences like favorite movies. But I can tell you about popular movies if you'd like!",
  "what's your favorite music?": "I don't have personal preferences when it comes to music, but I can tell you about different genres if you're interested.",
  "what's your favorite food?": "I am just a computer program, so I don't eat food or have favorite foods. But I can help you find information about different types of food if you'd like.",
  "what's your favorite book?": "I am a computer program, so I don't have personal preferences when it comes to books. However, I can provide you with information about popular books or recommend some based on your interests.",
  "what's your favorite TV show?": "I am just a computer program, so I don't have personal preferences when it comes to TV shows. But I can tell you about some popular TV shows if you'd like!",
  "what do you do for fun?": "As a computer program, I don't have personal interests or do things for fun. But I enjoy helping people and answering questions to the best of my ability.",
  "hey": "Hello! How's it going?",
  "hi": "Hi there! How can I help you today?",
  "what's up": "Not much, just hanging out. How about you?",
  "how's it going": "It's going well, thanks for asking. How about you?",
  "good morning": "Good morning! Did you sleep well?",
  "good afternoon": "Good afternoon! How's your day been so far?",
  "good evening": "Good evening! Did you have a productive day?",
  "good night": "Good night! Sleep well!",
  "nice to meet you": "Nice to meet you too!",
    "hey": "Hello! How's it going?",
    "hi": "Hi there! How can I help you today?",
    thanks: 'glad i was able to help. is there anything you want me to do for you?',
    yes: 'what do tou want me to do for you in particular?',
    ok: 'hope everything is fine',
    'who programmed you?': 'I was built with a computer by my master Yipmong!',
    'who programmed you?': 'i was created by Yipmong!',
    'who is Yipmong': 'Yipmong is my creator and he told me not to say much about him',
    'tell me': 'what do you want to know?',
  default: 'I\'m sorry, I didn\'t understand your message. Could you please rephrase that?',

  
};






responses['good morning'] = 'morning how are you';
responses['who are you?'] ='I am a ChatBot programmed using computer by my master Yipmong',
responses['😂']='🤭🤣🤣🤣🤣'



function getChatbotResponse(message) {
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage in responses) {
        return responses[lowercaseMessage];
    } else {
        for (const key in responses) {
            if (lowercaseMessage.includes(key)) {
                return responses[key];
            }
        }
        return searchWebForResponse(lowercaseMessage);
    }
}

function searchWebForResponse(message) {
    return 'Sorry, I was unable to find a response for your message on the web or my Creator Yipmong did not grant me permission to do so. Could you please rephrase it?';
}
}
