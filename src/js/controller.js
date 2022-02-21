import * as model from './model.js';
import recipeView from './views/recipeView.js';

import icons from 'url:../img/icons.svg'; 
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

const renderSpinner = function(parentEl) {
  const markup = `
        <div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
        </div> 
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function() {
     try{
      
      //LOADING ID FROM USERINPUT/FROM ADD EVENT LISTIENER
      const id = window.location.hash.slice(1 );      
      if(!id) return;

      // LOADING RECIPE
      await  model.loadRecipe(id);
      const {recipe} = model.state;

      //LOADING RANDERSPINNER
       renderSpinner(recipeContainer);

       recipeView.render(model.state.recipe);
               

      ///RENDER RECIPE
      

    } catch (err){
        alert(err);
    }
};
showRecipe();

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
