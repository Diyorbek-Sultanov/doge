import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	error?: FieldError | undefined
}

type TypeFieldProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeFieldProps {}
