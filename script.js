const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {

 let inpWord = document.getElementById("inp-word").
 value;
        //  this is not quote but `
    fetch(`${url}${inpWord}`)  
        .then ((Response) => Response.json ())
        .then((data) => {
        
        console.log(data);
        result.innerHTML = `

        <div class="word">
        <h3>${inpWord}</h3>

        
      <button onclick="playSound()"> 
        <i class="fas fa-volume-up"></i>
      </button>

    </div> 
    <div class="detail">

      <p>${data[0].meanings[0].partOfSpeech}
      
      </p>
      <p> ${data[0].phonetic}  </p>

    </div>
    
    <div class="defini">
          ${data[0].meanings[0].definitions.map(data => `<p class="word-meaning">${data.definition}</p>` )}
    </div>

    <p class="word-example">
    ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    



    
    sound.setAttribute("src",`https://api.dictionaryapi.dev/media/pronunciations/en/${data[0].word}-us.mp3`);

   
   
        })
        
        .catch(() =>{
          result.innerHTML=  `<h3 class="error"> Couldn't Find The Word </h3>`;


        });
     
});

function playSound (){
sound.play();

};