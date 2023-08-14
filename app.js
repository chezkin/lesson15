import fs from 'fs';

import * as funcLodash from './lodashModule.js';
import * as funcUtils from './Utils.js';

fs.readFile('./chezkin.txt', 'utf8', function (err, _data) {
    if (err) throw err;

    // 1
    // Print the content of the text file
    const func1 = funcUtils.printFile(_data);
    // 2
    // Count and print the number of words in the text
    const func2 = funcUtils.countWords(_data);
    // 3
    // Print the content of the text file in reversed order
    const func3 = funcLodash.printReversed(_data);
    // 4
    // Print the unique words from the text
    const func4 = funcLodash.printUniqueWords(_data);
    // 5
    // Print the number of unique words in the text
    const func5 = funcLodash.printNumUniqueWords(_data);
    // 6
    // Print the unique words from the text in uppercase
    const func6 = funcLodash.printUniqueWordsToUpper(_data);
    // 7
    // Print the unique words from the text that have more than five characters
    const func7 = funcLodash.printUniqueWordsBig5(_data);
    // 8
    // Count and print the number of vowels in each unique word
    const func8 = funcLodash.countVowels(_data);

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


