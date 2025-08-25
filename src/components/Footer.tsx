import { selectLanguage } from "@/store/slices/languageSlice";
import {
  Group,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
// import { toaster } from "./ui/toaster" // your custom toaster.tsx
import { Image, Box, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { type FC } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "@/store/slices/navSlice";
import type { RootState } from "@/store";

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
  const lang = useSelector(selectLanguage);
  const { links } = useSelector((state: RootState) => state.nav);
  const dispatch = useDispatch();

  return (
    <VStack
      as="footer"
      minW={"100vw"}
      mt={"auto"}
      display={"flex"}
      justifyContent={"space-around"}
    >
      <HStack
        minW={"100vw"}
        mt={"auto"}
        display={"flex"}
        bgColor={"#5A77BB"}
        justifyContent={{ base: "center", lg: "space-around" }}
        p={6}
        flexDir={{base:"column" , md:"row"}}
      >
        <VStack color={"white"} textAlign={"start"} align={"start"} p={6}
       >
          <Text fontSize={"1.75rem"} fontWeight={"600"}>
            {lang === "en" ? "More news" : " المزيد من الأخبار"}
          </Text>
          <Text fontSize={"1.1rem"} fontWeight={"400"}>
            {lang === "en"
              ? "Be the first who knows the latest news, org updates, and exclusive offers from our platform"
              : "كن أول من يعرف آخر الأخبار القانونية، التحديثات التنظيمية، والعروض الحصرية من منصتنا"}
          </Text>
        </VStack>
        <Group attached w="full" maxW="xl" minH={"15rem"} >
          <Input minH={"90px"} border={"none"} fontSize={"1.2rem"} borderRadius={"2xl"} bgColor={"rgba(255, 255, 255, 0.1)"} flex="1" placeholder="ادخل بريدك الالكتروني" />
          <Box as="button" p={6} borderRadius={"2xl"} minH={"90px"} bg="white" color={"rgba(90, 119, 187, 1)"} boxShadow={"0px 10px 10px 0px rgba(16, 137, 255, 0.1)"}>
            {lang ==="en" ? "Subscribe":"اشترك"}
          </Box>
        </Group>
      </HStack>
      <HStack
        minW="100vw"
        mt="auto"
        display="flex"
        justifyContent="space-around"
        alignItems={{ base: "center", lg: "flex-start" }}
        p={4}
        flexDir={{ base: "column", md: "row" }} // 🔹 Stack vertically on mobile
        gap={{ base: 8, md: 0 }} // 🔹 Add spacing on mobile
      >
        {/* Logo Section */}
        <VStack maxW={{ base: "100%", md: "25vw" }}>
          <ChakraLink href="/">
            <Image
              src={lang === "en" ? `/logo-en.png` : `/logo-ar.png`}
              alt="Logo"
              width={{ base: "4rem", md: "6rem", lg: "8rem" }}
            />
          </ChakraLink>
          <Text>{lang === "en" ? '" We protect you "' : '" نحميك "'}</Text>
        </VStack>

        {/* Links + Info + Social */}
        <HStack
          minW={{ base: "100%", md: "50vw" }}
          justifyContent="space-between"
          alignItems={{base:"center", md:"flex-start"}}
          flexDir={{ base: "column", md: "row" }} // 🔹 Vertical on small screens
          gap={{ base: 6, md: 0 }}
        >
          {/* Links */}
          <VStack align={{base:"center", md:"flex-start"}}>
            <Text fontSize="1rem" fontWeight="600" pb={4} textAlign="start">
              {lang === "ar" ? "روابط سريعة" : "Links"}
            </Text>
            {links?.map((link) => (
              <Box key={link.href}>
                <RouterLink
                  to={link.href}
                  onClick={() => dispatch(setActiveLink(link.href))}
                >
                  <Text
                    textAlign="start"
                    width="100%"
                    fontSize={{ base: "1rem", md: "1rem" }}
                    fontWeight={400}
                    _hover={{
                      color: useColorModeValue("#4d7cb1", "gray.100"),
                      textDecoration: "underline",
                    }}
                    color={useColorModeValue("black", "gray.400")}
                    m={2}
                  >
                    {lang === "en" ? link.en : link.ar}
                  </Text>
                </RouterLink>
              </Box>
            ))}
          </VStack>

          {/* Info */}
          <VStack align={{base:"center", md:"flex-start"}}>
            <Text fontSize="1rem" fontWeight="600" pb={4} textAlign="start">
              {lang === "ar" ? "المعلومات" : "Info"}
            </Text>
            <ChakraLink href="/terms-and-conditions">
              <Text
                display="flex"
                alignItems="center"
                gap="0.5rem"
                fontSize="0.9rem"
                fontWeight="400"
                color="black"
                textAlign="start"
              >
                {lang === "ar" ? "الشروط و الاحكام" : "Terms and Conditions"}
              </Text>
            </ChakraLink>
            <ChakraLink href="/privacy-policy">
              <Text
                display="flex"
                alignItems="center"
                gap="0.5rem"
                fontSize="0.9rem"
                fontWeight="400"
                color="black"
                textAlign="start"
              >
                {lang === "ar" ? "سياسة الخصوصية" : "Privacy policy"}
              </Text>
            </ChakraLink>
          </VStack>

          {/* Social */}
          <VStack align={{base:"center", md:"flex-start"}}>
            <Text fontSize="1rem" fontWeight="600" pb={4} textAlign="start">
              {lang === "ar" ? "تابعنا" : "Follow us"}
            </Text>
            <HStack>
              <FaFacebookF />
              <Text fontSize="1rem" fontWeight="400">
                mosanda qanonia
              </Text>
            </HStack>
            <HStack>
              <FaInstagram />
              <Text fontSize="1rem" fontWeight="400">
                mosanda_qanonia
              </Text>
            </HStack>
            <HStack>
              <FaXTwitter />
              <Text fontSize="1rem" fontWeight="400">
                mosanda_qanonia
              </Text>
            </HStack>
            <HStack>
              <FaLinkedinIn />
              <Text fontSize="1rem" fontWeight="400">
                mosanda qanonia
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </HStack>

      <HStack
        bgColor={"#461417"}
        color={"white"}
        minW={"100vw"}
        mt={"auto"}
        display={"flex"}
        justifyContent={"space-around"}
        p={4}
      >
        © جميع الحقوق محفوظة لمركز المساندة القانونية
      </HStack>
    </VStack>
  );
};
