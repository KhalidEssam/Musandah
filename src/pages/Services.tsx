
import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box, VStack } from "@chakra-ui/react";
import { ServicesList } from "@/components/services_components/ServicesList";

export const Services = ()=>{

    return (
    <VStack gap={"5rem"} w={"100vw"}>
      <ContactBanner
      bgPos="0% /27%"
        img="Services.jpg"
        title="تواصل معنا"
        subtitle=""
        description=""
      />
      <Box h="12.5rem"></Box>
      

        <ServicesList />


    </VStack>
    )
}