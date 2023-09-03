import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useId,
  FloatingOverlay,
  FloatingFocusManager,
  FloatingPortal,
} from '@floating-ui/react'
import { useState } from 'react'

import css from './dialog.module.scss'

type DialogProps = {
  children: React.ReactNode
  content: React.ReactNode
}

// based on https://floating-ui.com/docs/dialog
function Dialog({ children, content }: DialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  const {refs, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
  })
  const role = useRole(context)

  // Merge all the interactions into prop getters
  const {getReferenceProps, getFloatingProps} = useInteractions([
    click,
    dismiss,
    role,
  ])

  // Set up label and description ids
  const labelId = useId()
  const descriptionId = useId()
 

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <FloatingPortal>          
          <FloatingOverlay
            lockScroll
            style={{background: 'rgba(0, 0, 0, 0.8)'}}
          >
            <FloatingFocusManager context={context}>              
              <div
                className={css.dialog}
                ref={refs.setFloating}
                aria-labelledby={labelId}
                aria-describedby={descriptionId}
                {...getFloatingProps()}
              >
                {content}
                <button onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </>
  );
}

export default Dialog
