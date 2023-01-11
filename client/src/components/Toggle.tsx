import styled from 'styled-components'

interface ToggleProps {
  isChecked: boolean
  id: string
  onChange: () => void
}

interface StyledLabelProps {
  isChecked: boolean
}

const Toggle: React.FC<ToggleProps> = ({ isChecked, id, onChange }) => {
  return (
    <>
      <input style={{display: 'none'}}
             name={'toggle-'+id}
             id={'toggle-'+id}
             type="checkbox"
             defaultChecked={isChecked}
             onChange={onChange}
      />
      <StyledLabel htmlFor={'toggle-'+id} isChecked={isChecked} />
    </>
  )
}

const StyledLabel = styled.label`
  position: relative;
  display: block;
  background-color: ${
    (props: StyledLabelProps) =>
      props.isChecked
        ? 'var(--color-blue)'
        : 'var(--color--300)'
  };
  width: 2em;
  height: 1em;
  border-radius: .128em;
  cursor: pointer;

  &::before {
    position: absolute;
    display: block;
    content: '';
    background-color: ${
      (props: StyledLabelProps) =>
        props.isChecked
          ? 'var(--color--100)'
          : 'var(--color--200)'
    };
    width: 40%;
    height: 70%;
    inset-block-start: 15%;
    inset-inline: ${
      (props: StyledLabelProps) =>
        props.isChecked
          ? 'auto 10%'
          : '10% auto'
    };
    border-radius: .128em;
    transition: .15s ease-in-out;
  }

  input {
    display: none;
  }
`

export default Toggle