import { useHistory } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddReceipe({ name, setname, picturelink, setpicturelink, ingredients, setingredients, receipe, setreceipe, videolink, setvideolink, notes, setnotes, preptime, setpreptime, cooktime, setcooktime, soakingtime, setsoakingtime, fermentationtime, setfermentationtime, totaltime, settotaltime, course, setcourse, cuisine, setcuisine, servings, setservings, calories, setcalories, carbohydrates, setcarbohydrates, protein, setprotein, fat, setfat, sodium, setsodium, potassium, setpotassium, fiber, setfiber, sugar, setsugar, calcium, setcalcium, iron, setiron, vitamina, setvitamina, vitaminc, setvitaminc, receipelist, setreceipelist }) {

  const buttonstyle = { background: "black", color: "white", border: "2px solid white" };
  const history = useHistory();

  //Form to get data of receipes
  return (
    <div className='form'>
      <div>
        <TextField id="filled-basic" className="textbox" label="Dish Name" variant="filled" required
          onChange={(event) => setname(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Dish picture link" variant="filled"
          required onChange={(event) => setpicturelink(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Ingredients" variant="filled"
          required onChange={(event) => setingredients(event.target.value)} />
        <div className='form-labels'>Enter all ingredients and quantity separated by comma (,) </div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Instructions / steps to do" variant="filled"
          required onChange={(event) => setreceipe(event.target.value)} />
        <div className='form-labels'>Enter all steps clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Notes / points to remember" variant="filled"
          onChange={(event) => setnotes(event.target.value)} />
        <div className='form-labels'>Enter all points clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Video link" variant="filled"
          required onChange={(event) => setvideolink(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Prep time" variant="filled"
          onChange={(event) => setpreptime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:5 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="cooking time needed" variant="filled"
          onChange={(event) => setcooktime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="soaking time needed" variant="filled"
          onChange={(event) => setsoakingtime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="fermentation time needed" variant="filled"
          onChange={(event) => setfermentationtime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:4 hrs</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Total time needed" variant="filled"
          onChange={(event) => settotaltime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:50 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="course type" variant="filled"
          required onChange={(event) => setcourse(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Cuisine" variant="filled"
          required onChange={(event) => setcuisine(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="servings" variant="filled"
          required onChange={(event) => setservings(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Calories" variant="filled"
          onChange={(event) => setcalories(event.target.value)} />
        <div className='form-labels'>Enter amount in KCal (Kilo Calories). Example:100</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Carbohydrates" variant="filled"
          onChange={(event) => setcarbohydrates(event.target.value)} />
        <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Protein" variant="filled"
          onChange={(event) => setprotein(event.target.value)} />
        <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Fat" variant="filled"
          onChange={(event) => setfat(event.target.value)} />
        <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Sodium" variant="filled"
          onChange={(event) => setsodium(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Potassium" variant="filled"
          onChange={(event) => setpotassium(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Fiber" variant="filled"
          onChange={(event) => setfiber(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Sugar" variant="filled"
          onChange={(event) => setsugar(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Calcium" variant="filled"
          onChange={(event) => setcalcium(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Iron" variant="filled"
          onChange={(event) => setiron(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Vitamin A" variant="filled"
          onChange={(event) => setvitamina(event.target.value)} />
        <div className='form-labels'>Enter amount in IU (International Unit). Example:1516</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Vitamin C" variant="filled"
          onChange={(event) => setvitaminc(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br>
      <br></br>
      <Button style={buttonstyle} variant='contained' className='textbox' onClick={() => {

        //adding new receipe object to list
        setreceipelist([...receipelist, {
          name: name.toString().trim().toUpperCase(),
          picturelink: picturelink,
          ingredients: (ingredients.toString().trim().length > 0) ? ingredients.toString().split(",") : ["NA"],
          receipe: (receipe.toString().trim().length > 0) ? receipe.toString().split(".") : ["NA"],
          videolink: videolink,
          notes: (notes.toString().trim().length > 0) ? notes.toString().split(".") : ["NA"],
          preptime: preptime,
          cooktime: cooktime,
          soakingtime: soakingtime,
          fermentationtime: fermentationtime,
          totaltime: totaltime,
          course: course,
          cuisine: cuisine,
          servings: servings,
          calories: calories,
          carbohydrates: carbohydrates,
          protein: protein,
          fat: fat,
          sodium: sodium,
          potassium: potassium,
          fiber: fiber,
          sugar: sugar,
          calcium: calcium,
          iron: iron,
          vitamina: vitamina,
          vitaminc: vitaminc
        }]);

        //after adding setting teh fields to empty values
        setname("");
        setpicturelink("");
        setingredients("");
        setreceipe("");
        setvideolink("");
        setnotes("");
        setpreptime("");
        setcooktime("");
        setsoakingtime("");
        setfermentationtime("");
        settotaltime("");
        setcourse("");
        setcuisine("");
        setservings("");
        setcalories("");
        setcarbohydrates("");
        setprotein("");
        setfat("");
        setsodium("");
        setpotassium("");
        setfiber("");
        setsugar("");
        setcalcium("");
        setiron("");
        setvitamina("");
        setvitaminc("");

        //then take to  receipe page
        history.push("/Receipes");

      }}>
        ADD NEW RECEIPE
      </Button>
      <br></br>
    </div>

  );
}
