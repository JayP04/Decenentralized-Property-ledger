// import * as React from "react"
// import { Card, CardContent } from "../../components/ui/card"
// import {



//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../../components/ui/carousel"

// export function CarouselSize() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="distributedcarousel"
//     >
//       <CarouselContent>
//         {Array.from({ length: 7 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious  />
//       <CarouselNext />
//     </Carousel>
//   )
// }

// export default CarouselSize;

import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export function CarouselSize({ nfts }) {
  return (
  <div className="carousel-container"> 
    <Carousel
      opts={{
        align: "start",
      }}
      className="distributedcarousel"
    >
      <CarouselContent>
      {nfts.map((nft, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <img src={nft.image} alt={nft.name} className="mb-4" />
                    <span className="text-xl font-semibold">{nft.name}</span>
                    <p className="mt-2">{nft.description}</p>
                    <button
                      onClick={() => {
                      console.log(nft.deedlink);
                      window.open(nft.deedlink, '_blank');
                      }}
                      className="text-blue-500 mt-2 block border border-blue-500 rounded px-4 py-2"
                    >
                      Title Deed
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  );
}

export default CarouselSize;