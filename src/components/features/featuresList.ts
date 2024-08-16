import LowResImage1 from "@/assets/component-02/Image-01.jpg";
import HighResImage1 from "@/assets/component-02/Image-01@2x.jpg";
import LowResImage2 from "@/assets/component-02/Image-02.jpg";
import HighResImage2 from "@/assets/component-02/Image-02@2x.jpg";
import LowResImage3 from "@/assets/component-02/Image-03.jpg";
import HighResImage3 from "@/assets/component-02/Image-03@2x.jpg";

export interface Feature {
  title: string;
  description: string;
  lowResImage: string;
  highResImage: string;
}

export const features: Feature[] = [
  {
    title: "Summer lunch menu by mark best",
    description:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warner weather and entertaning at home.",
    lowResImage: LowResImage1,
    highResImage: HighResImage1,
  },
  {
    title: 'A triditional chrismas eve, mark best style',
    description:'One of Autralia\'s best chef and AEG ambassador, Mark Best, shares his favourit Chrismas Eve menu which is sure to impress your guests.',
    lowResImage: LowResImage2,
    highResImage: HighResImage2
  },
  {
    title: 'Taking Taste Further',
    description: 'This exclusive cookbook gives you all the know-how you need. We\'ve designed it to make sure you get the most out of our products - and best out of your food.',
    lowResImage: LowResImage3,
    highResImage: HighResImage3
  }
];
