function text_to_camelcase(text) {
    if (!text) return '';
    return text[0].toLowerCase() + text.slice(1);
}