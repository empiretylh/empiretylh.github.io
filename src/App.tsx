import { useEffect, useState } from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-cloud_editor_dark";

function App() {

  useEffect(() => {
    const handleFullScreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
      }
    }

    handleFullScreen();
  }, []);

  let code = `//Thura Lin Htut --------------------------------------------------------------------------------------------------------------------------

  const name = "THURA LIN HTUT";
  const github = "https://github.com/empiretylh";
  const mail =  "thuradevloper@gmail.com";
  
  const purpose = "To create my own empire as a software developer.";
  
  const description = "I mainly developed mobile apps and websites using react, react native and backend as django framework."
                      +"I also developed desktop applications with electron-react framework";
  
  let age = 20;
  
  
  const languages = [
      {name : "Javascript" , skills : 80},
      {name : "Typescript", skills : 70},
      {name : "Python", skills : 70 },
      {name : "Java", skills : 60 },
      {name : "PHP", skills : 60 },
      {name : "C++", skills : 60 },
      {name : "SQL", skills : 60 },
  ]
  
  languages.push({name:"HTML", skills : 90})
  
  const frontend_framework  = ["react", "react-native","python-django","javafx"];
  const backend_framework = ["django", "firebase"]
  
  const other_skills = ["css", "tailwind-css", "bootstrap","react-toolkit", "android-development", "linux", "software lifecycle"];
  
  
  const main_projects = [
      {
        name :  "Pascal X",
        link :  "bit.ly/pascalx",
        description : "Pascal X is AI Tool based passport photo cropper. I developed this app using python and electron-react",
      },
      
      {
        name        : "University of Computer Studies Dawei (UCSD Voting App)",
        link        : "https://empiretylh.github.io/ucsdvote",
        mobilelink  : "bit.ly/ucsdvoting",
        description : "This is voting applications for university students that  has admin panel using react and mobile app use react-native",
      },
      
      {
        name        : "RapidRetail POS (Mobile/Desktop)",
        link        : "bit.ly/rapidretail",
        description : "This is pos system using react, react-native, electron-react and python-django",
          
      },
      {
        name        : "Synapse Work (Mobile/ Web)"
        link        : "https://t.me/synapsework/4"
        description : "This learning platform for computer science student using react-native and python-django"
      }
  
  ]`

  return (
    <>
      <AceEditor
        mode="javascript"
        theme="cloud_editor_dark"
        fontSize={20}
        width='100%'
        value={code}
        height='100vh'
      />


    </>
  )
}

export default App
