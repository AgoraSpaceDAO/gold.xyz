import { useDisclosure } from "@chakra-ui/hooks"
import {
  Button,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react"
import Identicon from "components/common/Identicon"
import Modal from "components/common/Modal"
import shortenHex from "utils/shortenHex"
import useCycle from "./hooks/useCycle"

const BidHistory = () => {
  const { cycle } = useCycle()
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (!cycle?.bids?.length) return null

  return (
    <>
      <Button variant="ghost" bg="blackAlpha.200" h="48px" w="full" onClick={onOpen}>
        Bid history
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bid history</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              {cycle.bids.map((bid) => (
                <Flex
                  key={bid.amount.toString()}
                  bg="blackAlpha.300"
                  px="4"
                  py="3"
                  borderRadius="xl"
                  w="full"
                >
                  <Identicon address={bid.bidderPubkey.toString()} size={20} />
                  <Text ml="2">{shortenHex(bid.bidderPubkey.toString())}</Text>
                  <Text ml="auto" fontWeight="semibold">
                    {bid.amount} SOL
                  </Text>
                </Flex>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BidHistory
