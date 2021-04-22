// Store
import store from "../store";
const axios = require('axios');

// ToDo_DETAILS Actions

// Fetching 
export const fetch_ToDo_details = () => {
  return { type: "FETCHING_ToDo_DETAILS", data: "Loading" };
};
// Error Fetching
export const receive_error_ToDo_details = (err) => {
  return { type: "ERROR_ToDo_DETAILS", data: err };
};


// Fetched All ToDo list
export const receive_ToDo_details = (data) => {
  return { type: "FETCHED_ToDo_DETAILS", data: data };
};
// Fetched Add ToDo list
export const add_ToDo_details = (data) => {
  return { type: "FETCHED_Add_ToDo_DETAILS" };
};
// Fetched Delete ToDo list
export const delete_ToDo_details = (data) => {
  return { type: "FETCHED_Delete_ToDo_DETAILS" };
};
// Fetched Update ToDo list
export const update_ToDo_details = (data) => {
  return { type: "FETCHED_Update_ToDo_DETAILS" };
};



// Fetch ToDo_Details
export const thunk_action_fetch_ToDo_Details = () => {
  // 1.0 - Start Fetch
  store.dispatch(fetch_ToDo_details());
  axios.get("http://localhost:4000/todo/all")
    .then((response) => {
      // 2.0 - if Fetch is Good
      store.dispatch(receive_ToDo_details(response.data));
    })
    .catch((error) => {
      // 2.0 - if Fetch is Bad
      store.dispatch(receive_error_ToDo_details(error));
    })

};


// Fetch Add_ToDo_Details
export const thunk_action_Add_ToDo_Details = (payload) => {
  axios.put("http://localhost:4000/todo/add", { todoItem: payload })
    .then((response) => {
      // 1.0 - if Fetch is good
      store.dispatch(add_ToDo_details());
      // 2.0 Refresh the List
      thunk_action_fetch_ToDo_Details()
    })
    .catch((error) => {
      // 2.0 - if Fetch is Bad
      store.dispatch(receive_error_ToDo_details(error));
    })
};
// Fetch Delete_ToDo_Details
export const thunk_action_Delete_ToDo_Details = (payload) => {
  axios.put("http://localhost:4000/todo/delete", { id: payload })
    .then((response) => {
      // 1.0 - if Fetch is good
      store.dispatch(delete_ToDo_details());
      // 2.0 Refresh the List
      thunk_action_fetch_ToDo_Details()
    })
    .catch((error) => {
      // 2.0 - if Fetch is Bad
      store.dispatch(receive_error_ToDo_details(error));
    })
};
// Fetch Update_ToDo_Details
export const thunk_action_Update_ToDo_Details = (payload) => {
  axios.put("http://localhost:4000/todo/update", { payload })
    .then((response) => {
      // 1.0 - if Fetch is good
      store.dispatch(update_ToDo_details());
      // 2.0 Refresh the List
      thunk_action_fetch_ToDo_Details()
    })
    .catch((error) => {
      // 2.0 - if Fetch is Bad
      store.dispatch(receive_error_ToDo_details(error));
    })
};