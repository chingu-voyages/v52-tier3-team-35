import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LoadingModal = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Dialog open>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle>{title || "Loading, please wait a moment"}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
