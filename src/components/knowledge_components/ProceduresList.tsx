import { HStack } from "@chakra-ui/react"
import {ProcedureCard} from "./ProcedureCard"
import type { procedureProbs } from "@/types/types"

export const ProceduresList = ( { procedures } : { procedures: procedureProbs[] }) => {

    return (
        <HStack  justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }} align={{base:"center",md:"stretch"}}>
            {procedures.map((procedure: procedureProbs) => (
                <ProcedureCard key={procedure.id} procedure={procedure} />
            ))}
        </HStack>
    )

    
}