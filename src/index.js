function displayPoem(response){
  new Typewriter("#poem", {
    strings: "response.data.answer",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
  function generatePoem(event) {
    event.preventDefault();
    let instructionsInput=document.querySelector("#user-instructions")
  let  apiKey ="8eo62f25aba83t4470e30bac260f6e42";
  let prompt='(Generate a poem about $(instructionsInput.value)';
  let context="You are a romantic poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br/>.Make sure to follow the user instructions.Make sure to sign the poem at the end and NOT at the beginning with 'Nurohs AI' in <strong>element at the end.Do not include  a title to the poem ";
let apiURL=https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}';
  //Make a call to the API
  axios.get(apiURL).then(displayPoem);
  //Display the generated poem
  }
  
  
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);