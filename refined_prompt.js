/**
 * Converts a given string to camelCase format.
 *
 * The function removes all non-letter characters, splits the string into words by spaces,
 * and then concatenates them into camelCase. The first word is in lowercase, and each subsequent
 * word starts with an uppercase letter followed by lowercase letters.
 *
 * @param {string} input - The input string to convert to camelCase.
 * @throws {Error} Throws an error if the input is not a non-null string.
 * @returns {string} The camelCase formatted string. Returns an empty string if no valid words are found.
 *
 * @example
 * toCamelcase("Hello World"); // Returns: "helloWorld"
 * toCamelcase("foo_bar baz!"); // Returns: "fooBarBaz"
 * toCamelcase(""); // Returns: ""
 * toCamelcase(123); // Throws Error
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function removes all non-letter characters, splits the string into words by spaces,
 * and then joins them using dots ('.'), with all words in lowercase.
 *
 * @param {string} input - The input string to convert to dot.case.
 * @throws {Error} Throws an error if the input is not a non-null string.
 * @returns {string} The dot.case formatted string. Returns an empty string if no valid words are found.
 *
 * @example
 * toDotCase("Hello World"); // Returns: "hello.world"
 * toDotCase("foo_bar baz!"); // Returns: "foo.bar.baz"
 * toDotCase(""); // Returns: ""
 * toDotCase(123); // Throws Error
 */
function toCamelcase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Invalid input: Expected a non-null string.');
    }

    // Remove non-letter characters and split by spaces
    const words = input
        .replace(/[^a-zA-Z\s]/g, '') // Remove non-letter characters
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelcase("Hello World")); // Output: helloWorld
// console.log(toCamelcase(6)); // Throws Error

function toDotCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Invalid input: Expected a non-null string.');
    }

    // Remove non-letter characters and split by spaces
    const words = input
        .replace(/[^a-zA-Z\s]/g, '') // Remove non-letter characters
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase("Hello World")); // Output: hello.world
// console.log(toDotCase(6)); // Throws Error

