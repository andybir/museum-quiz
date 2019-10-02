# Project Overview


## Project Description

Learn about museum exhibits, take a quiz to test your knowledge

## Wireframes

https://ninjamock.com/s/6G2TTFx

## API Snippet

https://api.harvardartmuseums.org/object/304006?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e

```
objectid: 304006,
objectnumber: "1943.1321",
accessionyear: 1943,
dated: "8th century BCE",
datebegin: -800,
dateend: -700,
classification: "Sculpture",
classificationid: 30,
medium: "Bronze",
technique: "Cast, lost-wax process",
techniqueid: 1311,
period: "Iron Age",
periodid: 401,
century: "8th century BCE",
culture: "Urartian",
style: null,
signed: null,
state: null,
edition: null,
standardreferencenumber: null,
dimensions: "10 x 12 x 11 cm (3 15/16 x 4 3/4 x 4 5/16 in.)",
copyright: null,
creditline: "Harvard Art Museums/Arthur M. Sackler Museum, Bequest of Grenville L. Winthrop",
department: "Department of Ancient and Byzantine Art & Numismatics",
division: "Asian and Mediterranean Art",
contact: "am_asianmediterranean@harvard.edu",
description: "This cauldron attachment is in the shape of a bull's head. It is characterized by a rectangular forelock with three tiers; each tier consists of six long locks ending in a scalloped curl. Each lock is subdivided into three curving strands. The uppermost tier, which starts between the horns and falls down the neck, has scallops on both ends. The hollow horns were created separately and added to the head; only stumps remain of the ears. The eyes and brows are rendered in relief, with softly modeled forms rising from deeply incised outlines. The mouth is essentially a groove, and the beginning of a dewlap seems to be indicated on the front of the neck. The bull's nostrils are flared, and raised veins run from the corners of the forelock, across the nose, and up to the eyes and nostrils. The lower edge of the head has a recessed collar for attachment to its vessel.",
provenance: "Grenville L. Winthrop, New York, NY, (by 1943), bequest; to Fogg Art Museum, 1943.",
commentary: "",
labeltext: null,
imagecount: 14,
mediacount: 0,
colorcount: 9,
markscount: 0,
peoplecount: 0,
titlescount: 1,
publicationcount: 8,
exhibitioncount: 2,
contextualtextcount: 0,
groupcount: 3,
relatedcount: 0,
totalpageviews: 540,
totaluniquepageviews: 456,
dateoffirstpageview: "2009-06-17",
dateoflastpageview: "2019-09-28",
verificationlevel: 3,
verificationleveldescription: "Good. Object is well described and information is vetted",
imagepermissionlevel: 0,
accesslevel: 1,
accessionmethod: "Bequest",
rank: 245,
url: "https://www.harvardartmuseums.org/collections/object/304006",
id: 304006,
lastupdate: "2019-09-30T06:20:35-0400",
colors: [
{
percent: 0.36766404199475,
spectrum: "#8c5fa8",
color: "#c8c8c8",
css3: "#c0c0c0",
hue: "Grey"
},
{
percent: 0.15779527559055,
spectrum: "#2eb45d",
color: "#323232",
css3: "#2f4f4f",
hue: "Grey"
},
{
percent: 0.12703412073491,
spectrum: "#8c5fa8",
color: "#afafaf",
css3: "#a9a9a9",
hue: "Grey"
},
{
percent: 0.11727034120735,
spectrum: "#3db657",
color: "#4b4b4b",
css3: "#2f4f4f",
hue: "Grey"
},
{
percent: 0.087349081364829,
spectrum: "#955ba5",
color: "#e1e1e1",
css3: "#dcdcdc",
hue: "Grey"
},
{
percent: 0.058950131233596,
spectrum: "#7866ad",
color: "#646464",
css3: "#696969",
hue: "Grey"
},
{
percent: 0.031023622047244,
spectrum: "#8362aa",
color: "#7d7d7d",
css3: "#808080",
hue: "Grey"
},
{
percent: 0.029396325459318,
spectrum: "#1eb264",
color: "#191919",
css3: "#000000",
hue: "Grey"
},
{
percent: 0.023517060367454,
spectrum: "#8761aa",
color: "#969696",
css3: "#a9a9a9",
hue: "Grey"
}
],
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
| render object img | H | 4hrs| 1hrs | 1hrs |
| render object description | H | 3hrs| 1hrs | 1hrs |
| create/upload questions to JSON | H | 3hrs| 2hrs | 2hrs |
| render questions for each object | H | 4hrs| 3hrs | 3hrs |
| render correct/incorrect + answer | H | 4hrs| 3hrs | 3hrs |
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
