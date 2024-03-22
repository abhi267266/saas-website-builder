import { useModal } from '@/providers/modal-provider'
import React from 'react'
import { Dialog, DialogHeader } from '../ui/dialog'
import { DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen: boolean
}

const CustomModal = ({title, subheading, children, defaultOpen}: Props) => {
    const {isOpen, setClose} = useModal()
  return (
  <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
        <DialogContent className='overflow-scroll md:max-h-[700px] md:h-fit h-screen bg-card'>
            <DialogHeader className='pt-8 text-left'>
                <DialogTitle className='text-2xl font-bold'>{title}</DialogTitle>
                <DialogDescription>{subheading}</DialogDescription>
            </DialogHeader>
        </DialogContent>
  </Dialog>
    )
}

export default CustomModal