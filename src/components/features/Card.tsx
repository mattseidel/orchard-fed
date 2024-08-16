import ProgressiveImage from "../common/Image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Feature } from "./featuresList";

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
        <h1 className="capitalize">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </CardContent>
      <CardFooter>
        <button className="border-b border-red-500 py-2 hover:border-none hover:bg-red-500 transition duration-300 rounded-md px-1">
          READ MORE
        </button>
      </CardFooter>
    </Card>
  );
};
