// There we are define our Global Variables
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'df48fab1531ad571fe72b082c6699576';
const serverLink ='http://localhost:7100';


/* Create a new date instance dynamically with JS
Note: The below variables was provided by starter code and the date with not 
correct so I added a "+" sign before "d.getMonth()+" and number 1 after it 
to give me a correct date */
let d = new Date();
let newDate = +d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();

// Additional, Function called thereIsError for catching errors
function thereIsError (error) {
    console.error('Alert--There is an error please check',error )
}

/* Here is the Event listener called click so when the button clicked the 
the call function goAndRetrive will execute */
document.getElementById('generate').addEventListener('click', buildInfo);

// Here is the function named  "buildInfo" that called by event lisener
function buildInfo() {
    const newZip = document.getElementById('zip').value;
    const newFeel = document.getElementById('feelings').value;
  
    goAndRetrive(baseURL, newZip, apiKey)
      .then(function (data) {
          // post our data to the server, this data will be the date, temp and feelings)
        sendSaveData(`${serverLink}/sendAllData`, { date: newDate, temp: data.main.temp, newFeel });
          // We will wait until we have received the data and post it, after that we will update our user interface.
      }).then(function () {
          // update and present data to user interface
        userInterfaceUpdate()
      })

    };

  // Async Post
  const sendSaveData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        return await response.json()
    } catch (error) {
        console.log('error', error);
    }
};


/* Async function with three parameters ( baseURL, newZip and apiKey)
Here we are rebuild the webLink that enable us to query weather web api database */
const goAndRetrive = async (baseUrl, newzip, apiKey) => {

    // Here we are building our webLink by using combination of baseurl, newzip and apikey.
    const webLink = `${baseUrl}${newzip}&appid=${apiKey}&units=metric`;
    const joRes = await fetch(webLink)
   let res = await joRes.json()
    return res
  }

       //Here is an Async function which willUpdating the UI of the app dynamically,
  const userInterfaceUpdate = async () => {
      // Once we receive all data we will wait until to converted to json.
    const request = await fetch(`${serverLink}/receiveAllData`);
    try {
        // Here the completeData is the variable that has our data in json format.
        const completeData = await request.json();
        console.log(completeData);
        document.getElementById('date').innerHTML = completeData.date;
        document.getElementById('temp').innerHTML = completeData.temp;
        document.getElementById('content').innerHTML = completeData.newFeel;
        // Here if there is somethig goes wrong we will know.
    } catch (error) {
        console.log('error', error);
    }
};
