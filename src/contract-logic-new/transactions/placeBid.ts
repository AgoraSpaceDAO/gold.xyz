import { PublicKey, Transaction } from "@solana/web3.js"
import { serialize } from "borsh"
import { CONNECTION } from "../consts"
import { getTopBidder } from "../queries/getTopBidder"
import { getCurrentCycleNumberFromId } from "../queries/readCycleState"
import { PlaceBidArgs, SCHEMA } from "../schema"
import { parseInstruction } from "../utils"
import { placeBidWasm } from "../wasm-factory/instructions"

export async function placeBid(
  auctionOwnerPubkey: PublicKey,
  auctionId: Uint8Array,
  bidder: PublicKey,
  amount: number
) {
  const topBidder = await getTopBidder(CONNECTION, auctionId, auctionOwnerPubkey);
  const currentCycleNumber = await getCurrentCycleNumberFromId(CONNECTION, auctionId, auctionOwnerPubkey);

  const placeBidArgs = new PlaceBidArgs({
    userMainPubkey: bidder,
    auctionOwnerPubkey: auctionOwnerPubkey,
    auctionId: auctionId,
    cycleNumber: currentCycleNumber,
    topBidderPubkey: topBidder,
    amount: amount,
  })

  const placeBidInstruction = parseInstruction(
    placeBidWasm(serialize(SCHEMA, placeBidArgs))
  )

  return new Transaction().add(placeBidInstruction)
}
