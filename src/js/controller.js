import icons from 'url:../img/icons.svg';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import {addHandlerRender} from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};





///////////////////////////////

if (module.hot){
  module.hot.accept();
}
const controlRecipes = async function () {
    try {
      const id = window.location.hash.slice(1);
  
      if (!id) return;
      recipeView.renderSpinner();
      // console.log(recipeView);
  
      // 0) Update results view to mark selected search result
      // resultsView.update(model.getSearchResultsPage());
  
      // 1) Updating bookmarks view
      // bookmarksView.update(model.state.bookmarks);
  
      // 2) Loading recipe
      await model.loadRecipe(id);
  
      // 3) Rendering recipe
      recipeView.render(model.state.recipe);
    } catch (err) {
      recipeView.renderError();
      // console.error(err);
    }
  };

  const controlSearchResults = async function () {
    try {
      resultsView.renderSpinner();
      // console.log(resultsView);
      // resultsView.renderSpinner();
      
      // 1) Get search query
      const query = searchView.getQuery();
      if (!query) return;
  
      // 2) Load search results
      await model.loadSearchResults(query);
      
      // 3) Render results
      resultsView.render(model.state.search.results);
  
      // 4) Render initial pagination buttons
      // paginationView.render(model.state.search);
    } catch (err) {
      // console.log(err);
    }
  };
controlSearchResults();
// controlRecipe();

const init = function(){
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);

};
init();

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
