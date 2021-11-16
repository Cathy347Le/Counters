# Counters

NOTE: This project has multiple branches

### Step by Step Project Notes

- install and import bootstrap
- create static counter component
  - embed expression
  - setting attributes
  - render classes dynamically
- rendering lists (use map method)
  - conditional rendering lists
- get counter to increment/decrement (update the state using events)
- create counterList component and display counters
- passing data to components and console.log props
- pass children aka pass content into component
- add a delete button (raising and handling events)
  - the component that owns a piece of the state should be the one modifying it
    - counterList should control the delete feature
    - counter component will raise the event (onDelete) and CounterList should handle the event (handleDelete())
    - update the state after delete button is clicked
- data clean up, pass the entire counter object as a prop, instead of specifying each property you want to pass
- add a reset button - (requires a single source of truth)
  - remove the local state in counter component. change it to props aka make counter a presentationl component
  - raise and handle Increment and Decrement event
  - add reset button in CounterList handleReset - map method to change all the counter values to 0
- add a start over button (reloads the window again)
- add Nav Bar to track the number of active counters
  - Nav Bar does not have parent-child relationship to counterList, therefore you need to lift the state up to App component
  - CounterList becomes a presentational component
  - Bubbling it up to the parent
