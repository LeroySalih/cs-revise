import {useState, useEffect, useRef } from "react";

import Button from "@material-ui/core/Button";




class Introduction {

  questions = [
    {
      "text": "The transmission medium allows us to :",
      "answers" : [
        {"text": "form connections in out WAN", "isCorrect" : "false"},
        {"text": "detect other devices in the network.", "isCorrect" : "false"},
        {"text": "send signals from one device to another.", "isCorrect" : "true"},
        {"text": "send radio from one device to another", "isCorrect" : "false"}
      ]
    },
    {
      "text": "A good transmission medium has:",
      "answers" : [
        {"text": "fibre optics to deliver fast signals.", "isCorrect" : "false"},
        {"text": "no detectable data loss", "isCorrect" : "false"},
        {"text": "no data loss", "isCorrect" : "true"},
        {"text": "cheap connections", "isCorrect" : "false"}
      ]
    },
    {
      "text": "What is the role of the Switch?",
      "answers" : [
        {"text": "Connects devices creating a WAN", "isCorrect" : "false"},
        {"text": "Connects devices to the WWW", "isCorrect" : "false"},
        {"text": "Connects devices to the ETHERNET", "isCorrect" : "false"},
        {"text": "Connects devices creating a LAN", "isCorrect" : "true"}
      ]
    },
    {
      "text": "The transmission medium best suited to situations where devices have long distances between them is:",
      "answers" : [
        {"text": "WiFi", "isCorrect" : "false"},
        {"text": "Copper Cable", "isCorrect" : "false"},
        {"text": "Fibre Optic", "isCorrect" : "true"},
        {"text": "Radio", "isCorrect" : "false"}
      ]
    },
    {
      "text": "The fastest transmission medium is:",
      "answers" : [
        {"text": "WiFi", "isCorrect" : "false"},
        {"text": "Copper Cable", "isCorrect" : "false"},
        {"text": "Fibre Optic", "isCorrect" : "true"},
        {"text": "Radio", "isCorrect" : "false"}
      ]
    },
    {
      "text": "The most expensive transmission medium is:",
      "answers" : [
        {"text": "WiFi", "isCorrect" : "false"},
        {"text": "Copper Cable", "isCorrect" : "false"},
        {"text": "Fibre Optic", "isCorrect" : "true"},
        {"text": "Radio", "isCorrect" : "false"}
      ]
    },
    {
      "text": "Of the following transmission mediums, which is the most secure?",
      "answers" : [
        {"text": "WiFi", "isCorrect" : "false"},
        {"text": "Copper Cable", "isCorrect" : "true"},
        {"text": "Radio", "isCorrect" : "false"},
        {"text": "SSL", "isCorrect" : "false"}
      ]
    },

    {
      "text": "Of the following transmission mediums, which is the easiest to extend?",
      "answers" : [
        {"text": "WiFi", "isCorrect" : "true"},
        {"text": "Copper Cable", "isCorrect" : "false"},
        {"text": "Fibre Optic", "isCorrect" : "false"},
        {"text": "SSL", "isCorrect" : "false"}
      ]
    }
  ]
  
  constructor(index) {
    this.question = this.questions[parseInt(index)];
  }a

  getQuestionText (){ 
    return  this.question.text;
  }

  getAnswers() {
    return this.question.answers;
  }

  checkAnswer = (a) =>  this.question.answers[a].isCorrect

}

export default Introduction;