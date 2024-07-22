import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Popover
      showArrow
      offset={10}
      placement="bottom"
      motionProps={{  
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            duration: 0.1,
            transition: {
              opacity: {
                duration: 0.15,
              },
            },
          },
          exit: {
            y: "10%",
            opacity: 0,
            duration: 0,
            transition: {
              opacity: {
                duration: 0.1,
              },
            },
          },
        },
      }}
    >
      <PopoverTrigger>
        <Button className="bg-blue-400">Copiar</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col justify-center items-center lg:w-[18rem] overflow-hidden gap-2 px-2 py-2">
          <p className="text-small text-black font-bold uppercase">Guarde el <span className="text-[0.9rem] text-blue-600">Enigma</span> en tu memoria</p>
          <p className="text-tiny break-words w-full uppercase text-black">FEDajhbsdvjkashgdbvfkjashdgfkjsasdkjasdhfgakjsdhfgaskjdhflkahjsdgflkhjsagdlfkjashldfkjashdlfkjashdflkE</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
