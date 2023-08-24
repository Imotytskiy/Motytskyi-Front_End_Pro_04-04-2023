import React from "react";
import DelButton from "../DelButton/DelButton";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/store";
import Checkbox from '@mui/material/Checkbox';
import { ListItem, ListItemIcon, ListItemButton, IconButton } from "@mui/material";

export default function TodoItem({ todo, index, buttonDelClick }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <ListItem onClick={handleClick}
    secondaryAction={
      <IconButton edge="end" aria-label="comments">
        <DelButton todo={todo} buttonDelClick={buttonDelClick} />
      </IconButton>}
     disablePadding>
      <ListItemButton  role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            checked={todo.completed}
            onChange={handleClick}
            color="secondary"
            inputProps={{ 'aria-label': 'controlled' }}
            readOnly
          />
        </ListItemIcon>
        <span
  style={
    todo.completed ? { textDecoration: 'line-through', color: 'red' } : { textDecoration: 'none' }
  }
>
  <b>{index + 1}.&ensp; </b>{todo.title}
</span>
      </ListItemButton>
    </ListItem>
  );
}