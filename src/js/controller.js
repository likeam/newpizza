import * as model from './model.js';
import recipeView from './views/recipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
///////////////////////////////



const controlRecipe = async function() {
     try{ 
      
      //LOADING ID FROM USERINPUT/FROM ADD EVENT LISTIENER
      const id = window.location.hash.slice(1 );      
      if(!id) return;

      // LOADING RECIPE
      await  model.loadRecipe(id);
      const {recipe} = model.state;

      //LOADING RANDERSPINNER
       recipeView.renderSpinner();

       recipeView.render(model.state.recipe);
               

      ///RENDER RECIPE
      

    } catch (err){
        alert(err);
    }
};
controlRecipe();

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipe));
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
