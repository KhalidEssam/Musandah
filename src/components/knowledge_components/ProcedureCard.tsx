import { VStack,Text, Box } from "@chakra-ui/react"
import type { procedureProbs } from "@/types/types"

export const ProcedureCard = ( {procedure} : { procedure: procedureProbs } ) => {

    return (
        <VStack justifyContent={"space-between"} borderRadius={"2xl"} p={"2rem"} gap={"3rem"} bgColor={procedure.bgColor} width={{base:"80%",md:"30%",lg:"23%"}}>
            <VStack gap={"1rem"}>
            <Text color={"rgba(46, 54, 81, 1)"}>{procedure.title.ar}</Text>
            <Text color={"rgba(95, 97, 102, 1)"}>{procedure.subtitle?.ar}</Text>
            </VStack>


            <Box borderRadius={"2xl"} p={"0.5rem"} color={"white"} w={"80%"} bgColor={"rgba(90, 119, 187, 1)"}>
                اعرف الخطوات
            </Box>

        </VStack>
    )
}