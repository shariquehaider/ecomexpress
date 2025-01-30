import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function HomeCarousel() {
  return (
    <>
      <div className="mx-auto max-w-xs">
        <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem/>
            <div className="w-full flex">
              <div>
                <img src="" alt="" />
              </div>
            </div>
          <CarouselItem/>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </div>
      
    </>
  )
}

export default HomeCarousel