# Weather App

This Weather App is a simple web application that provides real-time weather information for a city entered by the user. The app displays details like temperature, humidity, wind speed, and weather conditions using data fetched from the OpenWeatherMap API.

## Features

- **Search by City:** Enter a city name to get the current weather.
- **Weather Details:** View temperature, humidity, wind speed, and an icon representing the weather conditions.
- **Error Handling:** Displays an error message for invalid city names.

## Screenshots

![Screenshot 2024-08-01 195750](https://github.com/user-attachments/assets/f2d0453b-0aaa-4497-a1fb-d9aeb4a834dd)
![Screenshot 2024-08-01 195813](https://github.com/user-attachments/assets/410b9bc7-5964-4aa6-a204-7275b7339be2)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NasarZia/Weather_App.git
   cd Weather_App
   ```

2. Open the project directory and set up your API key:

   - Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for an API key.
   - Replace the `apikey` in `script.js` with your own API key:

   ```javascript
   const apikey = "your-api-key";
   ```

3. Open the `index.html` file in your browser to view the app.

## Usage

1. Enter the name of the city in the search box and click the search button.
2. The app will display the current weather information for the entered city.
3. If an invalid city name is entered, an error message will appear.

## Customization

- You can customize the styling of the app by editing the `style.css` file.
- The weather icons and other elements can be modified in the `images` folder and the corresponding HTML and JavaScript files.

## Contributing

Feel free to fork this repository, create a branch, and submit pull requests. Any improvements or suggestions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
