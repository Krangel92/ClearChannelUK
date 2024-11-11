## Exercise Instructions:

You are given a string of lowercase English alphabet letters and its length.

The string needs to be in the smallest alphabetical order and following these conditions:

2 characters that are next to each other can be swaped if one is a vowel and the other is a consonant.
The above condition can be done as many times as needed.

---

```
Input:
6       ---- length of the string
auehib  ---- given string

```

---

```
Output:
ahbuei

Explanation:
S = auehib

e and h swap because they are a vowel next to a consonant, so S = auheib
u and h swap because they are a vowel next to a consonant, so S = ahueib
b and i swap because they are a vowel next to a consonant, so S = ahuebi
e and b swap because they are a vowel next to a consonant, so S = ahubei
b and u swap because they are a vowel next to a consonant, so S = ahbuei

After swaping the letter te output is: ahbuei
```

## Things that threw me off:

1. Name of function "Logic" was capitalised
   - This function is behaving like a class (in modern JS) or as a constructor function (in old JS).
   - It’s intended to be used as a constructor to instantiate a new object with the keyword new.
   - It acts as a class-like structure in ES5 or earlier JavaScript.

- My comment: either the keyword should be 'class' + Logic (uppercase) OR logic (lowercase) so that I'd treat it as a regular function.

2. var 1: I don't know what the gets() function is doing?

- After doing research, gets() is typically used in programming platforms to read input.
- My comment: I should have console.logged 'sampleInput' to see what I was being given as a parameter.

3. var 2: why was this var assigned the value of -404?
   - It seems to be a place holder for when the actual output is not what the expected output should be.
   - It might be inspired by the HTTP error code 404 (Not Found)?

- My comment: once the code was working, I should have reassigned 'result' to the actual result.

---

In the CCTechTestAttempt.js file, there is my attempt to solve it.
