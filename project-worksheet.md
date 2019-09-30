# Project Overview


## Project Description

learn about museum exhibits, take a quiz to test your knowledge

## Wireframes

https://ninjamock.com/s/6G2TTFx

## API Snippet

```
https://api.harvardartmuseums.org/object/304006?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e
```

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

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

Define the the React components and the architectural design of your app.

## Priority Matrix

Add in a picture of your Priority Matrix

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the footer include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

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
