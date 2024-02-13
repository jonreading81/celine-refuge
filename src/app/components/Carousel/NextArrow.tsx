import { IconButton } from '@material-tailwind/react';

const NextArrow = ({ handleNext }: { handleNext: () => void }) => (
  <IconButton
    variant="text"
    color="white"
    size="lg"
    onClick={handleNext}
    className="!absolute top-2/4 !right-4 -translate-y-2/4 rounded-full"
    aria-label="Next"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  </IconButton>
);

export default NextArrow;
