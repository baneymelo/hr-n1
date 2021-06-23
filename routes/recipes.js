var recipes = require('../recipes.json');
var router = require('express').Router();


router.get('/shopping-list/',(req, res, next) => {
 try {
  const ids = req.query.ids;
  console.log(req.query.ids);

  if(!ids) return res.status(400);
  
  let recipe = undefined;

  recipe = recipes.filter(e => e.id === ids);

  console.log(recipe);
  

  if(recipe) return res.send(recipe) 

  return res.status(404).send('NOT_FOUND')
  //
 } catch (error) {
   console.log(error);
   next();
 }
})

module.exports = router;

