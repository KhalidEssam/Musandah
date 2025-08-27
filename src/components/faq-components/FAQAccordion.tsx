import { Accordion, For, Span, Stack } from "@chakra-ui/react";
import { selectDirection } from "@/store/slices/languageSlice";
import { useSelector } from "react-redux";


const FaqAccordion = ({
  items,
}: {
  items: { question: string; answer: string }[];
}) => {
    const direction = useSelector(selectDirection);
  return (
    <Stack
      gap="8"
      w={"90%"}
      color={"#rgba(46, 54, 81, 1)"}
      p="4"
      borderRadius="md"
      textAlign="start"
    >
      <For each={["md"]} >
        {(size) => (
          <Stack gap="2" key={size} >
            <Accordion.Root size={size} collapsible defaultValue={["b"]} > 
              {items.map((key, index) => (
                <Accordion.Item key={index} value={key.question}>
                  <Accordion.ItemTrigger w={"100%"} justifyContent={"space-between"} textAlign={"start"} bgColor="inherit">
                    <Accordion.ItemIndicator display={direction === "rtl" ? "block" : "none"} />

                    <Span
                    textAlign={direction === "rtl" ? "right" : "left"}
                      flex="1"
                      color="rgba(46, 54, 81, 1)"
                      bgColor="inherit"
                    >
                      {key.question}
                    </Span>
                    <Accordion.ItemIndicator display={direction === "rtl" ? "none" : "block"} />

                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody
                      p={4}
                      color="rgba(95, 97, 102, 1)"
                      fontWeight={400}
                      textAlign={direction === "rtl" ? "right" : "left"}
                      lineHeight="1.5"
                      whiteSpace={"pre-wrap"}
                    >
                      {key.answer}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Stack>
        )}
      </For>
    </Stack>
  );
};

export default FaqAccordion;
