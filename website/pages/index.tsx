import { Heading, VStack, chakra, HStack, Text } from "@chakra-ui/react";
import DownloadButton from "components/DownloadButton";
import Image from "next/image";
import { DisplayAd } from "../components/special";

const Root = () => {
  return (
    <>
      <VStack spacing="$4" alignItems="stretch">
        <chakra.section
          h="60vh"
          bgColor="#f5f5f5"
          bgImage="url(/spotube-screenshot-web.jpg)"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPos="right"
        >
          <VStack mt="10" mx="6" spacing="4" alignItems="flex-start">
            <chakra.section
              p={{ base: "5", md: "0" }}
              borderRadius="2xl"
              bgColor={{
                base: "#f5f5f599",
                md: "transparent",
              }}
            >
              <Heading color="#212121" size="2xl">
                Spotube
              </Heading>
              <Heading color="#212121" size="lg" maxW="500px">
                A fast, modern, lightweight & efficient Spotify Music Client for
                every platform
              </Heading>
            </chakra.section>
            <DownloadButton />
          </VStack>
        </chakra.section>
        <DisplayAd slot="9501208974" />
        <chakra.div bgGradient="linear-gradient(180deg, rgba(249,207,143,1) 0%, rgba(250,250,250,1) 45%)">
          <VStack
            bgImage="url(/headline-1.png)"
            m="10"
            bgRepeat="no-repeat"
            bgSize="contain"
            h="60vh"
            alignItems="flex-end"
            justify="center"
          >
            <chakra.div
              maxW={{ base: "full", md: "300px", lg: " 400px" }}
              bgGradient={{
                base: "radial-gradient(circle, #ffffff 23%, rgba(0,0,0,0) 82%)",
                md: "radial-gradient(circle, #ffffff00 23%, rgba(0,0,0,0) 82%)",
              }}
              color="gray.800"
            >
              <Heading>Access all your Spotify Music & Playlists</Heading>
              <Text>
                You can use all your Spotify tracks & playlists here. Everything
                will be in Sync & some action taken from Spotube will also
                reflect on your Spotify Account
              </Text>
            </chakra.div>
          </VStack>
        </chakra.div>
        <VStack
          p="5"
          mt="10"
          pos="relative"
          _before={{
            content: "''",
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: -1,
            display: "block",
            height: "100%",
            width: "100%",
            background: "url('/headline-2b.png') rgba(0, 0, 0, 0.9)",
            bgSize: "contain",
            bgRepeat: "no-repeat",
            bgPos: "center",
            filter: "blur(2px)",
          }}
        >
          <chakra.div maxW="600px">
            <Image
              src="/headline-2a.svg"
              width="1920"
              height="1080"
              layout="intrinsic"
              alt="Headline 2"
            />
          </chakra.div>
          <chakra.div
            maxW="600px"
            color="gray.50"
            bgColor="blackAlpha.500"
            p="3"
            borderRadius="3xl"
          >
            <Heading>On your Mobile, PC, Tablet everywhere</Heading>
            <Text>
              Spotube is available for all &quot;Major&quot; Platforms including
              <b> Linux, Android, Windows & MacOS </b>natively unlike Spotify
              Desktop App which uses Electron, that is basically the entire
              Chrome
            </Text>
          </chakra.div>
        </VStack>
        <DisplayAd slot="9501208974" />
        <HStack wrap="wrap-reverse" justify="center" px="8" align="center">
          <chakra.div maxW="400px">
            <Heading>Open Source, privacy respecting & No ads</Heading>
            <Text>
              Spotube is an Open Source App being developed & maintained by
              Kingkor&nbsp;Roy&nbsp;Tirtho & is built by the Contributions of
              the Community and Contributors
            </Text>
          </chakra.div>
          <chakra.div maxW="500px">
            <Image
              src="/headline-3.svg"
              width="1920"
              height="1080"
              layout="intrinsic"
              alt="Headline 2"
            />
          </chakra.div>
        </HStack>
        <VStack py="10">
          <div>
            <Heading size="lg">Download Now</Heading>
            <Text>
              Download Spotube for every platform you want. It&apos;s available
              everywhere
            </Text>
          </div>
          <DownloadButton />
        </VStack>
      </VStack>
    </>
  );
};

export default Root;
