
import lodash from 'lodash';
// 3
// Print the content of the text file in reversed order
export const printReversed = (text) => {
    const words = text.split(' ');
    const reversedText = lodash.reverse(words);
    const rewords = reversedText.join(' ');
    return rewords;
};


// 4
// Print the unique words from the text
export  const printUniqueWords = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const rewords = uniqText.join(' ');
    return rewords;
};

// 5
// Print the number of unique words in the text
export  const printNumUniqueWords = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const wordCount = uniqText.length;
    return `sum of uniq words is: ${wordCount}`;
};

// 6
// Print the unique words from the text in uppercase
export  const printUniqueWordsToUpper = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const Upperwords = uniqText.join(' ');
    return Upperwords.toUpperCase();
};

// 7
// Print the unique words from the text that have more than five characters
export const printUniqueWordsBig5 = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const longWords = uniqText.filter(word => word.length >= 5);
    const Upperwords = longWords.join(' ');
    return Upperwords.toUpperCase();
};

// 8
// Count and print the number of vowels in each unique word
export  const countVowels = (data) => {
    const words = data.split(' ');
    const uniqText = lodash.uniq(words);
    const arr = [];
    const vowels = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u', A: 'A', E: 'E', I: 'I', O: 'O', U: 'U' };
    uniqText.forEach(word => {
        let vowelCount = 0
        for (let i = 0; i < word.length; i++) {

            if (vowels[word[i]]) {
                vowelCount++
            }
        };
        const obj = { word, vowelCount }
        arr.push(obj);
    });
    return arr;
}
