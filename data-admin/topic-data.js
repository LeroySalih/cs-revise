const networks = {
  tags : ["GCSE", "iGCSE"], 
  title : "Computer Networks",
  metaDescription : "Revise the iGCSE Networks module for Oxford AQA using these key points.",
  _id : "networks",
  order: 8,
  author : 'Leroy Salih',
  date : '2020-11-09',
  description : "The modern world is built on connections of electronic devices.  Networks touch every aspect of our lives; our homes, our schools our vehicles are all becoming connected to various networks.  This module will help you revise the details of what is involved to allow these devices to communicate.",
  keywords: {
    Device : "A piece of electronic equaipment.",
    "Stand alone": "A device that is not connected to the network",
    Link : "The connection between two devices",
    Switch : "The device that is used to form a LAN",
    Router : "The device that connects LANS to WANS",

  },

  lessons: 
    {
      
      "introduction" : {
        title: "1. Introduction",
        order: 0,
        _id: "1-introduction",
        desc: "An overview of the key concepts.",
        specDesc: `<ul>
        <li>Define what a computer network is.</li>
        <li>Discuss the benefits and risks of computer networks.</li>
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that provides an overview of Networks before answering the questions below.",
            type: "video",
            videoKey : "3BL3YtaP78M"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Answer these questions",
            type: "quiz",
            videoUrl : ""
          },

        }

      },

      "transmission-media" : {
        title: "2. Transmission Media",
        order: 0,
        _id: "2. Transmission Media",
        desc: "An overview of the key concepts.",
        specDesc: "<div>This is the <b>Spec Desc</b>.</div>",
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that provides an overview of Networks before answering the questions below.",
            type: "video",
            videoKey : "SoJIrPjLdJY"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Answer these questions",
            type: "quiz",
            videoUrl : ""
          },

        }

      },

      "topologies" : {
        title: "3. Topologies",
        order: 0,
        _id: "3-topologies",
        desc: "An overview of the key concepts.",
        specDesc: `
        Explain the following physical network topologies:
        <ul>
        <li>star</li>
        <li>bus.</li>
        </ul>
        `,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that provides an overview of Networks before answering the questions below.",
            type: "video",
            videoKey : "lX1zzyatX7c"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Answer these questions",
            type: "quiz",
            videoUrl : ""
          },

        }

      },

      "protocols" : {
        title: "4. Protocols and Four Layer Model",
        order: 0,
        _id: "3-topologies",
        desc: "An overview of the key concepts.",
        specDesc: `
        Explain the following physical network topologies:
        <ul>
        <li>star</li>
        <li>bus.</li>
        </ul>
        `,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that provides an overview of Networks before answering the questions below.",
            type: "video",
            videoKey : "pXiV5QN1J2Q"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Answer these questions",
            type: "quiz",
            videoUrl : ""
          },

        }

      },

      "common-protocols" : {
        title: "5. Common Protocols",
        order: 0,
        _id: "3-topologies",
        desc: "An overview of the key concepts.",
        specDesc: `
        Explain the following physical network topologies:
        <ul>
        <li>star</li>
        <li>bus.</li>
        </ul>
        `,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that provides an overview of Networks before answering the questions below.",
            type: "video",
            videoKey : "szsLLFTZua0"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Answer these questions",
            type: "quiz",
            videoUrl : ""
          },

        }

      },
    }
}

const number_systems =  {
  tags : ["GCSE", "iGCSE"], 
  title : "Number Systems",
  order: 4, 
  metaDescription : "Revise the iGCSE Networks module for Oxford AQA using these key points.",
  _id : "number_systems",
  author : 'Leroy Salih',
  date : '2020-11-09',
  description : "To understand how computers work, we must first understand the number systems that computers use to input, process, store and output data.  This module will cover binary numbers and how to convert, add and multiply them as well as how and when to use hexadecimal numbers.",
  keywords: {
    bit : "A single digit of a binary number"

  },

  lessons: 
    {
      
      
      "introduction" : {
        title: "1. Introduction",
        order: 0,
        _id: "1-introduction",
        desc: "An overview of the key concepts.",
        specDesc: `<ul>
        
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that provides an overview of Binary Numbers before answering the questions below.",
            type: "video",
            videoKey : "awfwmDaiB2E"
          },

          

        }

      },

      "binary-to-denary" : {
        title: "2. Convert Binary Numbers to Denary",
        order: 1,
        _id: "binary-to-denary",
        desc: "A look at the algorithm (method) to convert <b>Binary Numbers</b> to <b>Denary</b>.",
        specDesc: `<ul>
        
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that shows the algorith (method) used to convert Binary Numbers into Denary.",
            type: "video",
            videoKey : "FBnWGDzlTo8"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Complete this quiz",
            desc: "Practice converting Binary Numbers to Denary using this quiz.",
            type: "quiz",
            quiz: [
              {
              _id: 'q2',
              type: "convertBinaryToDenary"
            },
            {
              _id: 'q3',
              type: "convertBinaryToDenary"
            },
            {
              _id: 'q4',
              type: "convertBinaryToDenary"
            }
          ]
          },

          

        }

      },

      "denary-to-binary" : {
        title: "3. Convert Denary Numbers to Binary.",
        order: 1,
        _id: "denary-to-binary",
        desc: "A look at the algorithm (method) to convert Denary Numbers to Binary.",
        specDesc: `<ul>
        
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that shows the algorith (method) used to convert denary numbers into binary.",
            type: "video",
            videoKey : "pC2b5ezOlMk"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Complete this quiz",
            desc: "Practice converting denary Numbers to 4 bit binary using this quiz.",
            type: "quiz",
            quiz: [
              {
              _id: 'q2',
              type: "convertDenaryToBinary"
            },
            {
              _id: 'q3',
              type: "convertDenaryToBinary"
            },
            {
              _id: 'q4',
              type: "convertDenaryToBinary"
            }
          ]
          },

          

        }

      },

      "adding-binary-numbers" : {
        title: "4. Adding Binary Numbers.",
        order: 1,
        _id: "adding-binary-numbers",
        desc: "A look at the algorithm (method) to add two binary numbers.",
        specDesc: `<ul>
        
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that shows the algorith (method) used to convert denary numbers into binary.",
            type: "video",
            videoKey : "XRZqYTcn6T0"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Complete this quiz",
            desc: "Practice converting denary Numbers to 4 bit binary using this quiz.",
            type: "quiz",
            quiz: [
              {
              _id: 'q2',
              type: "addBinaryBinary"
            },
            {
              _id: 'q3',
              type: "addBinaryBinary"
            },
            {
              _id: 'q4',
              type: "addBinaryBinary"
            }
          ]
          },

          

        }

      },

      "multiplying-binary-numbers" : {
        title: "5. Multiplying (bit shifting left) Binary Numbers.",
        order: 1,
        _id: "multiplying-binary-numbers",
        desc: "A look at the algorithm (method) to multiply two binary numbers.",
        specDesc: `<ul>
        
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that shows the algorith (method) used to convert denary numbers into binary.",
            type: "video",
            videoKey : "GM5r6H82h54"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Complete this quiz",
            desc: "Practice multiplying binary Numbers.",
            type: "quiz",
            quiz: [
              {
              _id: 'q2',
              type: "multiplyBinary"
            },
            {
              _id: 'q3',
              type: "multiplyBinary"
            },
            {
              _id: 'q4',
              type: "multiplyBinary"
            }
          ]
          },

          

        }

      },

      "dividing-binary-numbers" : {
        title: "6. Dividing (bit shifting right) Binary Numbers.",
        order: 1,
        _id: "multiplying-binary-numbers",
        desc: "A look at the algorithm (method) to divide two binary numbers.",
        specDesc: `<ul>
        
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that shows the algorithm (method) used to convert denary numbers into binary.",
            type: "video",
            videoKey : "14U-kYw3wD4"
          },

          task2: {
            _id: 0,
            order: 0,
            title: "Complete this quiz",
            desc: "Practice multiplying binary Numbers.",
            type: "quiz",
            quiz: [
              {
              _id: 'q2',
              type: "divideBinary"
            },
            {
              _id: 'q3',
              type: "divideBinary"
            },
            {
              _id: 'q4',
              type: "divideBinary"
            }
          ]
          },

          

        }

      },

      "hexadecimal-numbers" : {
        title: "7. Hexadecimal Numbers.",
        order: 1,
        _id: "hexadecimal-numbers",
        desc: "We look at what a hexadecimal number is, why we use them, how we use them and how we convert between hexadecimal and binary.",
        specDesc: `<ul>
        
        </ul>`,
        tasks: {
          task1: {
            _id: 0,
            order: 0,
            title: "Watch this video",
            desc: "Watch this video that shows how, why and when we use hexadecimal numbers.",
            type: "video",
            videoKey : "yaqxMNQEHbI"
          },

          

        }

      },


      
      
    }  // end course
} // end courses



module.exports = {
  
  networks, number_systems

}