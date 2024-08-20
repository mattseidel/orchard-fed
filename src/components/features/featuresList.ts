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
    title: "Summer Lunch Menu by Mark Best",
    description:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    lowResImage: LowResImage1,
    highResImage: HighResImage1,
  },
  {
    title: 'A Traditional Christmas Eve, Mark Best Style',
    description: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favorite Christmas Eve menu, which is sure to impress your guests.",
    lowResImage: LowResImage2,
    highResImage: HighResImage2,
  },
  {
    title: 'Taking Taste Further',
    description: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products—and the best out of your food.",
    lowResImage: LowResImage3,
    highResImage: HighResImage3,
  }
];

