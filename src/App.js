import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

import { Switch, Route, Link,Redirect, useHistory} from "react-router-dom";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { palette } from '@mui/system';


import { Welcome } from './Welcome';
import { NotExist } from './NotExist';
import { ShowReceipe } from './ShowReceipe';
import { EditReceipe } from './EditReceipe';
import { AddReceipe } from './AddReceipe';
import { ReceipeDetails } from './customIcons';

function App() {

  // We have data for receipes

  const [name,setname]=useState("");
  const [picturelink, setpicturelink] = useState("");
  const [ingredients,setingredients]=useState("");
  const [receipe,setreceipe]=useState("");
  const [videolink,setvideolink]=useState("");
  const [preptime,setpreptime]=useState("");
  const [cooktime,setcooktime]=useState("");
  const [soakingtime,setsoakingtime]=useState("");
  const [totaltime,settotaltime]=useState("");
  const [course,setcourse]=useState("");
  const [cuisine,setcuisine]=useState("");
  const [servings,setservings]=useState("");
  const [calories,setcalories]=useState("");
  const [carbohydrates,setcarbohydrates]=useState("");
  const [protein,setprotein]=useState("");
  const [fat,setfat]=useState("");
  const [sodium,setsodium]=useState("");
  const [potassium,setpotassium]=useState("");
  const [fiber,setfiber]=useState("");
  const [sugar,setsugar]=useState("");
  const [calcium,setcalcium]=useState("");
  const [iron,setiron]=useState("");
  const [vitamina,setvitamina]=useState("");
  const [vitaminc,setvitaminc]=useState("");
  const[notes,setnotes]=useState("");
  const [fermentationtime,setfermentationtime] = useState("")

  const [receipeobj,setreceipeobj]=useState("");

  
const [receipelist,setreceipelist]=useState([
  {
    name:"EGGLESS OATS OMLETTE",
    picturelink:"https://cookilicious.com/wp-content/uploads/2018/08/omelet-12-960x1440.jpg",
    ingredients:["1 cup oats (rolled)", "1/4 cup rava / semolina (coarse) ","1/4 cup besan" ,"1 tsp cumin" ,"1/4 tsp turmeric" ,"1/2 tomato (chopped)" , "1/2 carrot (chopped)", "1/2 onion (finely chopped)" ,"1/2 capsicum (chopped)" ,"1/2 cup curd" ,"1/2 tsp salt" ,"1/2 tsp chilli flakes" ,"1/2 cup water" ,"1/2 tsp eno fruit salt ","oil (for roasting)"],
    receipe:[
    "firstly, in a mixer jar take 1 cup oats and finely powder it." ,
    "make sure to use unflavoured quick or rolled oats.",
    "transfer the oats powder to a large bowl.",
    "add ¼ cup besan, 1 tsp cumin and 1/4th tsp turmeric.",
    "also add ½ tomato, ½ carrot, ½ onion, ½ capsicum, ¼ cup curd and ½ tsp salt.",
    "mix well combining everything well.further, add ½ tsp chilli flakes and ½ cup water.",
    "mix well forming a smooth batter.",
    "rest the batter for 5 minutes, or until the oats and rava are soaked well.",
    "now add water as required and form a smooth batter.",
    "just before making an omelette, add ½ tsp eno fruit salt and mix gently.",
    "mix until the batter turns frothy.",
    "immediately, heat 2 tsp oil in a pan and pour the prepared batter.",
    "swirl a little to spread uniformly.",
    "sprinkle chilli flakes, cover and cook for 2 minutesonce the base is cooked well, flip over and cook both sidesalso, slit in the centre and add oil, for roasting ½ tsp butter, few coriander for extra flavour.",
    "finally, oats omelette recipe tastes great when served hot and with lots of vegetables."
  ],
    videolink:"https://www.youtube.com/embed/QkkTH5U88Nk",
    notes:[
    "firstly, make sure to make the omelette slightly thick, else it will not be fluffy.",
    "also, instead of eno you can use baking soda.additionally, add vegetables of your choice to make it nutritious.",
    "finally, in this oats omelette recipe i have not used egg, hence besan and curd is a good replacement"
    ],
    preptime:"5 mins",
    cooktime:"5 mins",
    soakingtime:"5 mins",
    fermentationtime:"",
    totaltime:"15 mins",
    course:"Breakfast",
    cuisine:"Indian",
    servings:"5 servings",
    calories:"140",
    carbohydrates:"24",
    protein:"6",
    fat:"2",
    sodium:"249",
    potassium:"228",
    fiber:"4",
    sugar:"2",
    calcium:"40",
    iron:"2",
    vitamina:"1561",
    vitaminc:"18"
  },
  {
    name:"MASALA DOSA",
    picturelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQ3pPz1D5EppoJcKYOnLvE4UEHDwi-xc2FQ&usqp=CAU",
    ingredients:[
      "1 1/2 cup red rice",
      "1 1/2 cup raw rice",
      "1 tsp methi / fenugreek",
      "1 cup urad dal",
      "2 tbsp chana dal",
      "2 tbsp urad dal,1 cup poha / avalakki (thin)",
      "2 tbsp oil,1 tsp mustard",
      "1/2 tsp urad dal",
      "1/2 tsp chana dal",
      "pinch hing",
      "few curry leaves",
      "3 chilli (finely chopped)",
      "1 inch ginger (finely chopped)",
      "1 onion (sliced)",
      "1/4 tsp turmeric",
      "4 potato (boiled & mashed)",
      "1/2 tsp salt,3 tsp lemon juice",
      "2 tbsp coriander (finely chopped)" ],
    receipe:[
     " Frist we will prepare dosa batter for that firstly, in a large bowl take 1½ cup red rice, 1½ cup raw rice and 1 tsp methi.",
       "rinse well and soak the rice for 5 hours." ,
       "also soak 1 cup urad dal, 2 tbsp chana dal and 2 tbsp urad dal for 2 hours." ,
       "drain off the water from the dal and transfer it to the grinder.grind for 30 minutes, adding water as required." ,
       "make sure to have soft and fluffy urad dal batter." ,
       "transfer the urad dal batter to a large vessel and keep it aside." ,
       "in the same grinder, add soaked rice, 1 cup poha." ,
       "grind the rice to coarse batter adding water as required." ,
       "transfer the rice batter to the same bowl." , 
       "mix well, making sure everything is well combined." ,
       "cover and ferment the batter for 8 hours or until the batter is well fermented. " ,
       "if you are living in a cold climate then you can keep it in an instant pot (yoghurt mode) or in the oven (just heat the oven until it turns slightly warm and then turn off) to ferment." ,
       "after the batter has fermented well, mix gently adding salt as required."  ,
       "dosa batter is ready to make dosa." ,
       "Secondly we will prepare the aloo , for that firstly, in a large kadai heat 2 tbsp oil." ,
        "add 1 tsp mustard, ½ tsp urad dal, ½ tsp chana dal, pinch hing and few curry leave." ,
        "splutter the tempering on medium flame.also add 3 chilli, 1 inch ginger and saute slightly."  ,
        "further, add 1 onion and saute until the onions shrink without turning brown." ,
        "now add ¼ tsp turmeric and saute slightly." ,
        "further add 4 potato, ½ tsp salt and mix well." ,
        "mash the potato well until it turns smooth.add 3 tsp lemon juice and 2 tbsp coriander."  ,
        "mix well.aloo bhaji is ready to enjoy masala dosa." ,
        "thirdly use the prepared items in the following manner for that firstly, add a ladleful of batter on hot tawa." , 
        "spread slightly thick to make bangalore style dosa." ,
        "spread some oil and butter uniformly." ,
        "also, place 2 tbsp of prepared aloo masala in the centre.roast until the dosa turns golden brown and crisp.",
        "scrape the sides of the dosa and fold half." ,
        "finally, bangalore hotel style masala dosa recipe is ready to serve with coconut chutney." ],
    videolink:"https://www.youtube.com/embed/0JF8RfBSFRk",
    notes:[
      "firstly, adding red rice helps to get dark golden brown colour.",
      "also, to make extra crispy dosa, you can add rice flour to the fermented batter.",
      "additionally, roasting the dosa with oil and butter helps to get a crispy texture.",
      "finally, bangalore hotel style masala dosa recipe tastes great when prepared slightly thick and crispy."
    ],
    preptime:"10 mins",
    cooktime:"50 mins",
    soakingtime:"",
    fermentationtime:"8hrs",
    totaltime:"9 hrs",
    course:"dosa",
    cuisine:"south indian",
    servings:"4 litre",
    calories:"",
    carbohydrates:"",
    protein:"",
    fat:"",
    sodium:"",
    potassium:"",
    fiber:"",
    sugar:"",
    calcium:"",
    iron:"",
    vitamina:"",
    vitaminc:""
  },
  {
    name:"HIGN PROTEIN SALAD",
    picturelink:"https://media1.popsugar-assets.com/files/thumbor/-9pgtx7th1WY_FfIjSv6AIxEyxk/0x744:1440x2184/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/16/916/n/1922729/72b5e5cd5cddcf51b5ccb0.16218706_/i/High-Protein-Salad-Recipes.jpg",
    ingredients:[
      "1/2 cup olive oil",
      "2 tbsp lemon juice",
      "1/2 tsp mixed herbs",
      "1/2 tsp pepper (crushed)",
      "1/2 tsp garlic paste",
       "1/2 tsp salt,2 cup chana / chickpea (boiled)",
       "1/2 onion (sliced)",
       "1/2 cucumber (sliced)",
       "5 cherry tomato (halves)",
       "1/2 capsicum (sliced)",
       "2 chilli (chopped)",
       "handful salad leaves",
       "handful lettuce",
       "handful moong beans sprouts",
       "2 cup moong sprouts",
      " 1/2 onion (sliced)",
       "1/2 cucumber (sliced)",
      " 5 cherry tomato (halves)",
      " 1/2 capsicum (sliced)",
       "2 chilli (chopped)",
       "2 tsp olive oil",
       "1 cup tofu",
       "1/2 tsp pepper (crushed)",
       "1/2 tsp salt" ],
    receipe:[ 
     " to make homemade salad dressing:firstly, in a bowl take ½ cup olive oil, 2 tbsp lemon juice, ½ tsp mixed herbs, ½ tsp pepper, ½ tsp garlic paste and ½ tsp salt." ,
      "mix well making sure everything is well combined.salad dressing is ready. ",
      "keep aside",
       " to roast tofu:firstly, in a pan heat 2 tsp olive oil and add 1 cup tofu/roast on low flame until the tofu turns crisp.",
        "now add ¼ tsp pepper and ¼ tsp salt.mix well making sure the spices are coated well. ",
        "crispy tofu is ready.",
        "to make chana salad for healthy weight loss:firstly, in a bowl take 2 cup chana.",
         "make sure to soak and boil the chickpeas.",
         "add ½ onion, ½ cucumber, 5 cherry tomato, ½ capsicum and 2 chilli.also, add 1 tbsp prepared salad dressing.",
        " mix well making sure everything is well combined.",
         "now add handful salad leaves, handful lettuce and handful moong beans sprouts.",
         "mix well combining everything well.",
         "finally, top with crispy tofu and enjoy chana salad with salad dressing as required.",
         "to make moong sprouts salad for healthy weight loss:firstly, in a bowl take 2 cup moong sprouts.",
         "add ½ onion, ½ cucumber, 5 cherry tomato, ½ capsicum and 2 chilli.",
         "also, add 1 tbsp prepared salad dressing.",
         "mix well making sure everything is well combined.",
         "now add handful salad leaves, handful lettuce and handful moong beans sprouts.",
         "mix well combining everything well.",
         "finally, top with crispy tofu and enjoy moong sprouts salad with salad dressing as required."
    ],
    videolink:"https://www.youtube.com/embed/MonVmZkFI0E",
    notes:[],
    preptime:"10 mins",
    cooktime:"10 mins",
    soakingtime:"",
    fermentationtime:"",
    totaltime:"20 mins",
    course:"Salad",
    cuisine:"International",
    servings:"5 servings",
    calories:"649",
    carbohydrates:"749",
    protein:"22",
    fat:"32",
    sodium:"455",
    potassium:"697",
    fiber:"13",
    sugar:"16",
    calcium:"180",
    iron:"7",
    vitamina:"1648",
    vitaminc:"131"
  },
  {
    name:"PANEER BRIYANI",
    picturelink:"https://img-global.cpcdn.com/recipes/fc94a007b8b618e3/1360x964cq70/paneer-biryani-without-garlic-onion-recipe-main-photo.webp",
    ingredients:[
      "1 cup curd / yogurt (thick)" ,
          "1 tsp ginger garlic paste" ,
         " ¼ tsp turmeric" ,
          "¾ tsp kashmiri red chilli powder" ,
         " 2 tbsp biryani masala" ,
          "2 tbsp coriander (finely chopped)" ,
          "2 tbsp mint / pudina (chopped)" ,
          "1 tsp oil" ,
          "1 tbsp lemon juice ",
          "1 tsp salt" ,
          "15 cubes paneer/ cottage cheese" , 
          "½ onion (petals)" ,
         " ½ capsicum (cubed)" ,
          "6 cup water" ,
          "2 pods cardamom" ,
          "4 cloves" ,
          "1 inch cinnamon" ,
          "2 bay leaf / tej patta" ,
          "1 tsp pepper" ,
          "1 tsp salt" ,
          "2 tsp oil" ,
         " 1 chilli (slit)" ,
          "1 cup basmati rice (soaked 20 minutes)" ,
         " 2 tbsp oil" ,
          "1 tsp ghee / clarified butter" , 
        "  2 bay leaf / tej patta" ,
         " 1 star anise" ,
          "1 pod black cardamom" ,
          "1 mace / javitri" ,
          "2 pods cardamom" ,
          "1 tsp shah jeera" ,
          "½ onion (sliced)" ,
          "1 tomato (finely chopped)" ,
          "2 tbsp coriander (chopped)" ,
         " 2 tbsp mint / pudina (chopped)" ,
          "2 tbsp fried onion" ,
          "pinch biryani masala" ,
          "2 tbsp saffron milk" ,
          "1 tsp ghee / clarified butter" ,
         " ¼ cup water" 
    ],
    receipe:[
      " for marination paneer:firstly, in a large bowl take 1 cup curd, 1 tsp ginger garlic paste, ¼ tsp turmeric, ¾ tsp chilli powder and 2 tbsp biryani masala.",
        "also add 2 tbsp coriander, 2 tbsp mint, 1 tsp oil, 1 tbsp lemon juice and 1 tsp salt." ,
        "whisk and combine well making sure the spices are well combined." ,
        "further add 15 cubes paneer, ½ onion and ½ capsicum." ,
       " mix gently making sure everything is combined well." ,
        "cover and marinate for 30 minutes." ,
        "for biryani rice preparation:firstly, in a large vessel take 6 cup water." ,
        "add spices like 2 pods cardamom, 4 cloves, 1 inch cinnamon, 2 bay leaf, ½ tsp pepper." ,
       " also add 1 tsp salt, 2 tsp oil and 1 chilli." ,
        "boil for 2 minutes or until flavours is in the water." ,
        "add in 1 cup basmati rice and stir well. make sure to soak rice for at least 20 minutes." ,
        "boil for 3 minutes or until rice is half cooked. do not cook fully." ,
        "drain off the rice and keep aside." ,
        "for paneer biryani preparation:firstly, in a large kadai heat 2 tbsp oil and 1 tsp ghee." ,
       " saute 2 bay leaf, 1 star anise, 1 pod black cardamom, 1 mace, 2 pods cardamom and 1 tsp shah jeera." ,
        "add ½ onion and saute until it turns golden brown." ,
        "also add 1 tomato and saute until it turns soft and mushy." ,
        "add in marinated paneer and saute well." ,
       " saute until the oil separates from sides. do not overcook as paneer turns rubbery." ,
        "further spread prepared rice uniformly." ,
        "also top with 2 tbsp coriander, 2 tbsp mint and 2 tbsp fried onion." ,
        "further sprinkle pinch biryani masala, 2 tbsp saffron milk, 1 tsp ghee and ¼ cup water." ,
        "cover with aluminium foil and close the lid. you can also use the dough to seal." ,
        "simmer for 20 minutes or until rice is cooked fully." ,
        "finally, enjoy paneer biryani with raita and slices of onion. "
    ],
    videolink:"https://www.youtube.com/embed/ncqmk7RhIr4",
    notes:[
      "firstly, marinating paneer helps to get soft and moist panner." , 
      "also, add vegetables of your choice to make it nutritious." , 
      "additionally, you can pressure cook for 2 whistles if you are using raw basmati rice." , 
     " finally, paneer biryani recipe tastes great when prepared with fresh homemade paneer."
    ],
    preptime:"30 mins",
    cooktime:"30 mins",
    soakingtime:"",
    fermentationtime:"",
    totaltime:"",
    course:"briyani",
    cuisine:"south indian",
    servings:"3 servings",
    calories:"",
    carbohydrates:"",
    protein:"",
    fat:"",
    sodium:"",
    potassium:"",
    fiber:"",
    sugar:"",
    calcium:"",
    iron:"",
    vitamina:"",
    vitaminc:""
  },
  {
    name:"OREO CHOCOLATE CAKE",
    picturelink:"https://i.pinimg.com/originals/27/d7/08/27d708652ba754c74fd323130f336b13.jpg",
    ingredients:[
      "300 grams oreo biscuit" ,
        "1¼ cup milk" ,
        "½ tsp eno fruit salt" ,
        "200 grams dark chocolate chips" ,
        "1 cup cream (hot)"
    ],
    receipe:[
     "to prepare oreo cake in a steamer:firstly, take 300 grams oreo biscuit in the mixi and blend to a fine powder. you can use any cream biscuit of your choice." ,
    "transfer the powdered biscuit into a large bowl." ,
    "add 1 cup milk and mix using the whisk." ,
    "mix until a smooth lump-free batter is formed adding milk if required." ,
   " just before steaming, add ½ tsp eno fruit salt and mix gently adding 2 tbsp of milk. you can alternatively use ¼ tsp baking soda or ½ tsp baking powder." ,
    "pour the batter into a bowl. make sure to grease the bowl and line with parchment paper." ,
    "place the bowl into steamer and steam for 45 minutes." ,
    "steam until the toothpick inserted comes out clean. make sure to keep an eye, as water in steamer may reduce." ,
    "unmould the cake and cool completely." ,
    "to make the chocolate glaze:firstly, in a glass bowl take 200 grams of dark chocolate chips. you can alternatively use chopped chocolate here." ,
    "pour in 100 grams of hot whipping cream." ,
    "stir and melt the chocolate chips completely. you can microwave or use double boiler method if your chocolate is not melting completely." ,
    "silky shiny chocolate mirror glaze is ready to decorate. make sure the glaze is not too hot." ,
    "pour the glaze immediately over the cake." ,
    "finally, eggless oreo chocolate cake ready to enjoy decorated with strawberry. "
    ],
    videolink:"https://www.youtube.com/embed/OFxgJ85GDRw",
    notes:[
      "firstly, make sure to powder the biscuit finely. else there will be lumps in the batter." ,
      "also, decorating the cake with chocolate glaze is optional. you can immediately serve after steaming." ,
      "additionally, add evaporated milk in place of milk for a richer flavour. ",
     " finally, eggless oreo chocolate recipe can also be baked in the oven at 180-degree celcius for 45 minutes"
          ],
    preptime:"10mins",
    cooktime:"545mins",
    soakingtime:"",
    fermentationtime:"",
    totaltime:"55mins",
    course:"Cake",
    cuisine:"International",
    servings:"1 Cake",
    calories:"3494",
    carbohydrates:"346",
    protein:"48",
    fat:"220",
    sodium:"1816",
    potassium:"2492",
    fiber:"16",
    sugar:"207",
    calcium:"1171",
    iron:"29",
    vitamina:"4019",
    vitaminc:"2"
  },
  // {
  //   name:"",
  //   picturelink:"",
  //   ingredients:[],
  //   receipe:[],
  //   videolink:"",
  //   notes:[],
  //   preptime:"",
  //   cooktime:"",
  //   soakingtime:"",
  //   fermentationtime:"",
  //   totaltime:"",
  //   course:"",
  //   cuisine:"",
  //   servings:"",
  //   calories:"",
  //   carbohydrates:"",
  //   protein:"",
  //   fat:"",
  //   sodium:"",
  //   potassium:"",
  //   fiber:"",
  //   sugar:"",
  //   calcium:"",
  //   iron:"",
  //   vitamina:"",
  //   vitaminc:""
  // },
])

const history = useHistory("");

//theme for whole webpage
const [mode, setMode] = React.useState('dark');
const theme = React.useMemo(
  () =>
    createTheme({
      palette: {
        mode,
      },
    }),
  [mode],
);


const [editindex,seteditindex] = useState("")

const appbarstyle = mode==="dark"?{background:"#202020"}:{background:"#425669"}
const paperstyle = mode==="dark"?{background:"#383838"}:{background:"#F8F8F8"}

  return (
    <div className="App">
    
    <ThemeProvider theme={theme}>
      <Paper sx={{minHeight:"400vh" , borderRadius:"0px"}} elevation={3} style={paperstyle} >
        <div>
        {/* Creating a appbar  */}
       <AppBar position="static" style={appbarstyle}>
            <Toolbar>
              <Button color="inherit" onClick={()=>{history.push("/Welcome")}}>Welcome</Button>
              <Button color="inherit" onClick={()=>{history.push("/Receipes")}}>All receipes</Button>
              <Button color="inherit" onClick={()=>{history.push("/AddReceipes")}}>Add receipes</Button>
              {/* when button clicked theme should change */}
              <Button style={{color:"white"}} onClick={()=>{
                console.log(theme.palette.mode)
               setMode(mode==="dark"?"light":"dark")
              }}>{mode==="dark"?<Brightness7Icon/>:<Brightness4Icon/>}mode</Button>
            </Toolbar>
        </AppBar>
       </div>

       <Switch>
         {/* Each route is case */}
         <Route path="/Welcome">
           <Welcome/>
         </Route>

         <Route path="/Receipes">
           
         <ShowReceipe receipelist={receipelist}
                setname={setname}
                setpicturelink={setpicturelink}
                setingredients={setingredients}
                setreceipe={setreceipe}
                setvideolink={setvideolink}
                setnotes={setnotes}
                setpreptime={setpreptime}
                setcooktime={setcooktime}
                setsoakingtime={setsoakingtime}
                setfermentationtime={setfermentationtime}
                settotaltime={settotaltime}
                setcourse={setcourse}
                setcuisine={setcuisine}
                setservings={setservings}
                setcalories={setcalories}
                setcarbohydrates={setcarbohydrates}
                setprotein={setprotein}
                setfat={setfat}
                setsodium={setsodium}
                setpotassium={setpotassium}
                setfiber={setfiber}
                setsugar={setsugar}
                setcalcium={setcalcium}
                setiron={setiron}
                setvitamina={setvitamina}
                setvitaminc={setvitaminc}
                setreceipelist={setreceipelist}
                
                editindex={editindex}
                seteditindex={seteditindex}
                mode={mode}
                />
         </Route>

         <Route path="/AddReceipes">
           
         <AddReceipe 
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
                      receipelist={receipelist} setreceipelist={setreceipelist}

                      />
         </Route>

         <Route  path="/editreceipe">
         <EditReceipe 
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
                      receipelist={receipelist} setreceipelist={setreceipelist}

                      
                      editindex={editindex} seteditindex={seteditindex}
                      />
         </Route>

         <Route path="/receipe/:id">
           <ReceipeDetails receipelist={receipelist} mode={mode}/>
         </Route>
        
         <Route exact path="/">
              
         <ShowReceipe receipelist={receipelist}
                setname={setname}
                setpicturelink={setpicturelink}
                setingredients={setingredients}
                setreceipe={setreceipe}
                setvideolink={setvideolink}
                setnotes={setnotes}
                setpreptime={setpreptime}
                setcooktime={setcooktime}
                setsoakingtime={setsoakingtime}
                setfermentationtime={setfermentationtime}
                settotaltime={settotaltime}
                setcourse={setcourse}
                setcuisine={setcuisine}
                setservings={setservings}
                setcalories={setcalories}
                setcarbohydrates={setcarbohydrates}
                setprotein={setprotein}
                setfat={setfat}
                setsodium={setsodium}
                setpotassium={setpotassium}
                setfiber={setfiber}
                setsugar={setsugar}
                setcalcium={setcalcium}
                setiron={setiron}
                setvitamina={setvitamina}
                setvitaminc={setvitaminc}
                setreceipelist={setreceipelist}
                
                editindex={editindex}
                seteditindex={seteditindex}
                mode={mode}
                />
         
         </Route>
         
         {/* For broken or links that does not exist */}
         <Route path="**">
           <NotExist/>
         </Route>
       </Switch>
  
        </Paper>
    </ThemeProvider>
   
    </div>
  );
}

export default App;


