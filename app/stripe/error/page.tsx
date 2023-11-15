import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import Link from "next/link";

const ErrorStripe = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <XCircle className="text-red-500 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Something went wrong...
          </h3>

          <Button asChild variant={"secondary"} className="mt-5">
            <Link href="/">GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorStripe;
