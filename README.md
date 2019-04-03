#_Behavior Driven Development_

####_Behavior_
1. The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
2. The program adds "ay" to single-letter words beginning with a vowel.
3.  Recognize the first vowel in each word
4. If the word begins with a consonant split at first vowel and move letters to the end as well as "ay" thereafter.
5. If the word begins with a vowel remove the first consonant and add "way" to the end.
6. Combine words that are now translated in pig latin into it's original order.

####_Input Example_
1. 3
2. i
3. apple
4. banana
5. obvious
6. apple banana obvious

####_Output Example_
1. 3
2. iay
3. a
4. ananabay
5. obviousway
6. applway ananabay obviousway
