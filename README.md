# Getting Started with Create React App
### working link : https://vishalkashyap247.github.io/assignment-of-terribly-tiny-tales/

---

## `App.js`
This file serves as the main entry point and central control for the application. It manages the overall structure and functionality of the user interface.

- `handleClick`: When the user clicks the "Fetch data" button, this function is triggered. It performs an asynchronous operation to fetch a text file from a specific URL. Once the text file is retrieved, it is parsed to extract individual words, and a histogram is built based on the word frequencies. The resulting histogram data is then set as the application's state, triggering a re-render to display the histogram on the screen.
- `handleExport`: When the user clicks the "Export" button, this function is triggered. It converts the histogram data into a CSV (Comma-Separated Values) format, which is commonly used for spreadsheet files. The CSV data is then saved as a file with the name "histogram.csv", allowing the user to download and save the histogram data.
- `convertToCSV`: This utility function takes the histogram data and converts it into a CSV string. It creates rows of data, where each row consists of a word and its corresponding frequency, separated by commas. The rows are then joined together with newline characters to form the final CSV string.

---

## `api.js`
This file contains a utility function for making HTTP requests to fetch a text file from a specified URL.

- `fetchTextFile`: This function takes a URL as input and uses the `fetch` function to send a request to that URL. It retrieves the text content of the file from the server's response and returns it as a string.

---

## `Histogram.js`
This file defines a reusable React component for rendering a histogram chart based on provided data.

- The `Histogram` component receives the histogram data, along with optional labels for the x-axis and y-axis, as props.
- Inside the component, the D3.js library is used to calculate the necessary dimensions and scales for rendering the histogram.
- The component then uses D3.js to select the SVG (Scalable Vector Graphics) element and render the histogram chart within it.
- The chart is composed of bars, where each bar represents a word from the data. The height of each bar is determined by the frequency of the corresponding word.
- The x-axis and y-axis are also generated and labeled based on the provided data and labels.
- The resulting histogram chart is displayed on the screen as an SVG image.

---

## `utils.js`
This file contains utility functions that are used for various data processing tasks.

- `fetchTextFile`: This function is similar to the one in `api.js`. It takes a URL as input and uses the `fetch` function to retrieve the content of a text file from that URL. The content is then returned as a string.
- `parseText`: This function takes a string of text as input and extracts individual words from it. It converts the text to lowercase and uses a regular expression to find and extract alphabetic words.
- `buildHistogramData`: This function takes an array of words and calculates the frequency of each word. It creates a frequency map where each word is associated with its count. The map is then sorted based on the counts, and the top `limit` number of entries are extracted and returned as histogram data.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
