const express = require('express');
const bodyParser = require('body-parser');
const db =require('../db/db')

const app = express();

app.get('/api/articles', (req, res) => {
    res.json(Articles);

})
app.get('/api/users', (req, res) => {
    res.json(Users);
})
app.get ('/api/teste',(req,res)=>{
  db.getArticles()
  .then((Articles)=>{
      res.json(Articles);
  })
  .catch((err)=>{
    console.log(err);
    res.json(err).status(500);
  })
})



app.listen(8081, () => {
  console.log('API server listening on port 8081');
});
const Users = [
{
    name:'ali',
    lastname:'abdalla'
},
{
    name:'angelus',
    lastname:'' 
}

];


const Articles = [

  {
        title:"Pourquoi ALI aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    },
    {
        title:"Pourquoi les devs aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    },
    {
        title:"Pourquoi les devs aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    },
    {
        title:"Pourquoi les devs aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    },
    {
        title:"Pourquoi les devs aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    },
    {
        title:"Pourquoi les devs aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    },
    {
        title:"Pourquoi les devs aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    },
    {
        title:"Pourquoi les devs aiment bien node.js ", 
        author:"david",      
        body: 'Le corps de l\'article',
        comment: [
            {
                title: 'commentaire 1.2',
                body: 'coprs de comment 1'
            },
            {
                title: 'commentaire 2',
                body: 'coprs de comment 2'
            }
        ]
    }

];
