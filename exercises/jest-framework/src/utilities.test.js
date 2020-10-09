import { stripString, ucFirstLetter } from './utilities'

describe('utilities', () => {

    it('should remove whitespace from the beginning of a string', () => {
        let string = "   Whitespace"
        expect(stripString(string)).toEqual("Whitespace")
    })

    it('should capitalise the first letter of a given string', () => {
        let string = "lowercase"
        expect(ucFirstLetter(string)).toEqual("Lowercase")
    })
})