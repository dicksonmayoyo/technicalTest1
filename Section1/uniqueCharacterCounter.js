function charCounts(string) {
    const charFrequency = Object.create(null);
    for (let i = 0; i < string.length; i++) {
        const character = string[i];
        charFrequency[character] = (charFrequency[character] || 0) + 1;
    }
    return charFrequency;
}

console.log(charCounts('addresser'));