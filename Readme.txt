Helping video :   https://youtu.be/1rc2zYqexLI  (storing data in firebase)

here i also used loop(for in loop) if statement inside the jsx also return jsx  form inside a loop and if statement helping video: https://youtu.be/EQugJJGMOxI


here i used firebase version "firebase": "^8.10.0", then the firebase image upload code work otherwise it will not work( also provious time i forgate create a storage in firebase)

in previous time it provide the 404 error "storage not found" like message because i think i forget to create storage

also change in storage rules playground (after editing)   allow read, write: if true;


   new Date().getTime().toString()

 return unique string every time it return the current time and the time cannot same and it provide time in millisecond with date  so it provide unique time value.



FILE STRUCTURE



  In sec/Firebase.jsx file i do all thing which needed to connect to firebase and after i export this file for used in another react component


  In src/display.jsx i actually used javascript for/loop if/statement how we use these javascript statement in react jsx demonstrate the src/display.jsx file(not used in this project)

  In src/UploadImage.jsx file i write the code how upload a image in firebase and return the upload image URL im console



file-saver package used to download file from the URL(npm i file-saver) this not work