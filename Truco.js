 const verifyTrucoPoints = ({ number, type }) => {
    if (number == 1 && type == "oro") {
      return 13;  
    } else if (number == 1 && type == "copa") {
      return 13;  
    } else if (number == 2) {
      return 14;  
    } else if (number == 3) {
      return 15;  
    } else if (number == 7 && type == "oro") {
      return 16;  
    } else if (number == 7 && type == "espada") {
      return 17;  
    } else if (number == 1 && type == "basto") {
      return 18;  
    } else if (number == 1 && type == "espada") {
      return 19;  
    } else {
      return number;  
    }
  };

export default verifyTrucoPoints