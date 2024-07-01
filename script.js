const dictionary = (word)=>{
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fa375c9720msh9c34dab6b986134p145df5jsn9f0627f9382a',
		'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};


	fetch(url, options)
	.then(response => response.json())
    .then((response) => {
        
        //console.log(response)
        wordheading.innerHTML ="Here is the meaning of: " + response.word;
        definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
    
    })
    .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})

//async function getMeaning(word){}
//const dictionary = (word)=>{
/*async function dictionary(word){
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fa375c9720msh9c34dab6b986134p145df5jsn9f0627f9382a',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}*/



/*const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'fa375c9720msh9c34dab6b986134p145df5jsn9f0627f9382a',
        'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};*/