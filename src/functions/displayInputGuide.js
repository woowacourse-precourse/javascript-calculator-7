import MESSAGES from '../assets/message.js';

const displayInputGuide = function displayInputGuideFunc() {
  console.log(MESSAGES.GUIDE.HEADER);
  console.log(MESSAGES.GUIDE.BODY);
  console.log(MESSAGES.GUIDE.FOOTER);
  console.log(MESSAGES.GUIDE.DELIMITER_INFORM);
  console.log(MESSAGES.GUIDE.ALLOWED_SPECIAL_CHARACTERS);
};

export default displayInputGuide;
