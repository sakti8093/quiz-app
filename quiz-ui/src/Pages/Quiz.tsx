import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import data from "../Data/data"
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";

type questions = {
    question: string;
    options: string[];
    answer: number;
}

type storeState = {
    currentQuestion : number,
    showScoreboard : boolean,
    questions : questions[] | null,
    selected : number | null,
    score : number
}

const Quiz = () => {

    const { option } = useParams();

    const [store,setStore] = useState<storeState>({
        questions: null,
        currentQuestion : 0,
        showScoreboard : false,
        selected : null,
        score : 0,
    })

    const [timeLeft,setTimeLeft] = useState<number>(180)

    useEffect(()=>{
        if(option === 'react'){
            setStore({...store,questions:data.react})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    useEffect(() => {

        if(timeLeft === 0 ){
            setStore({...store,showScoreboard:true})
            return
        }
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [timeLeft]);

    const handleSelectedOption =(index:number)=>{
        setStore({...store,selected:index})
    }

    const handleChange = (e) => {
        console.log(e);
    }

    const handleNextQuest = ()=>{
        setStore((prev)=>{
            const updatedStore = {...prev};
            updatedStore.currentQuestion = prev.currentQuestion +1;
            if(prev.selected === prev.questions[prev.currentQuestion].answer){
                updatedStore.score = updatedStore.score + 2;
            }
            updatedStore.selected = null
            return updatedStore;
        })
    }

    const handleSubmit = ()=>{
        setStore({...store,showScoreboard:true})
    }

    if(store.showScoreboard){
        return <Box>
            <Text>Total Score</Text>
            <Text>{store.score}</Text>
        </Box>
    }

    if(!store.questions){
        return null
    }

  return (
    <Box height='100vh'>
        <Box display='flex' alignItems='center' justifyContent='space-between' >
            <Text>{store.currentQuestion+1} / {store.questions.length} </Text>
            <Text>{Math.floor(timeLeft/60)}:{timeLeft%60} m left </Text> 
        </Box>
        <Text>{ store.questions[store.currentQuestion].question }</Text>
        { store.questions[store.currentQuestion].options?.map((elem,index)=>(
            <Box key={index} p={4} display='block' mt='30px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' onChange={()=>handleSelectedOption(index)} >
                <Checkbox  value={index} isChecked={store.selected === index } >{elem}</Checkbox>
            </Box>
        )) }
        {store.currentQuestion === store.questions.length -1?<Button display='block' onClick={()=>handleSubmit()} margin='auto'  mt='50px'  padding='0 30px' colorScheme='green' color='white' >Submit</Button>:<Button display='block' onClick={()=>handleNextQuest()} margin='auto'  mt='50px'  padding='0 30px' colorScheme='purple' color='white' >Next</Button>}
    </Box> 
  )
}

export default Quiz