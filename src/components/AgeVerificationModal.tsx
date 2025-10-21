import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wine } from "lucide-react";

const AgeVerificationModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem("ayawin-age-verified");
    if (!hasVerified) {
      setOpen(true);
    }
  }, []);

  const handleVerify = (isOver18: boolean) => {
    if (isOver18) {
      localStorage.setItem("ayawin-age-verified", "true");
      setOpen(false);
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <Wine className="h-16 w-16 text-accent" />
          </div>
          <DialogTitle className="text-center text-2xl">Age Verification Required</DialogTitle>
          <DialogDescription className="text-center text-base">
            You must be 18 years or older to access this website. This site contains information about alcoholic beverages.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button 
            onClick={() => handleVerify(true)} 
            className="w-full gradient-primary text-lg py-6"
          >
            I am 18 or older
          </Button>
          <Button 
            onClick={() => handleVerify(false)} 
            variant="outline"
            className="w-full"
          >
            I am under 18
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          By entering this site, you accept our Terms and Conditions and Privacy Policy.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationModal;
