import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function User(){
    const userData = [
        {
            avatar :'',
            userName: ''
        }
    ]
    const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
    return(
        <div className="grid">
            <h1 className=" text-4xl text-center text-clip  underline">
                users
            </h1>
            <div className="grid">
                {userData.map((user) =>(
                    <div className=' w-full'>
                    {[ 1,].map((value) => {
                      const labelId = `checkbox-list-secondary-label-${value}`;
                      return (
                        <ListItem
                        sx={{width: 800, marginTop: 4}}
                          key={value}
                          secondaryAction={
                            // <DeleteIcon/>
                            
                            <Checkbox
                              edge="end"
                              onChange={handleToggle(value)}
                              checked={checked.indexOf(value) !== -1}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          }
            
                        >
                          <ListItemButton>
                            <ListItemAvatar>
                              <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={`/static/images/avatar/${value + 1}.jpg`}
                              />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`mtawaliecas@tgmail.com ${value + 1}`} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </div>
                        
                ))}

            </div>

        </div>
    );
}