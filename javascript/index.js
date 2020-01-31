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

/* Functions */

// Adds a word to dictionary
function recordWord(word){

}

// Trim blank spaces as necesary
function cleanWord(word){

}

// Process entire text line of data, add words to global dictionary via recordWord
function process(data, and_update){

}

// Process text elements and recursively call each child elements
function recurseThrough(element, and_update){

}

// Create Asynch Function to get most commmon words from wiki API
const readMostCommonWords = async () => {

    // Load 100 most common words
    const mostCommonWordsURL = 'https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=Most_common_words_in_English&prop=text&format-json';

    // Begin to fetch most common words
    try{

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