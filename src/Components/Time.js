import { useEffect, useState } from 'react'
import { Container, ButtonGroup, ToggleButton } from 'react-bootstrap'

const Time = () => {

  const [time, setTime] = useState({})
  const [timeMsg, setTimeMsg] = useState('')
  const [radioValue, setRadioValue] = useState('1')

  const radios = [
    { name: '12 Hour', value: '1' },
    { name: 'Military', value: '2' }
  ]

  useEffect(() => {
    const today = new Date()

    setTime({
      hours: today.getHours(),
      minutes: today.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
      seconds: today.getSeconds(),
      amPm: 'AM'
    })

    if (time.hours >= 6 && time.hours <= 12) {
      setTimeMsg('Good Morning!')
    } else if (time.hours <= 17 && time.hours > 12) {
      setTimeMsg('Good Afternoon!')
    } else if (time.hours <= 20 && time.hours > 20) {
      setTimeMsg('Good Evening!')
    } else {
      setTimeMsg('Good Night!')
    }
  }, [time.hours, time.minutes])

  if (time.hours >= 12) {
    time.amPm = 'PM'
  }

  let time12 = 0
  if (time.hours > 12) {
    time12 = time.hours - 12
  } else if (time.hours === 0) {
    time12 = 12
  }

  let timeRadio = 0
  if (radioValue === '1') {
    timeRadio = time12
  } else {
    timeRadio = time.hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  }

  if (time12 < 1) {
    time12 = 12
  }

  return (
    <Container className='Time'>
      <ButtonGroup toggle>
        {radios.map((radio, index) => (
          <ToggleButton
            key={index}
            type='radio'
            variant='secondary'
            size='sm'
            name='radio'
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <h1 className='time-h1'>{timeRadio}:{time.minutes} {time.amPm}</h1>
      <h2 className='time-h2'>{timeMsg}</h2>
    </Container>
  )
}

export default Time