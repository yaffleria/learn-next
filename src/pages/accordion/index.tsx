import * as Accordion from '@/components/accordion'

function AccordionPage() {
  return (
    <>
      <h1>Accordion Page</h1>
      <Accordion.Root>
        <Accordion.Item value={'accordion-1'}>
          <Accordion.Trigger>좋아하는 가수는?</Accordion.Trigger>
          <Accordion.Content>아이유</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value={'accordion-2'}>
          <Accordion.Trigger>좋아하는 가수는?</Accordion.Trigger>
          <Accordion.Content>에스파</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value={'accordion-3'}>
          <Accordion.Trigger>좋아하는 가수는?</Accordion.Trigger>
          <Accordion.Content>뉴진스</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>  
  )
}

export default AccordionPage