
function getQuery() {
    let url = window.location.href
    let query = document.forms[0].searchbar.value;
    alert("Your query \"" + query + "\" cannot be processed at the moment.") ;
    window.location.href = url;
}
