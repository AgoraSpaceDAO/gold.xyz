import { StatGroup, Text, useBreakpointValue } from "@chakra-ui/react"
import { Stat, StatHelpText, StatNumber } from "@chakra-ui/stat"
import { useTimer } from "react-timer-hook"

type Props = {
  expiryTimestamp: number
  onExpire?: () => void
  simple?: any
}

const Countdown = ({ expiryTimestamp, onExpire, simple }: Props): JSX.Element => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(expiryTimestamp),
    onExpire,
  })
  const statSize = useBreakpointValue({ base: "sm", md: "md" })

  if (simple)
    return (
      <Text as="span" colorScheme="gray">
        {!!days || !!hours || !!minutes || !!seconds
          ? `${days > 0 ? `${days}d ` : ""} ${hours > 0 ? `${hours}h ` : ""} ${
              minutes > 0 ? `${minutes}m ` : ""
            } ${seconds}s left`
          : "Ended!"}
      </Text>
    )

  return (
    <StatGroup sx={{ gap: "6px" }}>
      {!!days && (
        <Stat size={statSize}>
          <StatNumber>{days}</StatNumber>
          <StatHelpText mb="0">Days</StatHelpText>
        </Stat>
      )}
      <Stat size={statSize}>
        <StatNumber>{hours}</StatNumber>
        <StatHelpText mb="0">Hours</StatHelpText>
      </Stat>
      <Stat size={statSize}>
        <StatNumber>{minutes}</StatNumber>
        <StatHelpText mb="0">Minutes</StatHelpText>
      </Stat>
      {!days && (
        <Stat size={statSize}>
          <StatNumber>{seconds}</StatNumber>
          <StatHelpText mb="0">Seconds</StatHelpText>
        </Stat>
      )}
    </StatGroup>
  )
}

export default Countdown
