import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
// import {addHandlerRender} from './views/recipeView';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';


const recipeContainer = document.querySelector('.recipe');


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
  
        // recipeView.renderError(`${err}`);
    
    }
};

const controlSearchResults = async function(){
    try{
        const query = searchView.getQuery();
        if(!query) return; 

        await model.loadSearchResults(query);
        console.log(model.state.search.results);
    }catch(err)
    {
        // console.log(err); 
        // throw err;
    }
};
controlSearchResults();
// controlRecipe();

const init = function(){
    recipeView.addHandlerRender(controlRecipe);

};
init();

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
