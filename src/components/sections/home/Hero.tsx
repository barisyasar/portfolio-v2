import RecapButton from '@/components/RecapButton';
import SocialMedia from '@/components/SocialMedia';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import PROFILE_IMG_4 from '../../../../public/profile_4.webp';

function Hero() {
  return (
    <Card className="section flex min-h-[calc(100svh-66px-2.5rem)] flex-col md:min-h-[calc(100svh-66px-4rem)]">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="max-w-screen-sm space-y-3">
          <div className="card--5 mx-auto size-60 rounded-full p-3 xs:size-72 xl:size-96">
            <Image
              src={PROFILE_IMG_4}
              alt="Barış YAŞAR"
              priority
              quality={80}
              className="rounded-full"
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCADBAMEDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBAUD/8QAFxABAQEBAAAAAAAAAAAAAAAAAAEREv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A8cBk7lVFBKAEqACRFSgJWa1WaYZrFbrFCmKxW6xVKjNQoZrFjMahIrUVIpM6oASogA6RFJ0KIpEqoBKiAIBDJKzVqUGzWa1WKZxmsVqsU1RmotQzWNRmLCTWoqRSZ1VZUJUQBOkRSdKiKEqIBNUQ0JVE1NAKlLWbTBWK1WKFRKxWqxTVGaFQ1KsZahIrSsroZ1oZ1dJKiaAnUIE6VVlQmqahppq6mppoSupqamgtLUtLWbTGlrNW1m0KiVitVihcSoUM1EAmt6azq6TOtaazpoRrWjOgGu0QJ0qIgTV01NTQmrpqammi1dTU1nTTrVrNqamgatrNpaloXKlZq2s0LgggUpqJoTWtXWdNDOtaaxqaGVr6aPnoeFr0RBDtVBAmrqampps6trNpazabO1bU1m1LVYi1rU1npNGCVrU1NTSaSrazS1CawECMQShNq6lqWs6pl1WtNQDNrRkAekCIdqoIaaVLSs02dLWbS1i1UY9UtQQ2QmiA41prGrpVrzVQRLaAIRiVWaE2pUBTJRABRAB6aAh1iCGmlZq1mmzqVitViqjDoQDQIIDSmlQlxQE1rAEJQzVqU4ioAaAAAAAeiIIdYioaalSqzTZ1KxW6xVRh0iKhpEEI0oUCoAJawAI0rLVZNnQAyAAAAB6CAh1iKhpozVQIqVmtVKplY+Y1YzYbPESqmAIKJaSIATQAASstVlTOgAIAAAAHcAh1gATUANNRmtJQzrNTGkNOM4jSAYyjSEuIAFIKgJKy1WVM6AAgAAAAdwCHWAgTQAJqIoaKyjSAmUaQBmpVqUlRADMRUBVKy1WTZ0AMgAAAAdoCHWqACoAEVADTUQAlEoAM1KBKiAGYgAkrIGigBpAAAAB//9k="
              sizes="(min-width: 1280px) 360px, (min-width: 480px) 264px, 216px"
            />
          </div>
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-4xl xs:text-5xl">Barış YAŞAR</h1>
            </CardTitle>
            <CardDescription className="text-center text-lg xs:text-2xl">
              Full-Stack Developer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SocialMedia />
          </CardContent>
        </div>
      </div>
      <div className="flex justify-center">
        <RecapButton />
      </div>
    </Card>
  );
}

export default Hero;
