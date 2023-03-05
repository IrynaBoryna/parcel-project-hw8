import throttle from 'lodash.throttle';
// import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
let saveData = {};

const formRef = document.querySelector('form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

controlMessage ();
formRef.addEventListener('submit', saveDataSubmit);


formRef.addEventListener('input', throttle((evt) => {
  saveData[evt.target.name] = evt.target.value;
  
 localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
   
}, 500));


function saveDataSubmit(evt) {
 evt.preventDefault();
 evt.currentTarget.reset();
 localStorage.removeItem(STORAGE_KEY);
 console.log(saveData);
};


  function controlMessage () {
    const userSaveDate = localStorage.getItem(STORAGE_KEY);

    if(userSaveDate) {
       saveData = JSON.parse(userSaveDate);
       emailRef.value = saveData.email;
       messageRef.value = saveData.message;
    }
  };

  