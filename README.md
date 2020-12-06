# Introduction

For the test we're going to ask you to implement a fun little react app that will use an online chart generator to create a nice radar and bar graph of students' skills as a developer.

We are going to use an open API to generate this chart (https://quickchart.io/), your test is to have inputs to allow the user to give the different skill levels of each module and then generate the chart. The function to get a url for this chart will be given to you so you should not need to look up how this API works.

# Goal / Requirements

Read the instructions carefully and tackle them one by one, in the end you should have a project that works as follows: https://robvk.github.io/react-test-visualise-my-skills/.

Do not worry about if your version does not look exactly the same, you will not be graded on the way it looks. Only on the functionality.

After finishing the project, fill in the ANSWERME.md file to answer some questions about the code you just wrote in the project.

You can adjust the project files to your wishes. You should not add any other libraries though!

Below is a checklist of functionality in slightly smaller steps for you (this is also the list of things we will be looking at). You can follow this or go your own way, as long as you can check all the boxes at the end. You may also want to do it in smaller steps, that is totally up to you.

- [ ] Create a Nav bar with 2 buttons (radar and bar) that go to 2 different pages and update the url
  - TIP: `react-router-dom` is already added to the `package.json` file. Use that package. The documentation can be found here: https://reactrouter.com/web/guides/quick-start.
- [ ] Create 7 inputs that can be filled in by the user and are initially filled in with a random number between 1 and 10
  - TIP: think about where the state of these inputs should be kept, you will need to know all of the numbers later for the chart
  - TIP: Use the `useContext` hook for your state
- [ ] Create a Radar page, you can use the `getRadarChartUrl` to get the url to the graph
  - TIP: the API returns a url, this is a link to the image of this graph
- [ ] Create a Bar page, you can use the `getBarChartUrl` to get the url to the graph
- [ ] The app initially shows the radar graph of the 7 inputs and the charts update when an input is changed

# Step by step help

What to do:

1. Thoroughly read through this README and the `ANSWERME.md` file to get a feel of what needs to happen. Take a good look at the Grading section so you know what to focus your time on!
2. Think of your solution, what is your approach going to be. What components will there be?
3. Start programming (the fun part!). This folder is already set up with the basic react app and the correct libraries, you just have to run `npm install`. Run `npm run start` to run the app locally.
4. Check the functionality list to ensure that you have built everything that is expected
5. Go over your code and ensure that it is clean (code clarity / modularisation). That means:

- No more `console.log` test lines
- No commented out code
- Comments for functions/lines of code that can be unclear for other programmers or yourself in 5 months
- Are the variables/functions named nicely
- Check that the code is split logically (no repeated code in multiple functions, functions that are used for the same step close together in a file or in a separate file)

6. Answer the questions in the `ANSWERME.md` file
7. Upload your final files to your github
8. Send the link to your github project to @Rob van Kruijsdijk on slack

# Grading

What you will be graded on:

- That the end project works as expected (similar to the example project) [up to 10 points]
- That the code is nicely organised and clean (step 5) [up to 4 points]
- The answers to the questions [up to 6 points]

Again, your version will probably look a little different, that is fine. It only has to have the same functionality.

The final grade will then be those points divided by 20 (to get a number between 1 and 10).

# Rules during the exam

1. You are allowed to use Google
2. In case you copy (a line of) code from somewhere else, you must place a reference. Otherwise it is seen as plagiarism.
3. No contact with others during the test.
4. Do not share your test with anybody
5. Hand in your work on time. You have 3.5 hours in total.
