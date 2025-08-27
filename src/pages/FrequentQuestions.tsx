import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectLanguage, selectDirection } from "../store/slices/languageSlice"



export const FrequentQuestions = () => {
    const [faq, setFaq] = useState("")
    const Lang = useSelector(selectLanguage);
    const direction = useSelector(selectDirection);
    useEffect(() => {
        fetch(direction === 'rtl' ? `/docs/faq-ar.txt` : `/docs/faq.txt`)
            .then((res) => res.text())
            .then((data) => {
                setFaq(data)
            })
            .catch((err) => console.error("Error loading terms:", err));
    }, [Lang]);
    return (
        <Box color={"#4D7CB1"} p="2rem">
            <Text
                textAlign={direction === 'rtl' ? 'right' : 'left'}
                whiteSpace="pre-wrap" // preserves line breaks and spaces
                lineHeight="1.2"
                fontSize="lg"
            >{faq}</Text>
        </Box>
    )
}