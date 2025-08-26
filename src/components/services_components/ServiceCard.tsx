import { VStack, Image, HStack, Circle, Text, Box } from "@chakra-ui/react";
import { type PlanProbs } from "../../types/types";
import { useState } from "react";
type ServiceCardProps = {
  plan: PlanProbs;
};
import { useNavigate } from "react-router-dom";

export const ServiceCard = ({ plan }: ServiceCardProps) => {
    const [isTouched, setIsTouched] = useState(false);
const navigate = useNavigate();

  return (
    <VStack
      role="group" // 👈 allows child to react to hover
      gap="2rem"
      flex={1}
      w={{ base: "90%", md: "40%", lg: "30%" }}
      align="center"
      justifyContent="space-between"
      border="1px solid #ddd"
      p="1rem"
      borderRadius="xl"
      bg="rgba(255,255,255,0.1)"
      position="relative" // 👈 needed for absolute child
      overflow="hidden"
    >
      {/* Overlay - now starts invisible but present in DOM */}
      <VStack
        w="100%" 
        h="100%" 
        position="absolute"
        top={0}          // 👈 explicit positioning
        left={0}         // 👈 explicit positioning
        backdropFilter={ isTouched ? "blur(3px)" : "blur(0px)"}
        backgroundColor={ isTouched ? "rgba(90, 119, 187, 0.5)" : "transparent"}
        opacity={isTouched ? 1 : 0}      // 👈 use opacity instead of display
        _hover={{
          opacity: 1,    // 👈 fade in on hover
          boxShadow: "0px 0.5rem 1rem rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          transform: "scale(1.05)",
          backdropFilter: "blur(3px)", 
          backgroundColor: "rgba(90, 119, 187, 0.5)", 
        }}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
        align="center"
        justify="center"
        borderRadius="xl"
        zIndex={2}
        transition="all 0.3s ease" // 👈 smooth transition
      >
        <Box as="button" bgColor="rgba(90, 119, 187, 1)" 
        onClick={() =>navigate(`/services/${plan.ref}`)}
        borderRadius={"2rem"} color="white" fontSize="lg" fontWeight="bold">
التفاصيل والاشتراك 
       </Box>
      </VStack>

      <Image src={plan.Image} alt={plan.title.en} w="6rem" h="8.5rem" />
      <Text>{plan.title.ar}</Text>

      <VStack align="start">
        <VStack align="start">
          {plan.description.map((description, index) => (
            <HStack key={index}>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
              <Text fontWeight={300}>{description.ar}</Text>
            </HStack>
          ))}
        </VStack>

        <VStack align="start">
          {plan.features.map((feature, index) => (
            <HStack key={index}>
              <Image w="1rem" src="servicescale.png" alt="servicescale" />
              <Text fontWeight={300}>{feature.ar}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>

      <HStack align="center" fontSize="2rem">
        <Text fontSize="2rem" color="rgba(152, 28, 32, 1)">
          {plan.price?.ar}{" "}
        </Text>{" "}
        ر.س / سنة
      </HStack>
    </VStack>
  );
};