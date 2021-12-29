import * as React from 'react';
import { Receipe } from "./Receipe";

export function ShowReceipe({ receipelist, setname, setpicturelink, setingredients, setreceipe, setvideolink, setnotes, setpreptime, setcooktime, setsoakingtime, setfermentationtime, settotaltime, setcourse, setcuisine, setservings, setcalories, setcarbohydrates, setprotein, setfat, setsodium, setpotassium, setfiber, setsugar, setcalcium, setiron, setvitamina, setvitaminc, setreceipelist, editindex, seteditindex, mode }) {
  return (
    <div className='content'>


      {
        //creating receipe card 
        receipelist.map(({ name, picturelink, ingredients, receipe, videolink, notes, preptime, cooktime, soakingtime, fermentationtime, totaltime, course, cuisine, servings, calories, carbohydrates, protein, fat, sodium, potassium, fiber, sugar, calcium, iron, vitamina, vitaminc }, index) => (



          <Receipe
            name={name} setname={setname}
            picturelink={picturelink} setpicturelink={setpicturelink}
            ingredients={ingredients} setingredients={setingredients}
            receipe={receipe} setreceipe={setreceipe}
            videolink={videolink} setvideolink={setvideolink}
            notes={notes} setnotes={setnotes}
            preptime={preptime} setpreptime={setpreptime}
            cooktime={cooktime} setcooktime={setcooktime}
            soakingtime={soakingtime} setsoakingtime={setsoakingtime}
            fermentationtime={fermentationtime} setfermentationtime={setfermentationtime}
            totaltime={totaltime} settotaltime={settotaltime}
            course={course} setcourse={setcourse}
            cuisine={cuisine} setcuisine={setcuisine}
            servings={servings} setservings={setservings}
            calories={calories} setcalories={setcalories}
            carbohydrates={carbohydrates} setcarbohydrates={setcarbohydrates}
            protein={protein} setprotein={setprotein}
            fat={fat} setfat={setfat}
            sodium={sodium} setsodium={setsodium}
            potassium={potassium} setpotassium={setpotassium}
            fiber={fiber} setfiber={setfiber}
            sugar={sugar} setsugar={setsugar}
            calcium={calcium} setcalcium={setcalcium}
            iron={iron} setiron={setiron}
            vitamina={vitamina} setvitamina={setvitamina}
            vitaminc={vitaminc} setvitaminc={setvitaminc}

            receipelist={receipelist}
            setreceipelist={setreceipelist}

            index={index}



            editindex={editindex} seteditindex={seteditindex}
            mode={mode} />

        ))}
    </div>
  );
}
