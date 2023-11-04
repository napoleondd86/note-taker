const router = require('express').Router();
const fs = require('fs');
const {v4: uuidv4} = require('uuid');


// corresponds to const getNotes fetch on public/index.js 
router.get('/notes', (req, res) => {
  const notesFile = JSON.parse(fs.readFileSync('./db/db.json')) 
  res.json(notesFile);
})

// corresponds to const saveNote fetch on public/index.js
router.post('/notes', (req, res) =>{
  //read the file
  let notesFile;
  try{
    const data = fs.readFileSync('./db/db.json', 'utf8');
    notesFile = JSON.parse(data) 
  } catch (err){
    console.error("error reading or parsing the file:", err);
  }
 
  // notesFile.push(req.body)
  // fs.writeFileSync('./db/db.json', JSON.stringify(notesFile))
  // res.end()
  
  // ---- IN THE Future--- we would add the uuid as part of class inheritance
  //added to the file AND add UUID to req.body.id = uuid
  const newNote = {
    ...req.body, 
    id: uuidv4()
  }
  //write new version of the file
  notesFile.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notesFile));
  res.end();  
})

// router.delete("/notes/:item", (req, res) => {
//   req.params(item)
// })


//display the saved notes when clicked
//route for delete, look into filter method
module.exports = router;