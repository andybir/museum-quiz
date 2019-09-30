# Project Overview


## Project Description

Learn about museum exhibits, take a quiz to test your knowledge

## Wireframes

https://ninjamock.com/s/6G2TTFx

## API Snippet

```
https://api.harvardartmuseums.org/object/304006?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e
```

#### MVP
- Display a themed museum collections for user to learn about
- Build out 5 objects with image and description per collection
- Create a quiz for each collection with multiple choice options
- Display results of quiz
- add simple CSS 

#### PostMVP

- add two more collections
- Show quiz question progress bar in upper right corner
- add more objects per collection
- offer more variety for answer types, i.e. open ended or fill in the blank

## React Component Hierarchy

https://i.imgur.com/Kn730IZ.jpg

## Priority Matrix

https://i.imgur.com/QYETWZH.jpg
https://i.imgur.com/W0eU8Lz.jpg

## Functional Components

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav |
| Welcome | Will render three collection choices w/ corresponding img |
| Collection 1 | Will render collection objects w/ img and context |
| Quiz 1 | Will render 5 questions about the previous collection viewed by user |
| Results 1 | Render the results of quiz, give option to try again or choose new collection |
| Collection 2 | Will render collection objects w/ img and context |
| Quiz 2 | Will render 5 questions about the previous collection viewed by user |
| Results 2 | Render the results of quiz, give option to try again or choose new collection |
| Collection 3 | Will render collection objects w/ img and context |
| Quiz 3 | Will render 5 questions about the previous collection viewed by user |
| Results 3 | Render the results of quiz, give option to try again or choose new collection |


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| render object img | H | 4hrs| --- | --- |
| render object description | H | 3hrs| --- | --- |
| create/upload questions to JSON | H | 3hrs| --- | --- |
| render questions for each object | H | 4hrs| --- | --- |
| render correct/incorrect + answer | H | 4hrs| --- | --- |
| build out welcome page with collection choices | H | 4hrs| --- | --- |
| build page to display results of quiz, offer choice to try again or choose new collection | H | 4hrs| --- | --- |
| CSS | H | 4hrs| --- | --- |


| Total | H | 30hrs| --- | --- |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
