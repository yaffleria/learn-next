import { createContext, useState, useCallback, useContext, PropsWithChildren } from "react";

interface AcoordionContextType {
  value: Set<string>
  setter: (item: string) => void
}

// AccordionConText, Hook
const AccordionContext = createContext<AcoordionContextType | null>(null)
const useAccordionContext = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('AccordionContext is not provided')
  }
  return context
}

// AccordionRoot
function AccordionRoot(props: PropsWithChildren) {
  const [item, setItem] = useState<Set<string>>(new Set())
  const setter = useCallback((value: string) => {
    const newItem = new Set(item)

    if (item.has(value)) {
      newItem.delete(value)
      setItem(newItem)
    } else {
      newItem.add(value)
      setItem(newItem)
    }
  }, [item])

  return (
    <AccordionContext.Provider value={{ value: item, setter }}>
      {props.children}
      <pre>
        {item}
      </pre>
    </AccordionContext.Provider>
  )
}

// AccordionItemContext, Hook
interface AccordionItemProps extends PropsWithChildren {
  value: string
}
const AccordionItemContext = createContext<string>('')
const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext)

  if (!context) {
    throw new Error('AccordionItemContext is not provided')
  }
  return context
}
// AccordionItem
function AccordionItem({ value, children }: AccordionItemProps) {
  const style = {
    border: '1px solid white',
    padding: '10px',
    margin: '10px 0',
  }
  return (
    <AccordionItemContext.Provider value={value}>
      <div style={style}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

// AccordionTrigger
function AccodionTrigger({ children }: { children: string }) {
  const { value, setter } = useAccordionContext()
  const label = useAccordionItemContext()
  const isExpended = value.has(label)

  const style = {
    background: 'brown',
  }

  return (
    <div onClick={() => setter(label)} style={style}>
      <span>{children}</span>
      {isExpended ? '👇' : '👉'}
    </div>  
  )
}

// AccordionContent
function AccordionContent({ children }: PropsWithChildren) {
  const { value } = useAccordionContext()
  const label = useAccordionItemContext()
  const isExpended = value.has(label)

  if (!isExpended) return null

  const style = {
    background: 'green',
    maxHeight: isExpended ? '500px' : '0px',
    overflow: 'hidden',
    transition: isExpended ? 'all 0.5s ease-in' : 'all 0.5s ease-out',
  }

  return (
    <div
      style={style}
    >
      {children}
    </div>
  )
}

const Root = AccordionRoot
const Item = AccordionItem
const Trigger = AccodionTrigger
const Content = AccordionContent

export {
  Root,
  Item,
  Trigger,
  Content
}