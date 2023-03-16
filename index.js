/** Question 1 - CONSTRUCTOR FUNCTION 
    Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
    Properties - Handle of author, content, An image link posted by the author of the post, Number of views, Number of likes.
*/ 
// CONSTRUCTOR FUNCTION
function InstagramPost(authorHandle, postContent, imageLink, numberOfViews, numberOfLikes) {
  this.authorHandle = authorHandle;
  this.postContent = postContent;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

const post = new InstagramPost("@bee_olusiyan","Hey peaches!!! Beean a while", "https://www.instagram.com/p/B2ykmh0lQHH/?utm_source=ig_web_copy_link", 60, 42);

console.log(post);



/** Question 2 - CONSTRUCTOR FUNCTION 
    Create 2 Instagram post objects from the CONSTRUCTOR FUNCTION you created above
 */
// 2 NEW INSTAGRAM POSTS
const post1 = new InstagramPost("@manchesterunited", "🏆 W I N N E R S 🏆", "https://www.instagram.com/p/CpIwXnitcz5/?utm_source=ig_web_copy_link", "1M", "998K");

const post2 = new InstagramPost("@easyshoppers_ng", "It's February and a brand new month to make the most of!", "https://www.instagram.com/p/CoHqQQXjajO/?utm_source=ig_web_copy_link", 10, 5);

console.log(post1); 
console.log(post2); 



/** Question 3 - FACTORY FUNCTION
    Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, 
    he wrote the JAMB exam and had the following scores in his combination: ENG - 70, GOVT - 85, LIT - 82, CRK - 94
 */
// (A) Using the factory method, implement a createPerson() FACTORY FUNCTION that takes name, age and location as arguments. 
// Afterwards, create an object representing Musa from the factory function. 
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}
const musa = createPerson("Musa Dawodu", "19 years", "Lekki, Lagos State");

console.log(musa);


// (B) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
// Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}
// const musaJambScores = createJambScores(70, 85, 82, 94);
// console.log(musaJambScores);

// SOLUTION TO PART B AFTER REVIEW 
const musaJambScores = createJambScores(70, 85, 82, 94);

musa.jambScores = musaJambScores; // added jamscores object as property to musa object

console.log(musa);

// Merging musa and musa jamb scores objects
// const musaInfo = Object.assign(musa, musaJambScores);
// console.log({musa}); // outout: musa's info and jambscore

// Question 3 solved using factory setting all through
function createPerson(name, age, location, jambScores) {
  return {
    name: name,
    age: age,
    location: location,
    jambScores: jambScores
  };
}

const musaJambScores2 = createJambScores(70, 85, 82, 94);
const musa2 = createPerson("Musa Dawodu", "19 years", "Lekki, Lagos State", musaJambScores2);

console.log(musa2);



/** Question 4 - OBJECT CLONING
    What are the different ways you can clone an object? Give examples for each of them.
    They are: a. Object.assign(); b. spread syntax (...) c. JSON.parse(JSON.stringify())
 */

// OBJECT.ASSIGN() method of cloning
const language = {
    dialet: "nkwani",
    tribe: "niger-delta"
};

const secondLanguage = Object.assign({}, language);
secondLanguage.dialet = "isoko";

console.log(language);
console.log(secondLanguage);


// SPREAD SYNTAX (...)
const thirdLanguage = { ...language};
thirdLanguage.dialet = "urhobo";

console.log({language});
console.log({ thirdLanguage });


// JSON.parse(JSON.stringify())
const fourthLanguage = JSON.parse(JSON.stringify(language));
fourthLanguage.dialet = "ijaw";

console.log({language});
console.log({fourthLanguage});



/** Question 5 - ENUMERATION OF OBJECTS
    As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates: 
    Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
*/

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

// FOR..IN LOOP METHOD
for (let party in presidentialCandidates) {
  console.log(
    presidentialCandidates[party] + " is the presidential candidate of " + party
  );
}


