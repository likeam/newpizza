import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    // page: 1,
    // resultsPerPage: RES_PER_PAGE,
  },
  // bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    // ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    state.recipe = createRecipeObject(data);

  //  if(!data.ok) throw new Error(`${data.massage}(${data.status 

    // console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    // console.error(`${err} `);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    // console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        // ...(rec.key && { key: rec.key }),
      };
    });
    // console.log(state.search.results);
  } catch (err) {
    // console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

