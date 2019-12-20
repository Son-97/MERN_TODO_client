import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getTask = () => {
  return axios
    .get('/task', {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.data
    })
}
export const addToList = term => {
  return axios
    .post('/task', { task_name: term },
      {
        headers: { 'Content-Type': 'application/json' }
      })
    .then(function (response) {
      console.log(response)
    })
}

export const updateItem = (term, id) => {
  return axios
    .put(
      `/task/${id}`,
      {
        task_name: term
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then(function(response) {
      console.log(response)
    })
}

export const deleteItem = id => {
  return axios
    .delete(`/task/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    })
}