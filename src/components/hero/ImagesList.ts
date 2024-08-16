import image1Low from "@/assets/component-01/Image-01.jpg";
import image1High from "@/assets/component-01/Image-01@2x.jpg";

import image2Low from "@/assets/component-01/Image-02.jpg";
import image2High from "@/assets/component-01/Image-02@2x.jpg";

import image3Low from "@/assets/component-01/Image-03.jpg";
import image3High from "@/assets/component-01/Image-03@2x.jpg";

interface Image {
    lowRes: string;
    highRes: string;
    alt: string;
}

export const images: Image[] = [
    {
        lowRes: image1Low,
        highRes: image1High,
        alt: "Father and son walking in the woods",
    },
    {
        lowRes: image2Low,
        highRes: image2High,
        alt: "Bowl of rotten fruit",
    },
    {
        lowRes: image3Low,
        highRes: image3High,
        alt: "Different types of herbs",
    },
];