import { Link, Tabs, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/slices/languageSlice";
import { selectDirection } from "../store/slices/languageSlice";

export const TermsandConditions = () => {
  const links: { en: string; ar: string; path: string }[] = [
    { en: "Terms and Conditions", ar: "الشروط والأحكام", path: "/Terms" },
    {
      en: "Subscription Terms and Conditions  Platform",
      ar: "شروط الاشتراك والأحكام للمنصة",
      path: "/Sub-Terms",
    },
  ];
  const [terms, setTerms] = useState<string>("");
  const [activeTab, setActiveTab] = useState(links[0]);

  const Lang = useSelector(selectLanguage);
  const direction = useSelector(selectDirection);

  useEffect(() => {
    fetch(
      direction === "rtl"
        ? `/docs/${activeTab.path}-ar.txt`
        : `/docs/${activeTab.path}.txt`
    )
      .then((res) => res.text())
      .then((data) => {
        setTerms(data);
      })
      .catch((err) => console.error("Error loading terms:", err));
  }, [activeTab, Lang]);

  const handleTabChange = (tab: string) => {
    const selectedLink = links.find((link) => link.en === tab);
    if (selectedLink) {
      setActiveTab(selectedLink);
    }
  };

  return (
    <VStack>
         <VStack w={"100%"} align={"start"}>
        <Text
          fontSize={{ base: "1.25rem", md: "1.75rem" }}
          fontWeight={"bold"}
          color={"rgba(46, 54, 81, 1)"}
          textAlign={"center"}
        >
        {activeTab.ar}
                   <svg viewBox="0 0 313 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.92189 8.42719C53.6029 2.24069 187.735 -4.79189 310.815 16.5698" stroke="#981C20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </Text>
      </VStack>
      <Text color={"rgba(95, 97, 102, 1)"} fontWeight={400} fontSize={{ base: "1rem", lg: "1.25rem" }}>
        تُعد هذه الوثيقة اتفاقية قانونية ملزمة بين المستخدم (سواء كان فردًا أو جهة اعتبارية) ومنصة "مركز المساندة القانوني"، وتحدد الشروط التي تحكم استخدام المنصة، سواء كان ذلك من خلال التصفح أو التسجيل أو الاشتراك في الخدمات. ويُعد الدخول إلى المنصة أو استخدامها بأي شكل من الأشكال موافقة صريحة من المستخدم على الالتزام الكامل بالشروط والأحكام المذكورة. وفي حال عدم الموافقة على أي من بنود هذه الاتفاقية، يتوجب على المستخدم التوقف الفوري عن استخدام المنصة.
      </Text>

      <Tabs.Root
        defaultValue={links[0].en}
        textAlign={"center"}
        mx={"auto"}
        mt={"2rem"}
        maxW={"90%"}
        dir={direction}
      >
        <Tabs.List
          className="tabs-list"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={direction === "rtl" ? "flex-end" : "flex-start"}
          alignItems={{
            base: direction === "ltr" ? "flex-start" : "flex-end",
            md: "flex-start",
          }}
          gap={{ base: "1rem", md: "2rem" }}
          p="0.5rem"
        >
          {links.map((link, index) => (
            <Tabs.Trigger
              value={link.en}
              asChild
              onClick={() => handleTabChange(link.en)}
              key={index}
              borderBottom={activeTab === link ? "4px solid #4d7cb1" : "none"}
            >
              <Link
                href={`#${link}`}
                _hover={{
                  color: useColorModeValue("#4d7cb1", "gray.400"),
                }}
                fontSize="1.1rem"
                fontWeight="700"
                onClick={() => setActiveTab(link)}
                color={
                  activeTab === link
                    ? useColorModeValue("#4d7cb1", "gray.400")
                    : useColorModeValue("black", "gray.400")
                }
              >
                {Lang === "ar" ? link.ar : link.en}
              </Link>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {links.map((link, index) => (
          <Tabs.Content
            p={{ base: "1rem", md: "2rem" }}
            value={link.en}
            key={index}
            color={useColorModeValue("black", "gray.400")}
            display="flex"
            flexDirection="row"
            alignItems="stretch"
            flexWrap="wrap"
            justifyContent="center"
            dir={direction}
          >
            <Text
              fontWeight={"bold"}
              textAlign={direction === "rtl" ? "right" : "left"}
              whiteSpace="pre-wrap" // preserves line breaks and spaces
              lineHeight="1.8"
              fontSize="1.1rem"
              paddingInlineStart={{ base: "1rem", md: "3rem", lg: "5rem" }}
              paddingInlineEnd={{ base: "1rem", md: "3rem", lg: "5rem" }}
            >
              {terms}
            </Text>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </VStack>
  );
};
