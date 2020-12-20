import getRandomInt from './getRandomInt';

class ReorderBinary {

  constructor() {
    this.question = [
      Number(getRandomInt(16)).toString(2).padStart(4, '0'),
      Number(getRandomInt(16)).toString(2).padStart(4, '0'),
      Number(getRandomInt(16)).toString(2).padStart(4, '0'),
    ];
  }

  getQuestionText (){ 
    return  (
      <span>Reorder these items in ASCENDING order.</span>
      )
  }

  checkItems = (a) => {
    if (a.length !== this.question.length)
      return false;

    for (var i = 0; i < a.length; i++){
      if (a[i] !== this.question[i]){
        return false;
      }
    }

    return true;
       
  }

  checkAnswer = (items) => {
    for (var index = 0; index < items.length - 1; index++){
      if (parseInt(items[index],2) > parseInt(items[index + 1], 2)) {
        return false;
      }
    }

    return true;
  }

}

export default ReorderBinary;