class SearchView{
    _parentElementement = document.querySelector('.search');
    _errorMassage = 'WE could not find that recipe. Please try anothe one';
    _massage = '';

    getQuery(){
        return this._parentElement.querySelector('.search__field').value;
        // this._clearInput();
         }
    // _clearInput(){
    //     this._parentElement.querySelector('.search__field').value = '';
    // }
    addHandlerSearch(handler){
        this._parentElement.addEventListener('submit', function(e){
            e.preventDefault();
            handler(); 
        });
    }
}
export default new SearchView();