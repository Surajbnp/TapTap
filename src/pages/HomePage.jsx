import React, { useState } from "react";
import styles from "../styles/homepage.module.css";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IoStorefront } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
import { FcCollaboration } from "react-icons/fc";

const HomePage = () => {
  const [counter, setCounter] = useState(0);
  const [floatText, setFloatText] = useState([]);

  const handlePomemeClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCounter(counter + 1);
    const id = Date.now();
    setFloatText([...floatText, { id, x, y }]);
    setTimeout(() => {
      setFloatText((current) => current.filter((item) => item.id !== id));
    }, 1000);
  };

  return (
    <Box className={styles.container}>
      <Image
        className={styles.badal1}
        width={"50%"}
        src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1722408921/cloud_low_0back_lhjvm1.svg"
      />
      <Image
        className={styles.badal2}
        src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1722408932/cloud_top2_z87v3j.svg"
        width={"50%"}
      />
      <Image
        className={styles.badal3}
        src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1722408931/cloud_mid_brsmqw.svg"
        width={"50%"}
      />
      <Image
        className={styles.badal4}
        src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1722408921/cloud_low_0back_lhjvm1.svg"
        width={"80%"}
      />
      <Image
        className={styles.badal5}
        src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1722412772/cloud_low_2back_w5lxj2.svg"
        width={"800px"}
      />
      <Box w={"100%"} h={"100vh"} style={{ zIndex: 2 }}>
        <Box className={styles.levelCont}>
          <Box className={styles.levelBar}>
            <Box className={styles.profile}></Box>
            <Box className={styles.bar}></Box>
          </Box>
        </Box>
        <Box className={styles.pomemeCont}>
          <Image
            zIndex={100}
            w={"60%"}
            src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1722418570/Pomeme_t2md7i.png"
            onClick={handlePomemeClick}
            style={{ cursor: "pointer" }}
          />
          <Flex
            width={"fit-content"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            mt={5}
          >
            <Image
              w={"10%"}
              src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/us-dollar-coin-color-icon.png"
            />
            <Text className={styles.counter}>{counter}</Text>
          </Flex>
          {floatText.map(({ id, x, y }) => (
            <Text
              key={id}
              className={styles.floatText}
              style={{ left: x, top: y }}
            >
              +1
            </Text>
          ))}
          <Box className={styles.boxCont}>
            <Box>
              <IoStorefront />
              <Text>Store</Text>
            </Box>
            <Box>
              <GiReceiveMoney />
              <Text>Earn</Text>
            </Box>
            <Box>
              <GrTest />
              <Text>Lab</Text>
            </Box>
            <Box>
              <FcCollaboration />
              <Text>Friends</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
