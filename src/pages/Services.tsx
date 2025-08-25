
import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box } from "@chakra-ui/react";
export const Services = ()=>{

    return (
    <>
      <ContactBanner
      bgPos="0% /27%"
        img="Services.jpg"
        title="تواصل معنا"
        subtitle=""
        description=""
      />
      <Box h="12.5rem"></Box>
      
    </>
    )
}