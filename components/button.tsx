import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from 'react'

type ButtonProps = {
  children: React.ReactNode
  style?: CSSProperties | undefined
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export const Button = ({ children, style, ...button }: ButtonProps) => {
  return (
    <div>
      <div className="w-[172px] flex items-center justify-center hover:px-2 transition-all duration-200 ">
        <button {...button} className="primary-button w-full " style={style}>
          {children}
        </button>
      </div>
    </div>
  )
}
