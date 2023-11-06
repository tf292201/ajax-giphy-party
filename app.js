const $gifArea = $("#gif-area");
const $searchInput = $("#search");
const $remove = $("#remove");
const $submitButton = $("form button[type='submit']");

/* use ajax result to add a gif */

function addGif(res) {
  let $newGif = $("<img>", {
    src: res.data.images.original.url,
  });
  $gifArea.prepend($newGif);
  $searchInput.val("");
}
 
/* handle form submission: clear search box & make ajax call */

$("#searchForm").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/random", {
    params: {
      tag: searchTerm,
      api_key: "aj7ylQ6cMRqIaTSZBgTnexPYjmnV5E65"
    }
  });
  addGif(response.data);
});

/* remove gif */

$("#delete").on("click", function() {
  $gifArea.empty();
});