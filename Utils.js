
// 1
// Print the content of the text file
export const printFile = (data) => {
    return data;
};

// 2
// Count and print the number of words in the text
export const countWords = (text) => {
    const words = text.split(' ');
    const wordCount = words.length;
    return `sum of words is: ${wordCount}`;
};
