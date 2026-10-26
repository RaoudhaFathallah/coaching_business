"üse client"
import React from 'react'

interface ButtonProps {
	label: string;
	classAtts: string;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({label, classAtts, disabled}) => {
  return (
    <div>
      <button
        type="submit"
        className={classAtts}
        disabled={disabled}
      >
        {label} <i className="ri-arrow-right-up-line"></i>
      </button>
    </div>
  )
}

export default Button