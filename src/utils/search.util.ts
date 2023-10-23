import * as hangul from 'hangul-js'

/**
 * Find the word has first letter is the same as each word in search
 *
 * @param text - text to compare
 * @param textSearch - text to search
 * @returns boolean
 *
 * @example
 * list = ['Minimal Technology', 'Minimal Technology Company', 'Technology Minimal']
 * search = 'MT'
 *
 * list.filter(item => compareTextWithTextSearchAlphabet(item, search))
 *
 * Result: true => ['Minimal Technology', 'Minimal Technology Company']
 */

export const compareTextWithTextSearchAlphabet = (
  text: string,
  textSearch: string,
): boolean => {
  const words = text.toLowerCase().split(' ')
  const firstCharInWord = words.map((word) => word[0]).join('')
  return firstCharInWord.includes(textSearch.toLowerCase())
}

/**
 * Find the word has first letter is the same as each word in search (Korean)
 *
 * @param text - text to compare
 * @param textSearch - text to search
 * @returns boolean
 *
 * @example
 * list = ['일해라', '이혜린', '응응', '하이', '존맛탱', '휴먼가구']
 * search = 'ㅎㅁㄱㄱ',
 *
 * list.filter(item => compareTextWithTextSearchInKorea(item, search))
 *
 * Result: true => ['휴먼가구']
 */
export const compareTextWithTextSearchInKorea = (
  text: string,
  textSearch: string,
): boolean => {
  const FIRST_CHARACTER = 0

  const arrCharKorea = Array.from(text)

  // const fullChar = arrCharKorea
  //   .map(c => hangul.disassemble(c))
  //   .flat()
  //   .join('')

  const firstCharEachText = arrCharKorea
    .map((c) => hangul.disassemble(c)[FIRST_CHARACTER])
    .join('')

  return firstCharEachText.includes(textSearch)
  // return fullChar.includes(textSearch) || firstCharEachText.includes(textSearch)
}

// const arr = ['일해라', '이혜린', '응응', '하이', '존맛탱']

// ㅇㅣㄹㅎㅐㄹㅏ
// ㅇㅣㅎㅖㄹㅣㄴ
// ㅇㅡㅇㅇㅡㅇ
// ㅎㅏㅇㅣ
// ㅈㅗㄴㅁㅏㅅㅌㅐㅇ

// Apply in autocomplete filter options
// arr.filter(item =>
//   compareTextWithTextSearchInKorea(item, inputValue) ||
//   compareTextWithTextSearchAlphabet(item, inputValue),
// )

// 휴먼가구 => ㅎㅁㄱㄱ
// ㅋㄹ
// ㅇㅈㅇ
