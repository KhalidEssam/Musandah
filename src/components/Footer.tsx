import {  HStack, VStack } from "@chakra-ui/react"
// import { toaster } from "./ui/toaster" // your custom toaster.tsx
import { type FC } from "react"

export const Footer: FC = () => {
    // const SuccessToaster = () => {
    //     toaster.create({
    //         title: "Success",
    //         description: "You have successfully subscribed to our newsletter.",
    //         type: "success",   // ✅ new API uses "type", not "status"
    //         duration: 5000,
    //         closable: false,    // ✅ new API uses "closable", not "isClosable"
    //     })
    // }

    return (
        <VStack as="footer" minW={"100vw"} mt={"auto"} display={"flex"} justifyContent={"space-around"} >
            <HStack minW={"100vw"} mt={"auto"} display={"flex"} justifyContent={"space-around"} p={4}>
                dq
            </HStack>
            <HStack minW={"100vw"} mt={"auto"} display={"flex"} justifyContent={"space-around"} p={4}>
                ddddddd
            </HStack>
            <HStack bgColor={"#461417"}
                color={"white"} minW={"100vw"} mt={"auto"} display={"flex"} justifyContent={"space-around"} p={4}>
                © جميع الحقوق محفوظة لمركز المساندة القانونية
            </HStack>
        </VStack>
    )
}
