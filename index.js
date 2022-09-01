const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.get('/courses/:term/:subject/:number?', async (req, res) => {
  const {term, subject, number} = req.params;
  try {
    const response = await axios({
      method: 'get',
      url: `https://imc-apis.webapps.buffalo.edu/schedule/courses/${term.toLowerCase()}?abbr=${subject.toUpperCase()}`,
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2F0YWxvZyBXZWJzaXRlIiwiZ3JvdXAiOiJJTUMiLCJ1c2VyIjoiNWZjNjc5OWZmMzQzOWUwMDEyMGQyZTE0IiwiZG9tYWluIjpbImNhdGFsb2cuYnVmZmFsby5lZHUiXSwicGVybWlzc2lvbnMiOlsiY2F0YWxvZyIsInNjaGVkdWxlIiwiYnVpbGRpbmdzIiwibmxwIiwic2VhcmNoIl0sInRva2VuX2lkIjoiNjA1MzVlM2ZiYzQ2Y2MwMDEyMjFlMjc1IiwiaWF0IjoxNjE2MDc2MzUxfQ.15klEGfpWwfPk5ulKLQhULGXZcviDwXHw_Y705DvlQQ', 'origin': 'https://catalog.buffalo.edu'}
    })
    res.json(response.data);
  } catch (e) {
    console.log(e)
    res.send("Something went wrong")
  }
})


app.get('/courses/subjects', async (req, res) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://catalog.buffalo.edu/courses/data/subjects.json`
    })
    res.json(response.data);
  } catch (e) {
    console.log(e)
    res.send("Something went wrong")
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})