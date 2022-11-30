/* eslint-disable import/prefer-default-export */
const capitalLetters = ["A", "B", "C", "D"];
const smallLetters = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5, 6];
const specialCharacter = ["!", "@", "#", "$"];

export const passwordCopyStatus = {
    copy: "Copy Password!",
    copied: "Copied Successfully!",
};

export const passwordKeys = {
    capitalLetters: {
        name: "Capital Letters",
        key: "capitalLetters",
    },
    smallLetters: {
        name: "Small Letters",
        key: "smallLetters",
    },
    numbers: {
        name: "Numbers",
        key: "numbers",
    },
    specialCharacters: {
        name: "Special Characters",
        key: "specialCharacter",
    },
};

export const allPasswordConfig = { capitalLetters, smallLetters, numbers, specialCharacter };
