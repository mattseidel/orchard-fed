import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Feature } from "./featuresList";
import ProgressiveImage from "../common/Image";
import { Link } from "../common/Link";
export const Modals = ({
  title,
  description,
  highResImage,
  lowResImage,
}: Feature) => {
  return (
    <Dialog>
      <DialogTrigger className="border-b border-red-500 py-2 font-open-sans-semi-condensed hover:border-none hover:bg-red-500 transition duration-300 rounded-md px-1">
        Read more
      </DialogTrigger>
      <DialogContent className="bg-gray-950 text-white px-8 py-10 mb-12">
        <DialogHeader>
          <DialogTitle className="text-bold font-open-sans-condensed text-3xl mb-4">
            {title}
          </DialogTitle>
          <ProgressiveImage
            src={highResImage}
            fallbackSrc={lowResImage}
            alt={title}
            className="w-full h-3/4 border-b border-b-red-500 mb-8"
          />
          <DialogDescription className="text-muted text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link className="text-white bg-red-500 font-open-sans-semi-condensed hover:bg-red-600 transition duration-300 rounded-md px-4 py-2 text-center cursor-pointer">
            Discover more
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
