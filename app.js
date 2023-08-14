import fs from 'fs';
import lodash from 'lodash';

fs.readFile('./chezkin.txt', 'utf8', function (err, _data) {
    if (err) throw err;

    // 1
    // Print the content of the text file
    const func1 = printFile(_data);
    // 2
    // Count and print the number of words in the text
    const func2 = countWords(_data);
    // 3
    // Print the content of the text file in reversed order
    const func3 = printReversed(_data);
    // 4
    // Print the unique words from the text
    const func4 = printUniqueWords(_data);
    // 5
    // Print the number of unique words in the text
    const func5 = printNumUniqueWords(_data);
    // 6
    // Print the unique words from the text in uppercase
    const func6 = printUniqueWordsToUpper(_data);
    // 7
    // Print the unique words from the text that have more than five characters
    const func7 = printUniqueWordsBig5(_data);
    // 8
    // Count and print the number of vowels in each unique word
    const func8 = countVowels(_data);

    const arr = [func1, '\n\n',
    func2, '\n\n',
    func3, '\n\n',
    func4, '\n\n',
    func5, '\n\n',
    func6, '\n\n',
    func7, '\n\n',
    func8, '\n\n'];


    fs.writeFile('./results.txt',arr + "\n", 'utf8', function (err) {
        if (err) throw err;
        console.log(
            'mmishen complit'
        );
    });
});



// 1
// Print the content of the text file
const printFile = (data) => {
    return data;
};

// 2
// Count and print the number of words in the text
const countWords = (text) => {
    const words = text.split(' ');
    const wordCount = words.length;
    return `sum of words is: ${wordCount}`;
};

// 3
// Print the content of the text file in reversed order
const printReversed = (text) => {
    const words = text.split(' ');
    const reversedText = lodash.reverse(words);
    const rewords = reversedText.join(' ');
    return rewords;
};


// 4
// Print the unique words from the text
const printUniqueWords = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const rewords = uniqText.join(' ');
    return rewords;
};

// 5
// Print the number of unique words in the text
const printNumUniqueWords = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const wordCount = uniqText.length;
    return `sum of uniq words is: ${wordCount}`;
};

// 6
// Print the unique words from the text in uppercase
const printUniqueWordsToUpper = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const Upperwords = uniqText.join(' ');
    return Upperwords.toUpperCase();
};

// 7
// Print the unique words from the text that have more than five characters
const printUniqueWordsBig5 = (text) => {
    const words = text.split(' ');
    const uniqText = lodash.uniq(words);
    const longWords = uniqText.filter(word => word.length >= 5);
    const Upperwords = longWords.join(' ');
    return Upperwords.toUpperCase();
};

// 8
// Count and print the number of vowels in each unique word
const countVowels = (data) => {
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
