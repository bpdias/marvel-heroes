# 

### Marvel Heroes ###

### Project Intention ###
* Consume Api and save data on storage

### Project Dependencies ###

 * Npm as package manager. (https://www.npmjs.com/)
 * React.js as the application library core. (https://reactjs.org/)
 * Redux as the predictable state container for JavaScript apps. (https://redux.js.org/)
 * Redux Thunk handle asynchronous calls. (https://github.com/reduxjs/redux-thunk)
 * Jest as the Javascript test framework. (https://jestjs.io/en/)
 * Enzyme as the JavaScript Testing utility for React. (https://airbnb.io/enzyme/)
 * Sass as the preprocessor and extension of CSS. (https://sass-lang.com)

### Compile and run the client ###

Go to the root folder end run the commands.

- npm install (npm i)

- npm run start

### Running the tests ###

- npm run test


### Development Description ###

After receiving the challenge, I choose the React library to handle the specifications. 

For the client side I use the create-react-app boilerplate to begin the development,and with Npm I add the dependencies and libraries to complete the task.

### Application details ###

Thinking about componentization and organization I follow the components pattern of singularity, each component is independent and have your complete structure in one place. 

Js, Styles and Test files are inside the specific component folder to become easier to debug, mantain and refactor.

In multidisciplinary teams, I think if someone else is going to work on a specific component if all off functionality are in one place is easy to understand and work on it.

Looking for code organization and reusability of code following the DRY principle, I normally create folders who handle specific things that are reusable. 

Config, helpers, and hocs (higher order components) folders are examples of reusability. 

On Config folder I reserve for files who have configurations and constants that are immutable and reusable in all parts of the system. In this particular case the API links.

The Helper folders I organize js and CSS files that have a specific utilization like label manipulation and CSS variables. were we can reuse on all the system.

Hocs folder as the same, I put all my Higher Order Functions  on the folder because by definition they are reusable.

The Components folder is where I put the class extended components who will deal as the pages on the system and will handle to get the data necessary for the components who build the page.

And finally the Redux folder where I organize all the state management structure, the actions creators and reducers.

### Test Coverage ###

I cover the actions and the reducers, when I test my action I want to verify if my ajax call from my ajaxHelper file are dispatching the right actions. And for my reducers test I want to cover if the states of my application was what I expect.

Best regards.
