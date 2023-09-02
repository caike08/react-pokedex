import clsx from 'clsx'

import css from './search.module.scss'

type SearchType = {
  placeholder?: string
  autoFocus?: boolean
  className?: string
  inputRef?: React.RefObject<HTMLInputElement>
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Search({
  autoFocus,
  className,
  inputRef,
  placeholder = 'Search...',
  onChange 
}: SearchType) {

  const inputClassNames = clsx(css.search, className)

  return (
		<input
			autoFocus={autoFocus}
			className={inputClassNames}
			onChange={onChange}
			ref={inputRef}
      placeholder={placeholder}
      type='search'
		/>
  )
}

export default Search
