import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import useAuction from "components/[auction]/hooks/useAuction"
import { deleteAuction } from "contract-logic/transactions/deleteAuction"
import useSubmit from "hooks/useSubmit"
import useToast from "hooks/useToast"
import { useRef } from "react"

export default function DeleteDialog({ isOpen, onClose }) {
  const { auction, mutate } = useAuction()
  const { connection } = useConnection()
  const { sendTransaction } = useWallet()
  const toast = useToast()
  const alertCancelRef = useRef()

  const handleDeleteAuction = async () => {
    const tx = await deleteAuction(auction?.id, auction?.ownerPubkey)
    console.log(tx)
    const signature = await sendTransaction(tx, connection, {
      skipPreflight: false,
      preflightCommitment: "confirmed",
    })
    console.log("info", "Transaction sent:", signature)

    await connection.confirmTransaction(signature, "confirmed")
    console.log("success", "Transaction successful!", signature)
  }

  const { onSubmit, isLoading } = useSubmit(handleDeleteAuction, {
    onSuccess: () => {
      toast({
        title: `Auction successfully frozen!`,
        status: "success",
      })
      mutate()
      onClose()
    },
    onError: (e) =>
      toast({
        title: "Error freezing auction",
        description: e.toString(),
        status: "error",
      }),
  })

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={alertCancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Delete auction</AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? Deleting the auction cannot be undone. Current cycle's top bidder
            will be refunded and you receive all remaining funds from your treasury.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={alertCancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={onSubmit}
              isLoading={isLoading}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
