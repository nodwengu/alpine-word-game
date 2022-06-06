function wordsGameData() {
   return {
      title: 'Words Game',
      words: [],
      checkedVal: '',
      message: '',
      sentenceInput: '',
      mostWordsList: [],
      longestWord(sentence) {
         let wordLength = 0;
         let longWord = '';
         this.words = sentence.split(' ');

         for (word of this.words) {
            if (word.length >= wordLength) {
               wordLength = word.length;
               longWord = word;
            }
         }
         return longWord;
      },
      shortestWord(sentence) {
         let wordLength = 100;
         let shortWord = '';
         this.words = sentence.split(' ');

         for (word of this.words) {
            if (wordLength >= word.length) {
               wordLength = word.length;
               shortWord = word;
            }
         }
         return shortWord;
      },
      totalLength(sentence) {
         let total = 0;
         this.words = sentence.split(' ');

         for (word of this.words) {
            total += word.length;
         }
         return total;
      },
      mostWords(sentence) {
         let wordLength = 0;
         let longWord = '';
         this.words = sentence.split(' ');

         for (word of this.words) {
            if (word.length >= wordLength) {
               wordLength = word.length;
               longWord = word;
            }
         }
         let lastLetter = longWord[longWord.length - 1]
         let filtered = this.words.filter(word => word.endsWith(lastLetter));
         let wordsObj = { lastLetter, wordsArr: filtered }

         return wordsObj;
      },
      showMsg() {
         if (this.checkedVal == 'longest') {
            this.message = 'Longest word is: ' + this.longestWord(this.sentenceInput);
         } else if (this.checkedVal == 'shortest') {
            this.message = 'Shortest word is: ' + this.shortestWord(this.sentenceInput);
         } else if (this.checkedVal == 'length') {
            this.message = 'Length of all words is: ' + this.totalLength(this.sentenceInput);
         } else if (this.checkedVal == 'most') {
            this.message = 'Last letter is: ' + this.mostWords(this.sentenceInput).lastLetter;;
            this.mostWordsList = this.mostWords(this.sentenceInput).wordsArr;
         }
         return true;
      },
   }
}

