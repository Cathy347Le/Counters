# Counters

NOTE: This project has multiple branches

### Step by Step Project Notes

- install and import bootstrap
- create static Counter component
  - embed expression
  - setting attributes
  - render classes dynamically
- rendering lists (use map method)
  - conditional rendering lists
- Get counter to increment/decrement (update the state using events)
- Create CounterList component and display counters
- Passing data to Components and console.log props
- Pass children aka pass content into component
- Add a delete button (raising and handling events)
  - The component that owns a piece of the state should be the one modifying it
    - CounterList should control the delete feature
    - Counter component will raise the event (onDelete) and CounterList should handle the event (handleDelete())
