import {useState, useEffect, useRef } from "react";

import Button from "@material-ui/core/Button";




class HowAreDatabasesAreOrganised {

  questions = [
    
    {
      "text": "A collection of cars would be stored in a :",
      "answers" : [
        {"text": "Table.", "isCorrect": "true"},
        {"text": "Record (Row).", "isCorrect": "false"},
        {"text": "Field (Column).", "isCorrect": "false"},
        {"text": "Fact.", "isCorrect": "false"}
      ]
    },

    {
      "text": "A single of car would be stored in a :",
      "answers" : [
        {"text": "Table.", "isCorrect": "false"},
        {"text": "Record (Row).", "isCorrect": "true"},
        {"text": "Field (Column).", "isCorrect": "false"},
        {"text": "Fact.", "isCorrect": "false"}
      ]
    },

    {
      "text": "The colour of all cars in stored in a :",
      "answers" : [
        {"text": "Table.", "isCorrect": "false"},
        {"text": "Record (Row).", "isCorrect": "false"},
        {"text": "Field (Column).", "isCorrect": "true"},
        {"text": "Fact.", "isCorrect": "false"}
      ]
    },

    {
      "text": "The colour of a specific car in stored in a :",
      "answers" : [
        {"text": "Table.", "isCorrect": "false"},
        {"text": "Record (Row).", "isCorrect": "false"},
        {"text": "Field (Column).", "isCorrect": "false"},
        {"text": "Fact.", "isCorrect": "true"}
      ]
    }
    
   
    
  ]
  
  constructor(index) {
    this.question = this.questions[parseInt(index)];
  }

  getQuestion"text" (){ 
    return  this.question."text";
  }

  get"answers"() {
    return this.question."answers";
  }

  checkAnswer = (a) =>  this.question."answers"[a].isCorrect

}

export default HowAreDatabasesAreOrganised;