import ProgressiveImage from "../common/Image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Feature } from "./featuresList";
import { Modals } from "./Modals";


export const CardElement = ({
  title,
  description,
  lowResImage,
  highResImage,
}: Feature) => {
  return (
    <Card className="text-gray-100 border-none">
      <CardHeader>
        <ProgressiveImage
          fallbackSrc={lowResImage}
          src={highResImage}
          alt={title}
          className="w-full h-3/4 border-b border-b-red-500"
        />
      </CardHeader>
      <CardContent>
        <h1 className="capitalize mb-4">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </CardContent>
      <CardFooter className="mt-4">
        <Modals title={title} description={description} highResImage={highResImage} lowResImage={lowResImage} />
      </CardFooter>
    </Card>
  );
};
