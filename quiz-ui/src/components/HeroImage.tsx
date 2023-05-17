import { Box, Image } from "@chakra-ui/react"
import heroimage from '../assets/heroimage.jpeg'

const HeroImage = () => {
  return (
    <Box objectFit='cover' height={{base:'200px', md:"300px" }}>
        <Image src={heroimage} width='100%' height='100%' rounded='2xl' />
    </Box>
  )
}

export default HeroImage