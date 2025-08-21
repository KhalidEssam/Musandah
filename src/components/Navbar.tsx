import { Box, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "../store/slices/navSlice";
import { Link as RouterLink } from "react-router-dom";
import type { RootState } from "@/store";
import { selectLanguage } from "../store/slices/languageSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { activeLink, links } = useSelector((state: RootState) => state.nav);
  const lang = useSelector(selectLanguage);


  return (
    <Stack direction="column" >
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "1rem", md: "2rem", xl: "3.5rem" }}
        bg={useColorModeValue("white", "gray.100")}
      >
        {links.map((link) => {
          return (
            <RouterLink key={link.href} to={link.href}>
              <Box
                onClick={() => dispatch(setActiveLink(link.href))}
                fontSize="1.125rem"
                lineHeight={"100%"}
                fontWeight="500"
                bg={useColorModeValue("white", "gray.400")}
                color={
                  activeLink === link.href
                    ? useColorModeValue("#4d7cb1", "gray.100")
                    : useColorModeValue("#2c3e50", "gray.400")
                }
                _hover={{ color: useColorModeValue("#4d7cb1", "gray.100") }}
                _active={{ color: useColorModeValue("#4d7cb1", "gray.100") }}
              // variant="plain"
              >
                {lang === "en" ? link.en : link.ar}
              </Box>
            </RouterLink>
          );
        })}
      </Stack>
    </Stack>
  );
};
