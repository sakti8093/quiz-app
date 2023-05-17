import { Box, Button, Text } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"

type props = {
    score:number,
    total : number
}
const ScoreCard:React.FC<props> = ({score,total}) => {

    const percentage = (score / total) * 100;
    const navigate = useNavigate();

  return (
    <Box p={4} textAlign='center'  rounded='3xl' color='white' bgColor={percentage>=50? "green" : "red.500"} >
        {percentage >= 50 ? <Text fontWeight='bold'  fontSize='2xl' >Congratulations !! 🥳</Text> :<Text fontWeight='bold'  fontSize='xl' >Better Luck Next Time !! 😣😣</Text>}
        <Text  >You Have Scored {percentage} % </Text>
        <Text fontWeight='bold'  fontSize='3xl' >{ score }</Text> 
        <Text> out of {total} </Text>
        <Button mt='30px' variant='unstyled' border='1px solid white'  margin='auto' padding='0 50px' onClick={()=>{navigate('/')}} >Home</Button>
    </Box>
  )
}

export default ScoreCard