import { useHistory } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

//create card for each receipe


export function Receipe({ name, setname, picturelink, setpicturelink, ingredients, setingredients, receipe, setreceipe, videolink, setvideolink, notes, setnotes, preptime, setpreptime, cooktime, setcooktime, soakingtime, setsoakingtime, fermentationtime, setfermentationtime, totaltime, settotaltime, course, setcourse, cuisine, setcuisine, servings, setservings, calories, setcalories, carbohydrates, setcarbohydrates, protein, setprotein, fat, setfat, sodium, setsodium, potassium, setpotassium, fiber, setfiber, sugar, setsugar, calcium, setcalcium, iron, setiron, vitamina, setvitamina, vitaminc, setvitaminc, receipelist, setreceipelist, index, editindex, seteditindex, mode }) {
  // console.log(name,picturelink,ingredients,receipe,videolink,notes,preptime,cooktime,soakingtime,
  //   fermentationtime,totaltime,course,cuisine,servings,calories,carbohydrates,protein,fat,sodium,potassium,
  //     fiber,sugar,calcium,iron,vitamina,vitaminc)

  //based on page theme(light/dark) receipe card style changes
  const borderstyle = (mode === "dark") ? { border: "6px solid white", background: "black" } : { border: "7px solid #708090", background: "#E5E4E2" };
  const buttonstyle = (mode === "dark") ? { border: "2px solid white", background: "#303030" } : { border: "2px solid #708090", background: "#C0C0C0" };


  const history = useHistory();


  return (
    <div className='card' style={borderstyle}>
      {/* delete button to delete the receipes and rceipe is removed based on index value*/}


      <Tooltip title="delete the receipe">
        <Fab aria-label="delete receipe " color="sec" size="medium" className='Fab-button' onClick={() => {
          const deleteindex = index;
          console.log(deleteindex);
          setreceipelist(receipelist.filter((ele, ind) => ind != deleteindex));
        }}>
          {/* <ClearIcon/> */}
          <RemoveIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Edit the receipe">
        <Fab aria-label="edit receipe " color="sec" size="medium" style={{ float: "right" }} className='Fab-button' onClick={() => {
          console.log(index);
          const { name, picturelink, ingredients, receipe, videolink, notes, preptime, cooktime, soakingtime, fermentationtime, totaltime, course, cuisine, servings, calories, carbohydrates, protein, fat, sodium, potassium, fiber, sugar, calcium, iron, vitamina, vitaminc } = receipelist[index];


          setname(name);
          setpicturelink(picturelink);
          setingredients(ingredients);
          setreceipe(receipe);
          setvideolink(videolink);
          setpreptime(preptime);
          setcooktime(cooktime);
          setsoakingtime(soakingtime);
          setfermentationtime(fermentationtime);
          settotaltime(totaltime);
          setcourse(course);
          setcuisine(cuisine);
          setservings(servings);
          setcalories(calories);
          setcarbohydrates(carbohydrates);
          setprotein(protein);
          setfat(fat);
          setsodium(sodium);
          setpotassium(potassium);
          setfiber(fiber);
          setsugar(sugar);
          setiron(iron);
          setvitamina(vitamina);
          setvitaminc(vitaminc);
          setnotes(notes);
          setcalcium(calcium);
          seteditindex(index);

          history.push("/editreceipe");
        }}>
          <ModeEditOutlineOutlinedIcon />
        </Fab>
      </Tooltip>
      <br></br>

      <div>
        <img src={picturelink} />
      </div>
      <br></br>

      <div className='heading'>
        <h1>{name}</h1>
      </div>

      <Button color="primary" variant='outline' aria-label="show receipe details" style={buttonstyle} onClick={(e) => {
        history.push(`/receipe/${index}`);
      }}>
        Learn More
      </Button>

    </div>
  );

}
