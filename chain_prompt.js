function hyphenateWords(str) {
    return str
        .replace(/[^a-zA-Z\s]/g, '') // Remove non-letter characters
        .trim()
        .split(/\s+/)                // Split by spaces
        .filter(Boolean)             // Remove empty strings
        .map(word => word.toLowerCase())
        .join('-');
}