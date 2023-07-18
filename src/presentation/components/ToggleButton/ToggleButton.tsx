import { Container } from './style';
import { useState } from 'react'

type ToggleTypes = {
  label: string;
  toggled: boolean;
  onClick: (isToggled: boolean) => void
}
const ToggleButton = ({ label, toggled, onClick }: ToggleTypes) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <Container>
            <label>
              <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
              <span />
              <strong>{label}</strong>
            </label>
        </Container>
    )
}
export default ToggleButton;