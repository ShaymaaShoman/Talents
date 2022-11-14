
import React from 'react'
import {Box1,HedingVerif,ParVerif,Wrapp,Verify,VeriRed} from './BoxStyle.js'

const characters = [
  
    {
      id: 2,
      name: "",
      alterEgo: "",
      verif:"(not verified)",
    },
    {
      id: 3,
      name: "",
      alterEgo: " ",
   
    },
    {
      id: 4,
      name: " ",
      alterEgo: " ",
      
    }
  ];


const CardList = props => {
    return (
        <Box1>
        <HedingVerif>{props.character.name}</HedingVerif>
        <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>{props.character.alterEgo}<VeriRed>{props.character.verif}</VeriRed></spanVerif>
           <Verify>
              Verifiy
              </Verify>
              </Wrapp>
            </Box1>
     
    );
  };
  const Boxses=()=> {
    return (
     
      <ul style={{ listStyleType: "none" }}>
      {characters.map(character => {
        return <CardList character={character} key={character.id} />;
      })}
    </ul>
  
    )
  }
 
export default Boxses;
// 