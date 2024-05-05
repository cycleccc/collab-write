import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ModalProps {
  open: boolean
  children: ReactNode
  className?: string
  modalAnimation?: Variants
  modalClassName?: string
  closePanelOnClick?: boolean
  closeModal: () => void
}

const variants: Variants[] = [
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', duration: 0.5, bounce: 0.4 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
  },
]

export const [backdrop, modal] = variants

export function Modal({
  open,
  children,
  className,
  modalAnimation,
  modalClassName,
  closePanelOnClick,
  closeModal,
}: ModalProps): JSX.Element {
  return (
    <>
      {
    open && (
      <div className="relative z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
            <div
              className={modalClassName}
              {...(modalAnimation ?? modal)}
              onClick={closePanelOnClick ? closeModal : undefined}
            >
              {children}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
       //   <Dialog
    //     className="relative z-50"
    //     open={open}
    //     onClose={closeModal}
    //     static
    //   >
    //     <motion.div
    //       className="hover-animation fixed inset-0 bg-black/40 dark:bg-[#5B7083]/40"
    //       aria-hidden="true"
    //       {...backdrop}
    //     />
    //     <div
    //       className={cn(
    //         'fixed inset-0 overflow-y-auto p-4',
    //         className ?? 'flex items-center justify-center',
    //       )}
    //     >
    //       <Dialog.Panel
    //         className={modalClassName}
    //         as={motion.div}
    //         {...(modalAnimation ?? modal)}
    //         onClick={closePanelOnClick ? closeModal : undefined}
    //       >
    //         {children}
    //       </Dialog.Panel>
    //     </div>
    //   </Dialog>
    // </AnimatePresence>
   }
    </>
  )
}
