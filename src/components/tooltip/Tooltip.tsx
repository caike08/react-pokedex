import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react'
import { useState } from 'react'

import css from './tooltip.module.scss'

type TooltipProps = {
  children: React.ReactNode
  content: React.ReactNode
}

// based on https://floating-ui.com/docs/tooltip
function Tooltip({ children, content }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: 'top',
  })

  const hover = useHover(context, {move: false})
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, {role: 'tooltip'})

  // Merge all the interactions into prop getters
  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} className={css.trigger}>
        {children}
      </div>
      {isOpen && (
        <FloatingPortal>
          <div
            className={css.tooltip}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}

export default Tooltip
