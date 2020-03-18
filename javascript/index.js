/* Go through the entire page on Programming Languages and 
 * identify the 25 or more word occurances. This cannot include the 
 * top 100 common words in English and those top 100 cannot be 
 * hardcoded. The top 100 most common words are found on 
 * https://en.wikipedia.org/wiki/Most_common_words_in_English
 * 
 * In addition, I must remove common words: "are", "is", "where"
 * "was", and single character words such as "I" or "a"
*/

// Global JSON for word occurnce from dictionary
var dictionary = {};

/*****  Functions *****/

// Add word to dictionary
function recordWord(word){

    // Check if word is not in dictionary, add it with initialzer
    if(!dictionary[word]){
        dictionary[word] = 0;
    }

    // When word is in dictionary, add the 1 occurence
    dictionary[word] += 1;
}

// Trim blank spaces as necesary
function cleanWord(word){

    // Remove space, convert to lowercase
    word = word.trim().toLowerCase();
    let wordFinal = "";

    // Check each char to see it is a char, remove non-letters
    for(let i = 0; i < word.length; i++){
        // Between letters a - z
        if(word[i] >= 'a' && word[i] <= 'z'){
            wordFinal += word[i];
        }
    }

    return wordFinal;

}

// Process entire text line of data, add words to global dictionary via recordWord
function process(data, and_update){

    // To process strings of text
    let  items = data.split(" ");

    // Loop through each word
    for(let i = 0; i < items.length; i++){

        // Invoke the trim of blank space based in loop
        let cleaned = cleanWord(items[i]);

        // Ignore the blanks
        if(cleaned != ""){
            if(and_update == false){
                recordWord(cleaned);
            }
            // Otherwise look up count in dictionary and replace
            else{
                // 1 existing occurence
                if(dictionary[cleaned] > 1){
                    items[i] = dictionary[cleaned];
                }
            }
        }
    }

    return items.join(" ");
}

// Process text elements and recursively call each child elements
function recurseThrough(element, and_update){

    // loop through text elements
    for(let i = 0; i < element.childNodes.length; i++){

        // check if it's text, then process
        if(element.childNodes[i].nodeName == "#text"){

            //pass element.childNodes[i].data to a fucntion that breaks it into indiviaul words, checks if a word is relevant/valid (not in illegalWords var)
            // if it's a word we want to consider, pass to yet another function that records it into some sort of data structure which will count its occurrences
            let processed = process(element.childNodes[i].data, and_update);
            element.childNodes[i].data = processed;

        }
        // Otherwise not text, keep recursing to find out
        else{
            // Recursion
            recurseThrough(element.childNodes[i], and_update);
        }
    }
}

// Create Asynch Function to get most commmon words from wiki API
const readMostCommonWords = async () => {

    // Load 100 most common words
    const mostCommonWordsURL = 'https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=Most_common_words_in_English&prop=text&format-json';

    // Begin to fetch most common words
    try{

        const resp = await fetch(mostCommonWordsURL, {});

        // Read body to build string
        const reader = resp.body.getReader();

        let respBody = "";
        let done = false;

    }

    catch(err){
        console.log(err);
    }
}

// Run Function of Reading most common words
readMostCommonWords().then((most_common_words) => {

    // Additional 4 common words
    }
);