1. What React components does your app have and what is the responsibility of each component?
(_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

`App` - Functions as the entry point for the whole application. Renders the app container component.
`Bar` - This component is the page which displays navigation, input for each module name and chart. I update the moduleDataSet in this component. Each time input value changes it gets a new url from getBarChartUrl function and sets chartUrl state.
`Radar` - This component has the same functinality like Bar component. Responsible for displaying navigation, form fields and chart
`Navigation` - This component is used to display two buttons which have links redirects to /bar and /radar on click. This is also used as single page for / this path.
`Chart` - This component is responsible for displaying Chart with the given url as a prop.
`Input` - This component is used to display an input. It expects couple of props like defaultValue(to get the random number in first render), label(input name) , handleOnChange(to be able to get the data from the parent), index(to be able to determine which element of array updated)

2. Let's say your product owner asks you to define what you need to change to also validate that the user can only enter a number between 1 and 10. Write down (do NOT implement) in short steps what you would need to do.
(_TIP: Write down if you would add a component or hook. Or what components need what alterations_)
- Create a function which expects a number as a parameter in util folder called validateInput.js
- Implement the logic in that function to check if the number is in between 1 and 10. And return true if the number is as expected otherwise return false
- Call the function in Input component handleChange. if the function returns false throw error otherwise set the new number
- Display the error under the input like 'you should enter a number between 1 and 10.
(_TIP: For example, if the new feature was to add an option to change the color of the radar graph it would be:_

- Create a color picker component
- Add the color picker component to the radar graph page
- Add a paremeter to the `getRadarChartUrl` to set the color
- Update the `getRadarChartUrl` function to pass the color to the API
)


