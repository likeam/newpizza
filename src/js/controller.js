import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
// import {addHandlerRender} from './views/recipeView';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const showRecipe = async function(){
  try {
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591cdc054bc886');
    const data = await res.json();
    if(!res.ok) throw new Error(`${data.massage}`);
    console.log(res.data);
};

///////////////////////////////

// if (module.hot){
//   module.hot.accept();
// }
// const controlRecipes = async function () {
//     try {
//       const id = window.location.hash.slice(1);
  
//       if (!id) return;
//       recipeView.renderSpinner();
//       // console.log(recipeView);
  
//       // 0) Update results view to mark selected search result
//     //   resultsView.update(model.getSearchResultsPage());
  
//       // 1) Updating bookmarks view
//     //   bookmarksView.update(model.state.bookmarks);
  
//       // 2) Loading recipe
//       await model.loadRecipe(id);
  
//       // 3) Rendering recipe
//       recipeView.render(model.state.recipe);
//     } catch (err) {
//       recipeView.renderError();
//       // console.error(err);
//     }
//   };

//   const controlSearchResults = async function () {
//     try {
//       resultsView.renderSpinner();
//       // console.log(resultView);
//       // resultsView.renderSpinner();
  
//       // 1) Get search query
//       const query = searchView.getQuery();
//       if (!query) return;
  
//       // 2) Load search results
//       await model.loadSearchResults(query);
  
//       // 3) Render results
//       resultsView.render(model.state.search.results);
  
//       // 4) Render initial pagination buttons
//       // paginationView.render(model.state.search);
//     } catch (err) {
//       // console.log(err);
//     }
//   };
// controlSearchResults();
// // controlRecipe();

// const init = function(){
//     recipeView.addHandlerRender(controlRecipes);
//     searchView.addHandlerSearch(controlSearchResults);

// };
// init();

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
